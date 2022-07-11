import React from 'react';
import Box from "@mui/material/Box";
import FilterSection from "../../components/filter-section/FilterSection";
import SortingBar from "../../components/sorting-bar/sortingBar";
import {HomeStyle} from "./style";
import AdResults from "../../components/ads-results/adResults";

const Home = () => {
    return (
        <Box sx={HomeStyle}>
            <FilterSection/>
            <SortingBar/>
            <AdResults/>
        </Box>
    );
};

export default Home;