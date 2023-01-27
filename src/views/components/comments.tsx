import { useEffect, useState } from "react";
import { __ } from "../../app/context/Helper";
import { CommentProps } from "../../app/context/Props";
import { Comment } from "../../app/context/PostContext";
import { getPostComments, postComment } from "../../app/context/DataHelper";

interface formDataType {[key:string]: FormDataEntryValue}

const CommentComponentTemplate = (props: CommentProps) => {
    const { total, post } = props;
    const [comments, setComments] = useState<{data: Array<Comment>}>();
    const [msg, setMsg] = useState<{message: string, status: boolean}>();

    function showMessage(res: any, status: boolean = true) {
        setMsg({message: res.message, status: status});
        setTimeout(() => setMsg({message: '', status: status}), 1000);
    }

    function handleSubmitComment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        let responseBody: formDataType = {};
        formData.forEach((value, property:string) => responseBody[property] = value);
        postComment(post.slug, post.type, formData)
            .then((res) => showMessage(res.data, res.status === 200));

        event.currentTarget.reset();
        
        return false;
    }

    useEffect(() => {
        getPostComments(post.slug, post.type).then((res) => setComments(res));
    }, []);

    return (
        <>
            <h3 className="comments-title">{total.toString()} {__('Comments')}:</h3>

            {msg?.message ? (
                        <div className={"alert alert-"+(msg.status ? 'success': 'danger')}>{msg.message}</div>
                    ) 
                : ''
            }

            <form id="commentForm" onSubmit={handleSubmitComment} method="post">
                <p className="comment-notes">
                    <span id="email-notes">{ __('Your email address will not be published.') }</span>
                    { __('Required fields are marked') }
                    <span className="required">*</span>
                </p>

                <p className="comment-form-comment">
                    <label htmlFor="content">{ __('Comment') } <span className="required">*</span></label>
                    <textarea name="content" id="content" cols={45} rows={5} maxLength={65525} required></textarea>
                </p>

                <p className="comment-form-author">
                    <label htmlFor="author">{ __('Name') } <span className="required">*</span></label>
                    <input type="text" id="author" name="name" required/>
                </p>

                <p className="comment-form-email">
                    <label htmlFor="email">{ __('Email') } <span className="required">*</span></label>
                    <input type="email" id="email" name="email" required/>
                </p>

                <p className="comment-form-url">
                    <label htmlFor="website">{ __('Website') }</label>
                    <input type="text" id="website" name="website"/>
                </p>

                <p className="form-submit">
                    <input type="submit" name="submit" id="submit" className="submit" value={ __('Post Comment') }/>
                </p>
            </form>

            <ol className="comment-list">
            {comments?.data.map((item, index) => (
                <li className="comment" key={item.id}>
                    <aside className="comment-body">
                        <div className="comment-meta">
                            <div className="comment-author vcard">
                                <img src={ item?.avatar } className="avatar" alt="image" />
                                <b className="fn">{ item.name }</b>
                                <span className="says">{ __('says') }:</span>
                            </div>

                            <div className="comment-metadata">
                                <a href="#">
                                    <span>{ item.created_at }</span>
                                </a>
                            </div>
                        </div>

                        <div className="comment-content">
                            { item.content }
                        </div>

                        <div className="reply">
                            <a href={`?reply=${item.id}#comment-form`} className="comment-reply-link">{ __('Reply') }</a>
                        </div>
                    </aside>
                </li>
            ))}
            </ol>
        </>
    );
}

export default CommentComponentTemplate;