import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {PostType} from "../App";

type PropsType = {
    createPost: (post: PostType) => void
}

const PostForm = (props: PropsType) => {
    const {createPost} = props;
    const [newPost, setNewPost] = useState({title: '', body: '', userId: 0})
    // const bodyInputRef = useRef()
    const addNewPost = (e) => {
        e.preventDefault()
        setNewPost({title: '', body: '', userId: 0})
        const post = {...newPost, id: Math.random()}
        createPost(post)
    }
    return (
        <form>
            <MyInput value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} type='text'
                     placeholder='Название поста'/>
            <MyInput value={newPost.body} type={'text'} placeholder={'Содержание поста'}
                     onChange={e => setNewPost({...newPost, body: e.target.value})}/>
            {/*<input type={'text'} ref={bodyInputRef}/>*/}
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>

        </form>
    );
};

export default PostForm;