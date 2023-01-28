import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../../app/context/DataHelper";
import { upload_url } from "../../../app/context/Helper";
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

                {items?.map((item, index) => (
                    <div className="card__post__list">
                        <div className="list-number">
                            <span>
                                { index + 1 }
                            </span>
                        </div>
                        {/* {% if category %}
                        <a href="{{ category.url }}" className="category">
                            { category.name }
                        </a>
                        {% endif %} */}
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
                ))}
                    
            </div>
        </aside>
    );
}