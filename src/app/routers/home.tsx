import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getPosts } from "../context/DataHelper";
import { upload_url, __ } from "../context/Helper";
import { Post } from "../context/PostContext";
import { selectConfig } from "../features/config/configSlice";

function fetchData(params: {limit?: number, page: number}) {
 return getPosts('posts', params);
}

export default function HomePage() {
  const config = useSelector(selectConfig);
  const [posts, setPosts] = useState<{
    data?: Array<Post>,
    meta?: {
        last_page?: number
        links?: Array<any>
        per_page?: number
        total?: number
    }
  }>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    fetchData({page: currentPage}).then((res) => setPosts(res));
  }, [currentPage]);

  return <Layout>
    <Helmet>
      <title>{config?.general?.title}</title>
      <meta name="description" content={config?.general?.description} />
    </Helmet>

    <main>
      <div className="container marketing mt-4">
        <div className="row">
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>{__('Heading')}</h2>
            <p>{__('Some representative placeholder content for the three columns of text below the carousel. This is the first column.')}</p>
            <p>
              <a 
                className="btn btn-secondary" 
                href="#">{__('View details')} &raquo;</a>
            </p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>{__('Heading')}</h2>
            <p>{__('Another exciting bit of representative placeholder content. This time, we\'ve moved on to the second column.')}</p>
            <p><a className="btn btn-secondary" href="#">{__('View details')} &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>{__('Heading')}</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">{__('View details')} &raquo;</a></p>
          </div>
        </div>

        <hr className="featurette-divider" />

        {posts ? posts?.data?.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="row featurette">
              <div className={"col-md-7" + (index % 2 != 0 ? ' order-md-2': '')}>
                <h2 className="featurette-heading">
                  <Link to={item.url}>{item.title}</Link>
                </h2>
                <p className="lead">{item.description}</p>
                <p><Link className="btn btn-secondary" to={item.url}>{__('View details')} &raquo;</Link></p>
              </div>
              <div className={"col-md-5"+ (index % 2 != 0 ? ' order-md-1': '')}>
                  <img src={upload_url(item.thumbnail)} alt={item.title} className="w-100" />
              </div>
            </div>
            <hr className="featurette-divider" />
          </React.Fragment>
        )) : ('')}

          {posts ? 
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
          />
          : ''}
          

      </div>
    </main>
  </Layout>;
}