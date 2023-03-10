import '../styles/style.css';
import {useEffect, useRef, useState} from "react";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MyButton from "../UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Pagination from "../UI/pagination/Pagination";
import Loader from "../UI/Loader/Loader";
import {getTotalPage} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import MyModal from "../UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import {useObserver} from "../hooks/useObserver";
import {log} from "util";
import Select from '../UI/select/select';


export type PostType = {
    id: number | Date;
    title: string;
    body: string;
    userId?: number;
}

export type OptionSelectType = {
    title: string;
    value: string | number;
}

export type FilterType = {
    sort: string;
    query: string;
}

function Posts() {
    const [posts, setPosts] = useState<PostType[] | null>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [modal, setModal] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [totalPosts, setTotalPosts] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        setTotalPosts(response.headers['x-total-count'])
        const countPages = getTotalPage(limit, response.headers['x-total-count'])
        setTotalPages(countPages)
    })

    const lastElement = useRef()
    const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)
    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post: PostType) => {
        setPosts(posts.filter(f => f.id !== post.id))
    }

    const changePage = (page) => {

    }
    return (
        <div className={'App'}>
            <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>?????????????? ????????</MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm createPost={createPost}/></MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Select
                value={limit}
                options={[
                    {value: 10, title: '10'},
                    {value: 5, title: '5'},
                    {value: 15, title: '15'},
                    {value: -1, title: '??????'},
                ]}
                defaultSelect='?????????????????????? ????-?????? ???? ????????????????'
                changedSelect={value => setLimit(value)}
            />
            {postError &&
                <h1>{`?????????????????? ????????????: ${postError}`}</h1>
            }
            <PostList removePost={removePost} posts={sortedAndSearchPost} title={'???????????? ???????????? 1'}/>
            <div ref={lastElement} style={{height: 10, backgroundColor: 'blueviolet'}}/>
            {isPostLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>

            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
