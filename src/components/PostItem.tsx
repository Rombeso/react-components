import React from 'react';
import {PostType} from "../App";
import MyButton from "../UI/button/MyButton";

type PropsType = {
    post: PostType;
    number: number;
    removePost: (post: PostType) => void
}

const PostItem = (props: PropsType) => {
    const {id, title, body} = props.post;
    return (
        <div className={'post'}>
            <div>
            <strong>{props.number}. {title}</strong>
               <p>{body}</p>
            </div>
            <div className={'post__btns'}>
                <MyButton onClick={() => props.removePost(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;