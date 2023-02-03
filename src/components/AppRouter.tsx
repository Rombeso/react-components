import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privatRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            (
                <Routes>
                    {

                        privatRoutes.map(route => {
                            return (
                                <Route key={route.path} path={route.path} element={<route.element/>}/>
                            )
                        })
                    }
                </Routes>
            )
            :
            (
                <Routes>
                    {
                        publicRoutes.map(route => {
                            return (
                                <Route key={route.path} path={route.path} element={<route.element/>}/>
                            )
                        })
                    }
                </Routes>
            )


    );
};

export default AppRouter;