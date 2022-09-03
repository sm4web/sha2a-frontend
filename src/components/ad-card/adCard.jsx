import React from 'react';
import Box from "@mui/material/Box";
import {Card, Card__Feature, Card__Features, Card__Image, Card__Options, Card__Pricing, Card__Title} from "./style";
import {images} from "../../constants";

import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useGeoCode from "../../utils/Geocode/useGeoCode";

const AdCard = ({id, ...cardDetails}) => {
    const {title, number_of_rooms, price, location_long: lng, location_lat: lat, space} = cardDetails
    const router = useNavigate()
    const address = useGeoCode(lat, lng)

    return (
        <Box sx={Card} onClick={() => router(`/advertisements/${id}`)}>
            <img style={Card__Image} src={images.adImageDemo} alt="Advertisement at Sha2a Real Estate"/>
            <Box sx={Card__Pricing}>
                <h3>{price.toLocaleString()} EGP</h3>
                <Box sx={Card__Options}>
                    <FavoriteBorderIcon
                        sx={{color: "primary.main", fontSize: "32px"}}

                    />
                    <ShareIcon
                        sx={{color: "primary.main", fontSize: "32px"}}
                    />
                </Box>
            </Box>

            <Box sx={Card__Title}>
                <h2>{title}</h2>
                <h3>{address}</h3>
            </Box>

            <Box sx={Card__Features}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} xs={6}>
                        <Box sx={Card__Feature}>
                            <KingBedIcon/>
                            <h3>{number_of_rooms} Bedrooms</h3>
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={6} xs={6}>
                        <Box sx={Card__Feature}>
                            <BathtubIcon/>
                            <h3>2 Bedrooms</h3>
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={6} xs={6}>
                        <Box sx={Card__Feature}>
                            <StraightenIcon/>
                            <h3>{space} m</h3>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </Box>
    );
};

export default AdCard;