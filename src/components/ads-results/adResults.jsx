import React from 'react';
import {Grid} from "@mui/material";
import AdCard from "../ad-card/adCard";
import Loader from "../loader/Loader";

const AdResults = ({properties}) => {

    if (!properties) return <Loader/>
    return (<Grid sx={{p: 2}} container spacing={4}>
        {properties?.map((cardDetails, index) => (<Grid item xs={12} md={6} lg={4} key={index}>
            <AdCard id={index} {...cardDetails}/>
        </Grid>))}
    </Grid>);
};

export default AdResults;