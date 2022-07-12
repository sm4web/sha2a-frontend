import React from 'react';
import './App.scss';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Login from "./pages/login/login.jsx";
import ProtectedRoute from "./components/protected-routes/protectedRoute";
import Register from "./pages/register/register";
import CompleteRegister from "./pages/completeRegister/completeRegister";
import SideNav from "./components/side-nav/sideNav.tsx";
import Home from "./pages/home/Home";
import Box from "@mui/material/Box";


const Layout = () => {
    return (
        <div>
            <Header/>

            <div>
                <SideNav/>
                <Box sx={{ml: {md: "calc(80px + 16px)", xs: "0"}}}>
                    <Outlet/>
                </Box>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5117302971351802"
                    crossOrigin="anonymous"></script>

            <BrowserRouter>
                <Routes>

                    <Route element={<ProtectedRoute/>}>
                        <Route path={"/"} element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path={"user"} element={<div>user</div>}/>
                        </Route>
                    </Route>

                    {/*  START -- All the register steps  */}
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/register"} element={<Register/>}/>
                    <Route exact path={"/personal-info"} element={<CompleteRegister/>}/>
                    {/*  END -- All the register steps  */}

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
