import React from 'react';
import Box from "@mui/material/Box";
import {
    AdPage,
    AdPage__AdAddress,
    AdPage__AdDetails,
    AdPage__AdDetailsContainer,
    AdPage__AdHeader,
    AdPage__AdHeaderAddress,
    AdPage__AdHeaderFeature,
    AdPage__AdHeaderFeatures,
    AdPage__AdHeaderName,
    AdPage__AdHeaderPrice,
    AdPage__AdInfoContainer,
    AdPage__AdInfoHeader,
    AdPage__AdInfoImage,
    AdPage__AdPropertyDescContent,
    AdPage__AdPropertyDescTitle,
    AdPage__AdTitle,
    AdPage__BreadCrmp,
    AdPage__ImageBar,
    AdPage__SellerInfo,
    AdPage__SellerName,
    AdPage__SellerType,
    AdPage_AdPropertyDescContainer
} from "./style";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mantine/core";
import {images} from '../../constants'
import InputHandler from "../../components/input-handler";
import {Form, Formik} from "formik";
import {Grid, InputAdornment} from "@mui/material";
import 'react-slideshow-image/dist/styles.css';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';

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
            <Box sx={{
                width: "100%",
                padding: {xl: "24px 120px", lg: "24px 48px", xs: "24px"},
                mt: {md: "64px", xs: "0"}
            }}>
                <PropertyImagesSeller/>
                <PropertyInfoAddress/>
            </Box>
        </Box>
    );
};


const PropertyInfoAddress = () => {

    const FeaturesSection = () => {
        return (
            <Box sx={AdPage__AdHeaderFeatures}>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6}>
                        <Box sx={AdPage__AdHeaderFeature}>
                            <KingBedIcon/>
                            <h3>2 Bedrooms</h3>
                        </Box>
                    </Grid>

                    <Grid item lg={2} md={4} xs={6}>
                        <Box sx={AdPage__AdHeaderFeature}>
                            <BathtubIcon/>
                            <h3>2 Bedrooms</h3>
                        </Box>
                    </Grid>

                    <Grid item lg={2} md={4} xs={6}>
                        <Box sx={AdPage__AdHeaderFeature}>
                            <StraightenIcon/>
                            <h3>2 Bedrooms</h3>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        )
    }

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
                <FeaturesSection/>
                <Box sx={AdPage_AdPropertyDescContainer}>
                    <Typography sx={AdPage__AdPropertyDescTitle} variant={"h5"}>
                        Property Description
                    </Typography>
                    <Typography sx={AdPage__AdPropertyDescContent} variant={"h5"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget dolor nam risus sem hac consequat.
                        Nec vitae consectetur velit eu, etiam. Nulla senectus dictumst mauris nunc. Senectus nulla
                        lectus nam quis nisl non morbi non.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget dolor nam risus sem hac consequat.
                        Nec vitae consectetur velit eu, etiam. Nulla senectus dictumst mauris nunc. Senectus nulla
                        lectus
                    </Typography>
                </Box>
            </Box>
            <Box sx={AdPage__AdAddress}>

            </Box>
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