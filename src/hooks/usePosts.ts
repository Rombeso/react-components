import {useMemo} from "react";
import {PostType} from "../App";

export const useSortedPosts = (posts: PostType[], sort: string) => {
    const sortedPosts = useMemo( () => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort] <= b[sort] ? -1 : 1)
        }
        return posts
    }, [posts, sort])

    return sortedPosts
}

export const usePosts = (posts: PostType[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchPost = useMemo( () => {
        return sortedPosts.filter( f => f.title.toLowerCase().includes(query))
    }, [sortedPosts, query])

    return sortedAndSearchPost;
}