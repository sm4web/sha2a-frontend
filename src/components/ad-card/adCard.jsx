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

const AdCard = ({id, title, price, liked, address, bedrooms, bathrooms, area}) => {
    const router = useNavigate()
    return (
        <Box sx={Card} onClick={() => router(`${id}`)}>
            <img style={Card__Image} src={images.adImageDemo} alt="Advertisement at Sha2a Real Estate"/>
            <Box sx={Card__Pricing}>
                <h3>250,000 EGP</h3>
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
                <h2>New vintage apartment
                    on the Green Avenue</h2>
                <h3>329 Ambarukmo St, Brooklyn, NY</h3>
            </Box>

            <Box sx={Card__Features}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} xs={6}>
                        <Box sx={Card__Feature}>
                            <KingBedIcon/>
                            <h3>2 Bedrooms</h3>
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
                            <h3>2 Bedrooms</h3>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </Box>
    );
};

export default AdCard;