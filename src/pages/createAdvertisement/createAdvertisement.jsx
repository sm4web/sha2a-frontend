import React from 'react';
import Box from "@mui/material/Box";
import {CreateAd, CreateAd__ToggleGroup} from "./style";
import Typography from "@mui/material/Typography";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

const CreateAdvertisement = () => {
    return (
        <Box sx={CreateAd}>
            <AdType/>
            <Box>

            </Box>
        </Box>
    );
};


const AdType = () => {
    const [alignment, setAlignment] = React.useState('rent');

    const handleChange = (event, newValue) => {
        setAlignment(newValue);
    };

    const Options = [
        {label: "Rent My House", value: "rent"},
        {label: "Sell Your House", value: "sell"},
        {label: "Offer Student Housing", value: "student"},
    ]

    return (
        <Box>
            <Typography>
                Choose Ad Type
            </Typography>
            <ToggleButtonGroup sx={CreateAd__ToggleGroup} value={alignment}
                               exclusive
                               onChange={handleChange}
            >
                {Options.map(opt => (
                    <ToggleButton
                        key={opt.value}
                        value={opt.value}>
                        {opt.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}
export default CreateAdvertisement;