import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Form, Formik} from "formik";
import UploadPicture from "../../components/upload-profile-picture/UploadPicture";
import {Container, PInfoCustomDropDown, usernameField} from "./style";
import InputHandler from "../../components/input-handler";
import {Button, ButtonGroup, Grid, InputAdornment, Typography} from "@mui/material";
import {images} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, updateProfile} from "../../features/profileSlice/profileSlice";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";


function SettingsProfile(props) {
    const [data, setData] = useState(null)
    const [country, setCountry] = useState(data?.country)
    const [govern, setGovern] = useState(data?.city)
    const {profile_id} = useSelector(state => state.user.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile({id: profile_id, setData}))
    }, [profile_id, dispatch])

    useEffect(() => {
        setCountry(data?.country)
        setGovern(data?.city)
    }, [data])


    const onSubmit = (data) => {
        dispatch(updateProfile({id: profile_id, setData, data}))
    }

    if (!data) return "Loader..."

    return (
        <Box sx={Container}>
            <Formik initialValues={{...data, name: "Saif Mohamed"}} onSubmit={onSubmit}>
                {({values}) => (
                    <Form style={{height: "100%"}}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "20px"
                        }}>
                            <Box sx={{minWidth: "200px"}}>
                                <UploadPicture name={"profile_photo"}/>
                            </Box>
                            <Box sx={{minWidth: "240px"}}>
                                <InputHandler name={"name"} sx={usernameField} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img src={images.editIcon} width={32} height={32}
                                                 alt="Clear Icon"/>
                                        </InputAdornment>
                                    ),
                                }}/>
                            </Box>
                        </Box>
                        <Grid container sx={{mt: 4}} spacing={6}>
                            <Grid item xs={12} md={6}>
                                <InputHandler name={"email"} label={"Email"} placeholder={"Enter Your Email Address"}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputHandler name={"phone"} label={"Phone Number"}
                                              placeholder={"Enter Your Phone Number"}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display={"flex"} flexDirection={"column"} gap={"6px"}>
                                    <Typography variant="h1"
                                                sx={{fontSize: {lg: "20px", xs: "16px"}, fontFamily: "GiloryMedium"}}>
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
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display={"flex"} flexDirection={"column"} gap={"6px"}>
                                    <Typography variant="h1"
                                                sx={{fontSize: {lg: "20px", xs: "16px"}, fontFamily: "GiloryMedium"}}>
                                        State
                                    </Typography>
                                    <RegionDropdown
                                        country={country}
                                        value={govern}
                                        style={PInfoCustomDropDown}
                                        onChange={(value) => {
                                            setGovern(value)
                                            values.city = value
                                        }}/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{width: "100%", mt: 4}}>
                            <ButtonGroup sx={{width: "100%"}} gap={4}>
                                <Button sx={{p: 2, fontFamily: "GiloryBold",}} fullWidth variant={"outlined"}
                                        color={"error"}>Cancel</Button>
                                <Button
                                    type={"submit"}
                                    sx={{fontFamily: "GiloryBold", letterSpacing: "0.7px", textTransform: "capitalize"}}
                                    fullWidth variant={"contained"} color={"primary"}>Save Edit</Button>
                            </ButtonGroup>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default SettingsProfile;