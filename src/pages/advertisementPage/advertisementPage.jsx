import React from 'react';
import Box from "@mui/material/Box";
import {
    AdPage,
    AdPage__AdAddress,
    AdPage__AdDetails,
    AdPage__AdDetailsContainer,
    AdPage__AdHeader,
    AdPage__AdHeaderAddress,
    AdPage__AdHeaderName,
    AdPage__AdHeaderPrice,
    AdPage__AdInfoContainer,
    AdPage__AdInfoHeader,
    AdPage__AdInfoImage,
    AdPage__AdTitle,
    AdPage__BreadCrmp,
    AdPage__ImageBar,
    AdPage__SellerInfo,
    AdPage__SellerName,
    AdPage__SellerType
} from "./style";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mantine/core";
import {images} from '../../constants'
import InputHandler from "../../components/input-handler";
import {Form, Formik} from "formik";
import {InputAdornment} from "@mui/material";
import 'react-slideshow-image/dist/styles.css';


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
            <Box sx={{width: "100%", padding: {md: "24px 120px", xs: "24px"}, mt: "64px"}}>
                <PropertyImagesSeller/>
                <PropertyInfoAddress/>
            </Box>
        </Box>
    );
};

const PropertyInfoAddress = () => {
    return (
        <Box sx={AdPage__AdDetailsContainer}>
            <Box sx={AdPage__AdDetails}>
                <Box sx={AdPage__AdHeader}>
                    <Typography sx={AdPage__AdHeaderName} variant={"h4"}>
                        New vintage apartment
                        on the Green Avenue
                    </Typography>
                    <Typography sx={AdPage__AdHeaderPrice} variant={"h4"}>
                        250,000.00
                    </Typography>
                </Box>
                <Box sx={AdPage__AdHeader}>
                    <Typography sx={AdPage__AdHeaderAddress} variant={"h4"}>
                        <img src={images.addressIcon} height={18} alt=""/> 329 Ambarukmo St, Brooklyn, NY
                    </Typography>
                </Box>
            </Box>
            <Box sx={AdPage__AdAddress}></Box>
        </Box>
    )
}


const PropertyImagesSeller = () => {
    return (
        <Box sx={AdPage__AdInfoContainer}>
            <Box sx={AdPage__AdInfoHeader}>
                <Box sx={AdPage__AdInfoImage}>
                    <img width={"100%"} height={"100%"} src={images.adImageDemo}
                         alt=""
                    />
                </Box>
                <Box sx={AdPage__SellerInfo}>
                    <Avatar size={64}
                            radius={'xl'}
                            style={{marginBottom: '32px'}}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbY3v1BLGcs377egpKrACqT0K_-6o_ldiWA&usqp=CAU"}
                    />
                    <Typography variant={"h1"} sx={AdPage__SellerName}>
                        Mustafa Abdullah Khallaf
                    </Typography>
                    <Typography variant={"p"} sx={AdPage__SellerType}>
                        Seller
                    </Typography>
                    <Formik initialValues={{phone: ""}}>
                        {() => (
                            <Form
                                style={{width: "100%", display: "flex", flexDirection: "column", gap: "24px"}}>
                                <InputHandler
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={images.phoneIcon} width={20} alt=""/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    name={"phone"}
                                    type={"tel"}
                                    value={'01206944093'}
                                />
                                <InputHandler
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={images.chatIcon} width={20} alt=""/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    name={"chat"}
                                    value={'Chat With Seller'}
                                />
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}
export default AdvertisementPage;