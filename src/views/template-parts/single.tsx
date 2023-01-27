import { upload_url } from "../../app/context/Helper";
import { SingleProps } from "../../app/context/Props";
import CommentComponentTemplate from "../components/comments";

const SingleTemplate = (props: SingleProps) => {
    const { post, config } = props;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{post.title}</h1>

                        <div className="text-center">
                            <img src={upload_url(post?.thumbnail)} alt={post.title} className="w-75" />
                        </div>
                        
                        <div 
                            id="blog-content" 
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>

                {(config?.supports?.includes('comment')) ? (
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <CommentComponentTemplate post={post} total={post.total_comment} />
                        </div>
                    </div>
                ) : ''}
                
            </div>
        </>
    );
}

export default SingleTemplate;