import React from 'react';
import {Outlet} from 'react-router-dom'

const SideWrapper = () => {
    return (
        <div style={{display: "flex"}}>
            SIde Nav
            <Outlet/>
        </div>
    );
};

export default SideWrapper;