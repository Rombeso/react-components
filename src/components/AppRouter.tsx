import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Page404 from "../pages/Page404";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about'
                   element={<About/>} />
            <Route path='/posts'
                   element={<Posts/>} />
            <Route path='/'
                   element={<Posts/>} />
            <Route path='/*'
                   element={<Page404/>} />
        </Routes>
    );
};

export default AppRouter;