import React from 'react';
import Box from "@mui/material/Box";
import {Card, Card__Image, Card__Options, Card__Pricing} from "./style";
import {images} from "../../constants";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const AdCard = () => {
    return (
        <Box sx={Card}>
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
        </Box>
    );
};

export default AdCard;