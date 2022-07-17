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
import CreateAdvertisement from "./pages/createAdvertisement/createAdvertisement";
import AdvertisementPage from "./pages/advertisementPage/advertisementPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route element={<ProtectedRoute/>}>
                        <Route path={"/"} element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path={"create-ad"} element={<CreateAdvertisement/>}/>
                            <Route path={"advertisements/:id"} element={<AdvertisementPage/>}/>
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


const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <SideNav/>
                <Outlet/>
            </div>
        </div>
    );
}


export default App;
