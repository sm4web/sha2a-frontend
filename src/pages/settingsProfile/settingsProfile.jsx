import React from 'react';
import Box from "@mui/material/Box";
import {Form, Formik} from "formik";
import UploadPicture from "../../components/upload-profile-picture/UploadPicture";
import {Container, usernameField} from "./style";
import InputHandler from "../../components/input-handler";
import {Button, ButtonGroup, Grid, InputAdornment} from "@mui/material";
import {images} from "../../constants";


function SettingsProfile(props) {
    return (
        <Box sx={Container}>
            <Formik initialValues={{
                image: "",
                name: "Saif Mohamed"
            }}>
                {({values}) => (
                    <Form style={{height: "100%"}}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "20px"
                        }}>
                            <Box sx={{minWidth: "200px"}}>
                                <UploadPicture name={"image"}/>
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
                                <InputHandler name={"country"} label={"Country"} placeholder={"Select Your Country"}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputHandler name={"state"} label={"State  "} placeholder={"Select Your State"}/>
                            </Grid>
                        </Grid>
                        <Box sx={{width: "100%", mt: 4}}>
                            <ButtonGroup sx={{width: "100%"}} gap={4}>
                                <Button sx={{p: 2, fontFamily: "GiloryBold",}} fullWidth variant={"outlined"}
                                        color={"error"}>Cancel</Button>
                                <Button
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