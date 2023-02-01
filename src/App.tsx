import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./UI/Navbar/Navbar";
import Page404 from "./pages/Page404";
import AppRouter from "./components/AppRouter";


function App() {
    return (
        // <div>
        //     <Posts/>
        // </div>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
