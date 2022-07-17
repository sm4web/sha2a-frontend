import React from 'react';
import Box from "@mui/material/Box";
import {
    ChooseType,
    ChooseType__ToggleGroup,
    CreateAd,
    CreateAd__CancelButton,
    CreateAd__FormContainer,
    CreateAd__SideContainer,
    CreateAd__SubmitButton
} from "./style";
import {Button, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Form, Formik, useFormikContext} from "formik";
import InputHandler from "../../components/input-handler";
import GoogleMaps from "../../components/google-map/googleMaps";
import UploadImages from "../../components/upload-images/uploadImages";

const CreateAdvertisement = () => {
    return (
        <Box sx={CreateAd}>
            <Formik onSubmit={(values) => {
                console.log(values)
            }} initialValues={{
                title: "",
                type: "",
                area: 0,
                description: "",
                price: 0,
                number_of_rooms: 0,
                location: "",
                images: []
            }}>
                {({values}) => (
                    <Form>
                        <AdType name={"type"}/>
                        <Box sx={CreateAd__FormContainer}>
                            {/* LEFT SIDE*/}
                            <Box sx={CreateAd__SideContainer}>
                                <InputHandler label={"Title"} placeholder={"Enter Title"} name={"title"}/>
                                <InputHandler label={"Description"}
                                              multiline
                                              maxRows={4}
                                              placeholder={"Enter Description"}
                                              name={"description"}
                                />

                                <InputHandler label={"House Area"} type={"number"}
                                              placeholder={"Enter Area ( sqft )"}
                                              name={"area"}/>

                                <InputHandler label={"Price"} type={"number"} placeholder={"Enter Price ( EGP )"}
                                              name={"price"}/>

                                <InputHandler label={"Number Of Rooms"} type={"number"}
                                              placeholder={"Enter Number Of Rooms"}
                                              name={"number_of_rooms"}/>
                            </Box>

                            {/* RIGHT SIDE*/}
                            <Box sx={CreateAd__SideContainer}>
                                <GoogleMaps form_name={"location"}/>
                                <UploadImages name={"images"}/>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {md: "50%", xs: "100%"},
                            margin: "auto",
                            p: 2,
                            mt: 4,
                            display: "flex",
                            gap: "5%"
                        }}>
                            <Button sx={CreateAd__SubmitButton} type={"submit"}>Save</Button>
                            <Button sx={CreateAd__CancelButton}>Cancel</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


const AdType = ({name}) => {

    const [alignment, setAlignment] = React.useState('');

    const formikProps = useFormikContext();

    const handleChange = (event, newValue) => {
        setAlignment(newValue);
        formikProps.setFieldValue(name, newValue);
    };

    const Options = [
        {label: "Rent My House", value: "rent"},
        {label: "Sell Your House", value: "sell"},
        {label: "Offer Student Housing", value: "student"},
    ]

    return (
        <Box sx={ChooseType}>
            <h3>
                Choose Ad Type
            </h3>
            <ToggleButtonGroup sx={ChooseType__ToggleGroup} value={alignment}
                               exclusive
                               onChange={handleChange}
            >
                {Options?.map(opt => (
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