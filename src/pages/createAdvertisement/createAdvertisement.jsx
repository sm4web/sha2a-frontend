import React from 'react';
import Box from "@mui/material/Box";
import {ChooseType, ChooseType__ToggleGroup, CreateAd, CreateAd__FormContainer, CreateAd__SideContainer} from "./style";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Form, Formik, useFormikContext} from "formik";
import InputHandler from "../../components/input-handler";
import GoogleMaps from "../../components/google-map/googleMaps";

const CreateAdvertisement = () => {
    return (
        <Box sx={CreateAd}>
            <Formik onSubmit={(values) => {
                console.log(values)
            }} initialValues={{
                title: "",
                type: "",
                area: "",
                description: "",
                price: 0,
                number_of_rooms: 0,
                location: ""
            }}>
                {() => (
                    <Form>
                        <AdType name={"type"}/>
                        <Box sx={CreateAd__FormContainer}>

                            {/* LEFT SIDE*/}
                            <Box sx={CreateAd__SideContainer}>
                                <InputHandler label={"Title"} placeholder={"Enter Title"} name={"title"}/>
                                <InputHandler label={"Description"}
                                              multiline
                                              rows={4}
                                              placeholder={"Enter Description"}
                                              name={"description"}
                                />

                                <InputHandler label={"House Area"} type={"number"} placeholder={"Enter Area ( sqft )"}
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
                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


const AdType = ({name}) => {

    const [alignment, setAlignment] = React.useState('rent');

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