import { Link } from "react-router-dom";
import { upload_url } from "../../app/context/Helper";
import { SingleProps } from "../../app/context/Props";

const TaxonomyTemplate = (props: SingleProps) => {
    const { post } = props;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1><Link to={post.url}>{post.title}</Link></h1>

                        <img src={upload_url(post?.thumbnail)} alt="" className="w-100" />

                        <div 
                            id="blog-content" 
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </>
    );
}

export default TaxonomyTemplate;