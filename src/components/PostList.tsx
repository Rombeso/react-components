import React from 'react';
import PostItem from "./PostItem";
import {PostType} from "../App";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

type PropsType = {
    posts: PostType[];
    title: string;
    removePost: (post: PostType) => void
}

const PostList = ({posts, title, removePost}: PropsType) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {!!posts.length && posts.map((post, i) => {
                    return (
                        <CSSTransition
                            key={Number(post.id)}
                            // nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem removePost={removePost} number={i + 1} post={post}/>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>

        </div>
    );
};

export default PostList;