import React from 'react';
import {Outlet} from 'react-router-dom'
import SideNav from "../sideNav/sideNav";

const SideWrapper = () => {
    return (
        <div style={{display: "flex"}}>
            <SideNav/>
            <Outlet/>
        </div>
    );
};

export default SideWrapper;