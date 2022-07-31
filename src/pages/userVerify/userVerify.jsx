import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {OTPContainer, SubmitButton, UserVerifyContainer} from "./style";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {images} from "../../constants";
import LogoBanner from "../../components/logo-banner/logoBanner";
import {Form, Formik} from "formik";
import OTPSchema from "../../validations/OTPSchema";
import InputHandler from "../../components/input-handler";
import RenderSnackbar from "../../components/renderSnackbar/renderSnackbar";
import {userVerify} from "../../features/user/userSlice";
import {useNavigate} from "react-router-dom";


const UserVerify = () => {
    const user = useSelector(state => state.user.data)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const router = useNavigate()

    const onSubmit = (values) => {
        dispatch(userVerify({...values, router, setError}))
        console.log(values)
    }

    return (
        <Box sx={UserVerifyContainer}>
            <LogoBanner theme={"dark"}/>
            <Box sx={OTPContainer}>
                <Box>
                    <Typography color={"primary.dark"} variant={"h4"}>2 Step Verification</Typography>
                    <Typography variant={"body1"} color={"darkgray"}>Please check your email {user?.email} for a 6 digit
                        code
                    </Typography>
                </Box>
                <img src={images.OTPIcon} width={"120px"} alt={"OTP Sha2a"}/>
                <Typography variant={"body1"} color={"darkgray"}>
                    Enter Verification Code
                </Typography>
                <Formik validationSchema={OTPSchema} style={{width: '100%'}}
                        initialValues={{email: user?.email, otp: ''}}
                        onSubmit={onSubmit}>
                    {() => (
                        <Form style={{width: '100%'}}>
                            <InputHandler name={"otp"} sx={{mb: "24px"}} fullWidth
                                          label={"Enter Verification Code"}
                            />
                            <Button type={"submit"} sx={SubmitButton} variant={"contained"}>Continue</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
            <RenderSnackbar content={error} open={Boolean(error)}/>
        </Box>
    );
};

export default UserVerify;