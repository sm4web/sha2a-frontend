import React from 'react';
import Box from "@mui/material/Box";
import FilterSection from "../../components/filter-section/FilterSection";
import SortingBar from "../../components/sorting-bar/sortingBar";
import {HomeStyle} from "./style";
import AdResults from "../../components/ads-results/adResults";
import CreateAdIcon from "../../components/create-ad-icon/createAdIcon";

const Home = () => {
    return (
        <Box sx={HomeStyle}>
            <FilterSection/>
            <SortingBar/>
            <AdResults/>
            <CreateAdIcon/>
        </Box>
    );
};

export default Home;