import React, {useEffect, useState} from 'react';
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
import GoogleMaps from "../../components/google-map/googleMaps";
import {getProperty} from "../../features/getProperties/getPropertiesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useGeoCode from "../../utils/Geocode/useGeoCode";

const AdvertisementPage = () => {
    const [data, setData] = useState({})
    const loading = useSelector(state => state.properties.isLoading)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProperty({id, setData}))
    }, [])

    const {title, ad_type, description, price, space, number_of_rooms, location_long: lng, location_lat: lat} = data

    const address = useGeoCode(lat, lng)

    if (loading) return <Loader/>
    return (
        <Box sx={AdPage}>
            <Box sx={AdPage__ImageBar}>
                <Typography sx={AdPage__BreadCrmp} variant={"h5"}>
                    Home / {title}
                </Typography>
                <Typography sx={AdPage__AdTitle} variant={"h2"}>
                    {title}
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                padding: {xl: "24px 120px", lg: "24px 48px", xs: "24px"},
                mt: {md: "64px", xs: "0"}
            }}>
                <PropertyImagesSeller/>
                {/*<PropertyInfoAddress/>*/}
                <Box sx={AdPage__AdDetailsContainer}>
                    <Box sx={AdPage__AdDetails}>
                        <Box sx={AdPage__AdHeader}>
                            <Typography sx={AdPage__AdHeaderName} variant={"h4"}>
                                {title}
                            </Typography>
                            <Typography sx={AdPage__AdHeaderPrice} variant={"h4"}>
                                {price?.toLocaleString()}
                            </Typography>
                        </Box>
                        <Box sx={AdPage__AdHeader}>
                            <Typography sx={AdPage__AdHeaderAddress} variant={"h4"}>
                                <img src={images.addressIcon} height={18} alt=""/> {address}
                            </Typography>
                        </Box>
                        <Box sx={AdPage__AdHeaderFeatures}>
                            <Grid container spacing={2}>
                                <Grid item lg={2} md={4} xs={6}>
                                    <Box sx={AdPage__AdHeaderFeature}>
                                        <KingBedIcon/>
                                        <h3>{number_of_rooms} Bedrooms</h3>
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
                                        <h3>{space} m</h3>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                        <Box sx={AdPage_AdPropertyDescContainer}>
                            <Typography sx={AdPage__AdPropertyDescTitle} variant={"h5"}>
                                Property Description
                            </Typography>
                            <Typography sx={AdPage__AdPropertyDescContent} variant={"h5"}>
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={AdPage__AdAddress}>
                        <GoogleMaps form_name={"a7a"} lat={lat} lng={lng}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


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
                                <Box sx={{
                                    background: '#fff',
                                    borderRadius: '10px',
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "18px",
                                    boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
                                    p: 2,
                                    color: "primary.dark",
                                    textDecoration: 'none'
                                }}
                                     component={'a'}
                                     href="https://wa.me/+201554304409"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                >
                                    <img src={images.chatIcon} width={22} alt=""/>
                                    <Typography variant={"body1"} sx={{fontWeight: '600'}}>
                                        Chat with seller
                                    </Typography>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}
export default AdvertisementPage;