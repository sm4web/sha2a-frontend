import React from 'react';
import Box from "@mui/material/Box";
import FilterSection from "../../components/FIlterSection/FilterSection";
import SortingBar from "../../components/sortingBar/sortingBar";
import {HomeStyle} from "./style";

const Home = () => {
    return (
        <Box sx={HomeStyle}>
            <FilterSection/>
            <SortingBar/>
        </Box>
    );
};

export default Home;