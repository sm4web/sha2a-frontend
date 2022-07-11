import React from 'react';
import Box from "@mui/material/Box";
import FilterSection from "../../components/FIlterSection/FilterSection";

const Home = () => {
    return (
        <Box sx={{p: 2, display: "flex", flexDirection: "column",flexGrow:1}}>
            <FilterSection/>
        </Box>
    );
};

export default Home;