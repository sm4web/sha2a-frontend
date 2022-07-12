import React, {useState} from 'react';
import SideImage from '../../assets/images/signin-side.svg'
import {Form, Formik} from 'formik'
import InputHandler from "../../components/input-handler";
import {Alert, Box, Button, Divider, Typography} from "@mui/material";
import {
    Login__DontHaveAccount,
    LoginContainerStyle,
    LoginForgotPassword,
    LoginFormContent,
    LoginFormMessage,
    LoginFormStyle,
    LoginFormTitle,
    LoginStyle,
    LoginSubmitButton,
    SideImage as SideImageStyle
} from "./style";
import GoogleAuth from "../../features/googleAuth/googleAuth";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogin} from "../../features/user/userSlice";
import accountSchema from "../../validations/accountSchema";


const Login = () => {

    const [error, setError] = useState(null)
    const router = useNavigate()
    const dispatch = useDispatch()

    const onSignIn = (values) => {
        dispatch(userLogin(values))
        // router('/')
    }


    return (
        <Box sx={LoginStyle}>
            <Box sx={LoginContainerStyle}>
                <Box sx={SideImageStyle}>
                    <img src={SideImage} alt="Sign in to Sha2a - Real E-state Platform"/>
                </Box>
                <Box sx={LoginFormStyle}>
                    <Formik validationSchema={accountSchema} initialValues={{email: "", password: ""}}
                            onSubmit={(values) => {
                                onSignIn(values)
                            }}>
                        {() => (
                            <Form style={LoginFormContent}>
                                <Typography variant={"h1"} sx={LoginFormTitle}>Hello! Welcome back.</Typography>
                                <Typography variant={"h3"} sx={LoginFormMessage}>Please Enter your email and
                                    password</Typography>
                                <InputHandler placeholder={"Write your email."} name={"email"} label={"Email"}/>
                                <InputHandler placeholder={"Write your Password."} name={"password"}
                                              label={"Password"} type={"password"}/>
                                <Typography variant={"h3"} sx={LoginForgotPassword}>Forgot Password ?</Typography>
                                <Button variant={"contained"} type={"submit"} sx={LoginSubmitButton}>Sign in</Button>
                                <Typography variant={"h3"} sx={Login__DontHaveAccount}>Don't have an account? <Link
                                    to={"/register"}>create account</Link></Typography>
                                <Divider>OR</Divider>
                                <GoogleAuth/>
                                {error && <Alert severity="error">{error}</Alert>}
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;