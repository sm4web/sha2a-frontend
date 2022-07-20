import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import AdResults from "../../components/ads-results/adResults";
import Typography from "@mui/material/Typography";
import ReactGA from "react-ga";

ReactGA.initialize("UA-211175824-2", {debug: false})

const MyAds = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        console.log(window.location.pathname + window.location.search)
    }, [])

    return (
        <Box>
            <Typography sx={{
                fontSize: "32px",
                fontFamily: "GiloryMedium",
                color: "primary.main",
                p: 2,
                flex: 1,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                mb: 2
            }}>MyAds</Typography>
            <AdResults/>
        </Box>
    );
};

export default MyAds;