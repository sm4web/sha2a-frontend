import React, {useState} from 'react';
import SideImage from '../../assets/images/signup-side-svg.svg'
import {Form, Formik} from 'formik'
import InputHandler from "../../components/InputHandler";
import {Alert, Box, Button, Typography} from "@mui/material";
import {
    LoginContainerStyle,
    LoginFormContent,
    LoginFormMessage,
    LoginFormStyle,
    LoginFormTitle,
    LoginStyle,
    LoginSubmitButton,
    Register__AlreadyHaveAccount,
    SideImage as SideImageStyle
} from "./style";
import GoogleAuth from "../../features/googleAuth/googleAuth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../../features/user/userSlice";
import accountSchema from "../../validations/accountSchema";


const Register = () => {
    const [error, setError] = useState(null)
    const router = useNavigate()
    const dispatch = useDispatch()

    const onSignUp = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password).then(userData => {
            console.log(userData)
            dispatch(signIn(userData?.user))
            if (userData?.user) {
                router('/home')
            }
        }).catch(err => {
            const newMessage = err?.message
            setError(newMessage)

        })
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
                                onSignUp(values)
                            }}>
                        {() => (
                            <Form style={LoginFormContent}>
                                <Typography variant={"h1"} sx={LoginFormTitle}>Create New Account</Typography>
                                <Typography variant={"h3"} sx={LoginFormMessage}>Fill the Fields to
                                    create an account</Typography>
                                <InputHandler placeholder={"Write your email."} name={"email"} label={"Email"}/>
                                <InputHandler placeholder={"Write your Password."} name={"password"}
                                              label={"Password"} type={"password"}/>
                                <Button type={"submit"} sx={LoginSubmitButton}>Sign up</Button>
                                <Typography variant={"h3"} sx={Register__AlreadyHaveAccount}>Already have an
                                    account? <Link
                                        to={"/login"}>Sign in</Link></Typography>
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

export default Register;