import { Post, Comment } from "./PostContext"

export interface IndexProps {
    posts: {
        data?: Array<Post>
    }
    isLoading: boolean
}

export interface SingleProps {
    post: Post
    isLoading: boolean
    config?: {
        supports?: Array<string>
    }
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