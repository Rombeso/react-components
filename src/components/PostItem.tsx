import React from 'react';
import MyButton from "../UI/button/MyButton";
import {PostType} from "../pages/Posts";
import {useNavigate} from 'react-router-dom';

type PropsType = {
    post: PostType;
    number: number;
    removePost: (post: PostType) => void
}

const PostItem = (props: PropsType) => {
    const navigate = useNavigate()
    const {id, title, body} = props.post;
    return (
        <div className={'post'}>
            <div>
            <strong>{props.post.id}. {title}</strong>
               <p>{body}</p>
            </div>
            <div className={'post__btns'}>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>

                <MyButton onClick={() => props.removePost(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;