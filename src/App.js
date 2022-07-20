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
import Favorite from "./pages/favorite/favorite";
import MyAds from "./pages/myAds/myAds";
// import AdvertisementPage from "./pages/advertisementPage/advertisementPage";
const AdvertisementPage = React.lazy(() => import("./pages/advertisementPage/advertisementPage"))

function App() {
    return (
        <div className="App">
            <React.Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>

                        <Route element={<ProtectedRoute/>}>
                            <Route path={"/"} element={<Layout/>}>
                                <Route index element={<Home/>}/>
                                <Route path={"create-ad"} element={<CreateAdvertisement/>}/>
                                <Route path={"advertisements/:id"} element={<AdvertisementPage/>}/>
                                <Route path={"favorites"} element={<Favorite/>}/>
                                <Route path={"settings"} element={<h1>Settings</h1>}/>
                                <Route path={"my-ads"} element={<MyAds/>}/>
                            </Route>
                        </Route>

                        {/*  START -- All the register steps  */}
                        <Route exact path={"/login"} element={<Login/>}/>
                        <Route exact path={"/register"} element={<Register/>}/>
                        <Route exact path={"/personal-info"} element={<CompleteRegister/>}/>
                        {/*  END -- All the register steps  */}

                    </Routes>
                </BrowserRouter>
            </React.Suspense>
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
