import { PostType } from "../features/config/configSlice"
import { Post, Comment } from "./PostContext"

export interface IndexProps {
    posts: {
        data?: Array<Post>,
        meta?: {
            last_page?: number
            links?: Array<any>
            per_page?: number
            total?: number
        }
    }
}

export interface SingleProps {
    post: Post
    config?: any|null
}

export interface Page404Props {
    message?: string
}

export interface CommentProps {
    post: Post
    total: Number
}