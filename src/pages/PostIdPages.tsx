import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";

type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState<CommentType[] | null>(null)
    const [fetchPostByID, isLoading, error] = useFetching(async (id) => {

        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {

        const response = await PostService.getByIdComments(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, [])
    console.log(error)
    // console.log(params.id)
    return (
        <div>
            {post &&
                <>
                    <h1>Страница поста c ID = {params.id}</h1>
                    {isLoading
                        ? <Loader/>
                        : <div><h2>{post.id}. {post.title}</h2><p>{post.body}</p></div>
                    }
                </>
            }
            {comments &&
                <>
                    <h1>Комментарии</h1>
                    {isComLoading
                        ? <Loader/>
                        : <div>
                            {comments.map( comm => {
                                return (
                                <div style={{marginTop: '15px'}}key={comm.id}>
                                    <h5>{comm.email}</h5>
                                    <h5>{comm.body}</h5>
                                </div>)
                            })}
                        </div>
                    }
                </>
            }

        </div>
    );
};

export default PostIdPages;