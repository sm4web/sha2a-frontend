import React from 'react';
import {Box, Typography} from "@mui/material";
import {images} from "../../constants";
import {Container} from "./style";

const LogoBanner = ({theme = "light"}) => {
    return (
        <Box sx={Container}>
            <Typography variant={"h2"} sx={{
                fontSize: {md: "24px", xs: "18px"},
                fontFamil: "GiloryMedium",
                color: theme === "dark" ? "#0B0E16" : "#fff"
            }}>
                Sha2a - Real Estate</Typography>
            <Box sx={{height: "100%", width: "2px", bgcolor: theme === "dark" ? "#0B0E16" : "#fff"}}></Box>
            <img width={120} src={theme === "dark" ? images.logoDark : images.logo} alt=""/>
        </Box>
    );
};

export default LogoBanner;