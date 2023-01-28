import { Link, useNavigate, useParams } from "react-router-dom";
import { upload_url, __ } from "../app/context/Helper";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Post } from "../app/context/PostContext";
import { getPosts } from "../app/context/DataHelper";

interface FetchDataParams {
  page: number, 
  limit?: number, 
  sort_by?: string, 
  sort_order?: string
}

function fetchData(params: FetchDataParams) {
  return getPosts('posts', params);
}

const IndexTemplate = () => {
  const { page } = useParams();
  const [posts, setPosts] = useState<{
    data?: Array<Post>,
    meta?: {
        last_page?: number
        per_page?: number
        total?: number
    }
  }>();

  const navigate = useNavigate();
  const [sort, setSort] = useState<string>('id-DESC');

  const paginate = ({ selected }: { selected: number }) => {
    navigate('/page/'+ (selected + 1));
    setTimeout(() => window.scrollTo(0, 0), 300);
  };

  function handleSortOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let value = e.target.value;
    setSort(value);
  }

  useEffect(() => {
    let sortBy = sort.split('-')[0];
    let sortOrder = sort.split('-')[1];
    
    fetchData({page: Number(page || 1), sort_by: sortBy, sort_order: sortOrder})
      .then((res) => setPosts(res));
  }, [page, sort]);
    
    return (
      <>
        <main>
          <div className="container marketing mt-4">
            

            <hr className="featurette-divider" />

            <select name="sort" onChange={handleSortOnChange}>
              <option value="id-DESC">Laster</option>
              <option value="id-ASC">Oldest</option>
              <option value="title-ASC">A-Z</option>
              <option value="title-DESC">Z-A</option>
            </select>

            {posts ? posts?.data?.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="row featurette">
                  <div className={"col-md-7" + (index % 2 !== 0 ? ' order-md-2': '')}>
                    <h2 className="featurette-heading">
                      <Link to={item.url}>{item.title}</Link>
                    </h2>
                    <p className="lead">{item.description}</p>
                    <p><Link className="btn btn-secondary" to={item.url}>{__('View details')} &raquo;</Link></p>
                  </div>
                  <div className={"col-md-5"+ (index % 2 !== 0 ? ' order-md-1': '')}>
                      <img src={upload_url(item.thumbnail)} alt={item.title} className="w-100" />
                  </div>
                </div>
                <hr className="featurette-divider" />
              </React.Fragment>
            )) : ('')}

              {posts && (posts.meta?.last_page || 0) > 1 ? 
                <ReactPaginate
                      onPageChange={paginate}
                      pageCount={posts.meta?.last_page || 1}
                      previousLabel={'Prev'}
                      nextLabel={'Next'}
                      containerClassName={'pagination'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousLinkClassName={'page-link'}
                      nextLinkClassName={'page-link'}
                      activeLinkClassName={'active'}
                      hrefBuilder={(page, pageCount, selected) =>
                        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                      }
                      hrefAllControls={true}
                      forcePage={(Number(page) || 1) - 1}
                />
              : ''}
              

          </div>
        </main>
      </>
    )
}

export default IndexTemplate;