import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../../app/context/DataHelper";
import { find_category_post } from "../../../app/context/Helper";
import { Post } from "../../../app/context/PostContext";

export default function Popular(props: {data: any}) {
    const { slug } = useParams();
    const [items, setItems] = useState<Array<Post>>();
    const data = props.data;

    useEffect(() => {
        getPosts('posts', {limit: Number(data.limit) || 5}).then((res) => setItems(res.data));
    }, [slug]);

    return (
        <aside className="wrapper__list__article">
            <h4 className="border_section">{ data.title }</h4>
            <div className="wrapper__list-number">

                {items?.map((item, index) => {
                    let category = find_category_post(item);
                    
                    return (
                        <div className="card__post__list">
                            <div className="list-number">
                                <span>
                                    { index + 1 }
                                </span>
                            </div>
    
                            {category ? (
                                <Link to={category.url} className="category">
                                    { category.name }
                                </Link>
                            ) : ''}
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h5>
                                        <Link to={ item.url }>
                                            { item.title }
                                        </Link>
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    );
                })}
                    
            </div>
        </aside>
    );
}