import React from 'react';
import {Loader as LoaderComp} from '@mantine/core'
import LogoBanner from "../logo-banner/logoBanner";

const Loader = () => {

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
        }}>
            <LogoBanner theme={"dark"}/>
            <LoaderComp size={120} color={"#2c4cc9"}/>
        </div>
    );
};

export default Loader;