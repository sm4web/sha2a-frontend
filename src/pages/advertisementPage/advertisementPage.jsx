import React from 'react';
import Box from "@mui/material/Box";
import {AdPage, AdPage__AdTitle, AdPage__BreadCrmp, AdPage__ImageBar} from "./style";
import Typography from "@mui/material/Typography";

const AdvertisementPage = () => {
    return (
        <Box sx={AdPage}>
            <Box sx={AdPage__ImageBar}>
                <Typography sx={AdPage__BreadCrmp} variant={"h5"}>
                    Home / Ad Title
                </Typography>
                <Typography sx={AdPage__AdTitle} variant={"h2"}>
                    Ad Title
                </Typography>
            </Box>
        </Box>
    );
};

export default AdvertisementPage;