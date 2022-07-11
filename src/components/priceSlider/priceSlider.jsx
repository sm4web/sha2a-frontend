import React, {useState} from 'react';
import {Slider, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {PriceStyle, SelectorTitle} from "./style";


const priceInput = {
    0: "50,000",
    1: "150,000",
    2: "250,000",
    3: "500,000",
    4: "750,000",
    5: "1,000,000",
    6: "1,500,000",
    7: "2,000,000+"
}
const priceInputValue = {
    0: "EGP 50,000",
    1: "EGP 150,000",
    2: "EGP 250,000",
    3: "EGP 500,000",
    4: "EGP 750,000",
    5: "EGP 1,000,000",
    6: "EGP 1,500,000",
    7: "EGP 2,000,000+"
}
const PriceSlider = (props) => {
    const [value, setValue] = useState(0)
    const getPricingData = (obj, pos) => {
        return pos !== undefined
            ? obj[value][pos]
            : obj[value];
    };
    const handlePricingSlide = e => {
        setValue(e.target.value)

    };
    return (
        <Box display={"flex"} flexDirection={"column"} gap={{lg: '16px', xs: '18px'}} width={"100%"}>
            <Typography variant={"h1"} sx={SelectorTitle}>Price</Typography>
            <Slider
                min={0}
                max={Object.keys(priceInput).length - 1}
                value={value}
                onChange={handlePricingSlide}
            />
            <Typography variant={"h1"} sx={PriceStyle}>{getPricingData(priceInputValue)}</Typography>
        </Box>
    );
};

export default PriceSlider;