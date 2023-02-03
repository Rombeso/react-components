import About from "../pages/About";
import Page404 from "../pages/Page404";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privatRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: PostIdPages},
    {path: '/', element: Posts},
    {path: '/*', element: Page404},
]

export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: About},
    {path: '/*', element: Login},

]