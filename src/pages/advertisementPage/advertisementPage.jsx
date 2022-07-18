import React from 'react';
import Box from "@mui/material/Box";
import {
    AdPage,
    AdPage__AdInfoContainer,
    AdPage__AdInfoHeader,
    AdPage__AdInfoImage,
    AdPage__AdTitle,
    AdPage__BreadCrmp,
    AdPage__ImageBar,
    AdPage__SellerInfo
} from "./style";
import Typography from "@mui/material/Typography";
import {images} from "../../constants";
import {Avatar} from "@mantine/core";

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
            <Box sx={{width: "100%", padding: {md: "32px 120px", xs: "24px"}}}>
                <Box sx={AdPage__AdInfoContainer}>
                    <Box sx={AdPage__AdInfoHeader}>
                        <Box sx={AdPage__AdInfoImage}>
                            <img width={"100%"} height={"100%"} src={images.adImageDemo}
                                 alt=""
                            />
                        </Box>
                        <Box sx={AdPage__SellerInfo}>
                            <Avatar size={100} src={""}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AdvertisementPage;