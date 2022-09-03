import React from 'react';
import Box from "@mui/material/Box";
import {
    ContainerStyle,
    Divider,
    FilterBarFieldStyle,
    FilterContainer,
    FilteringSelectorsContainer,
    FilterSubmitButton
} from "./style";
import InputHandler from "../input-handler";
import {Form, Formik} from "formik";
import {Button, InputAdornment, MenuItem} from "@mui/material";
import {images} from "../../constants";
import PriceSlider from "../price-slider/priceSlider";


const SearchBar = () => {
    return (
        <Box sx={FilterContainer}>
            <InputHandler
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={images.searchIcon} width={26} height={26}
                                 alt="Search Icon"/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={images.clearIcon} width={32} height={32}
                                 alt="Clear Icon"/>
                        </InputAdornment>
                    ),
                }}
                sx={FilterBarFieldStyle}
                name={"term"}
                placeholder={"Search A Property"}
            />

            <Box sx={Divider}>
            </Box>
            <InputHandler
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={images.locationIcon} width={32} height={32}
                                 alt="Search Icon"/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={images.clearIcon} width={32} height={32}
                                 alt="Clear Icon"/>
                        </InputAdornment>
                    ),
                }}
                sx={FilterBarFieldStyle}
                name={"location"}
                placeholder={"Find Your Place"}
            />
            <Box sx={Divider}>
            </Box>
            <Button sx={{...FilterSubmitButton, width: "250px"}} type={"submit"} variant={"contained"}>
                SEARCH
            </Button>
        </Box>
    )
}


const FilterSelectors = () => {
    return (
        <Box sx={FilteringSelectorsContainer}>
            <InputHandler fullWidth name="type" label={"Type"} select>
                {[1, 2, 3].map(i => (
                    <MenuItem key={i} value={i}>
                        {i}
                    </MenuItem>
                ))}
            </InputHandler>
            <InputHandler fullWidth name="rooms" label={"Rooms"} select>
                {[1, 2, 3].map(i => (
                    <MenuItem key={i} value={i}>
                        {i}
                    </MenuItem>
                ))}
            </InputHandler>
            <PriceSlider/>
        </Box>
    )
}


const FilterSection = () => {
    return (
        <Box sx={ContainerStyle}>
            <Formik initialValues={{term: "", location: "", type: "", rooms: ""}} onSubmit={(values) => {
                console.log(values)
            }}>
                {() => (
                    <Form style={{width: '100%'}}>
                        <SearchBar/>
                        <FilterSelectors/>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default FilterSection;