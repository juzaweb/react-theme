import { PostType } from "../features/config/configSlice"
import { Post, Comment } from "./PostContext"

export interface IndexProps {
    posts: {
        data?: Array<Post>
    }
}

export interface SingleProps {
    post: Post
    config?: PostType|null
}

export interface Page404Props {
    message?: string
}

export interface CommentProps {
    comments?: Array<Comment>
    isLoading?: boolean
    support?: boolean
    total: Number
}