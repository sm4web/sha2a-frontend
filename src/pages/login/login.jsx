import React, {useState} from 'react';
import SideImage from '../../assets/images/signin-side.svg'
import {Form, Formik} from 'formik'
import InputHandler from "../../components/InputHandler";
import {Alert, Box, Button, Typography} from "@mui/material";
import {
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
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../../features/user/userSlice";


const Login = () => {
    const [error, setError] = useState(null)
    const router = useNavigate()
    const dispatch = useDispatch()

    const onSignIn = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password).then(userData => {
            dispatch(signIn(userData?.user))
            if (userData?.user) {
                router('/home')
            }
        }).catch(err => {
            const newMessage = err?.message
            setError(newMessage)

        })
    }
    console.log(error)
    return (
        <Box sx={LoginStyle}>
            <Box sx={LoginContainerStyle}>
                <Box sx={SideImageStyle}>
                    <img src={SideImage} alt="Sign in to Sha2a - Real E-state Platform"/>
                </Box>
                <Box sx={LoginFormStyle}>
                    <Formik initialValues={{email: "", password: ""}} onSubmit={(values) => {
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
                                <Button type={"submit"} sx={LoginSubmitButton}>Sign in</Button>
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