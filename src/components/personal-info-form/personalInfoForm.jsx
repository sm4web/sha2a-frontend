import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Form, Formik} from "formik";
import UploadPicture from "../upload-profile-picture/UploadPicture";
import {PInfoCustomDropDown, PInfoForm, PInfoFormContent, PInfoStyle, PInfoSubmitButton} from "./style";
import InputHandler from "../input-handler";
import {useSearchParams} from "react-router-dom";
import personalInfoSchema from "../../validations/personalInfoSchema";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import {useDispatch} from "react-redux";
import {userUpdate} from "../../features/user/userSlice";


const initValues = {name: "", profile_photo: ""}

const PersonalInfoForm = () => {
    const [step, setStep] = useSearchParams()
    const [country, setCountry] = useState('')
    const [region, setRegion] = useState('')
    const dispatch = useDispatch()
    const onNextStep = (values) => {
        dispatch(userUpdate(values))
        // setStep({step: 3})
    }
    return (<Box sx={PInfoStyle}>
        <Box sx={PInfoForm}>
            <Formik validationSchema={personalInfoSchema} initialValues={initValues} onSubmit={(values) => {
                onNextStep(values)
            }}>
                {({values}) => (<Form style={PInfoFormContent}>
                    <UploadPicture name={"profile_photo"}/>
                    <InputHandler name={"name"} label={"User Name"} placeholder={"Enter your User Name"}/>
                    {/*<InputHandler name={"phone_number"} label={"Phone Number"}*/}
                    {/*              placeholder={"Enter your Phone Number"}/>*/}
                    <Box>
                        <Typography variant="h1" sx={{fontSize: {lg: "20px", xs: "16px"}, fontFamily: "GiloryMedium"}}>
                            Country
                        </Typography>
                        <CountryDropdown
                            value={country}
                            style={PInfoCustomDropDown}
                            onChange={(value) => {
                                setCountry(value)
                                values.country = value
                            }}/>
                    </Box>
                    <Box>
                        <Typography variant="h1" sx={{fontSize: {lg: "20px", xs: "16px"}, fontFamily: "GiloryMedium"}}>
                            State
                        </Typography>
                        <RegionDropdown
                            country={country}
                            value={region}
                            style={PInfoCustomDropDown}
                            onChange={(value) => {
                                setRegion(value)
                                values.city = value
                            }}/>
                    </Box>
                    <Button type={"submit"} sx={PInfoSubmitButton} variant={"contained"}>
                        Next
                    </Button>
                </Form>)}
            </Formik>
        </Box>
    </Box>);
};

export default PersonalInfoForm;