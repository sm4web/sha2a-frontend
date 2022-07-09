import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SideWrapper from "./components/SideWrapper/SideWrapper";
import Login from "./pages/login/login.jsx";
import ProtectedRoute from "./components/protectedRoute/reverseProtectedRoute";
import Register from "./pages/register/register";
import CompleteRegister from "./pages/completeRegister/completeRegister";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*  All the register steps  */}
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/register"} element={<Register/>}/>
                    <Route exact path={"/personal-info"} element={<CompleteRegister/>}/>
                    <Route element={<ProtectedRoute/>}>

                        <Route path={"/home"} element={<SideWrapper/>}>
                            <Route exact path={"user"} element={<h1>user</h1>}/>
                        </Route>
                        <Route exact path={"/"}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
