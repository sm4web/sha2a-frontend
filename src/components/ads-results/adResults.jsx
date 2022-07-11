import React from 'react';
import {Grid} from "@mui/material";
import AdCard from "../ad-card/adCard";

const AdResults = () => {
    return (
        <Grid container spacing={4}>
            {[1, 2, 3].map(card => (
                <Grid item xs={12} md={6} lg={4}>
                    <AdCard/>
                </Grid>
            ))}
        </Grid>
    );
};

export default AdResults;