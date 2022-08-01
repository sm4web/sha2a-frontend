import React from 'react';
import SideImage from '../../assets/images/signin-side.svg'
import {Form, Formik} from 'formik'
import InputHandler from "../../components/input-handler";
import {Box, Button, Divider, Typography} from "@mui/material";
import {
    Login__DontHaveAccount,
    LoginContainerStyle,
    LoginForgotPassword,
    LoginFormContent,
    LoginFormStyle,
    LoginFormTitle,
    LoginStyle,
    LoginSubmitButton,
    SideImage as SideImageStyle
} from "./style";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../features/user/userSlice";
import accountSchema from "../../validations/accountSchema";
import LogoBanner from "../../components/logo-banner/logoBanner";
import Loader from "../../components/loader/Loader";
import RenderSnackbar from "../../components/renderSnackbar/renderSnackbar";


const Login = () => {

    const error = useSelector(state => state.user.data?.errorMessage)
    const isLoading = useSelector(state => state.user.isLoading)
    const router = useNavigate()
    const dispatch = useDispatch()

    const onSignIn = async (values) => {
        const newValues = {...values, router}
        await dispatch(userLogin(newValues))
    }

    if (isLoading) return <Loader/>
    return (
        <Box sx={LoginStyle}>
            <LogoBanner/>
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
                                <InputHandler placeholder={"Write your email."} name={"email"} label={"Email"}/>
                                <InputHandler placeholder={"Write your Password."} name={"password"}
                                              label={"Password"} type={"password"}/>
                                <Typography variant={"h3"} sx={LoginForgotPassword}>Forgot Password ?</Typography>
                                <Button variant={"contained"} type={"submit"} sx={LoginSubmitButton}>Sign in</Button>
                                <Typography variant={"h3"} sx={Login__DontHaveAccount}>Don't have an account? <Link
                                    to={"/register"}>create account</Link></Typography>
                                <Divider>OR</Divider>
                                {/*<GoogleAuth/>*/}
                                <RenderSnackbar open={Boolean(error)} content={error}/>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;