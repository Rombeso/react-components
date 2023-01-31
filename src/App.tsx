import './styles/style.css';
import {useEffect, useMemo, useRef, useState} from "react";
import PostList from "./components/PostList";
import MyInput from "./UI/input/MyInput";
import PostForm from "./components/PostForm";
import Select from "./UI/select/select";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

export type PostType = {
    id: number | Date;
    title: string;
    body: string;
    userId?: number;
}

export type OptionSelectType = {
    title: string;
    value: string;
}

export type FilterType = {
    sort: string;
    query: string;
}

function App() {
    const [posts, setPosts] = useState<PostType[] | null>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [modal, setModal] = useState<boolean>(false)
    const [totalCount, setTotalCount] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        setTotalCount(response.headers['x-total-count'])
        console.log('qwerty',response.headers['x-total-count'])
    })

    const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post: PostType) => {
        setPosts(posts.filter(f => f.id !== post.id))
    }
    console.log('modal', modal)
    return (
        <div className={'App'}>
            <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm createPost={createPost}/></MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>{`Произошла ошибка: ${postError}`}</h1>
            }
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList removePost={removePost} posts={sortedAndSearchPost} title={'Список постов 1'}/>
            }
        </div>
    );
}

export default App;
