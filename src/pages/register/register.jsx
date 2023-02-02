import React, {useState} from 'react';
import SideImage from '../../assets/images/signup-side-svg.svg'
import {Form, Formik} from 'formik'
import InputHandler from "../../components/input-handler";
import {Box, Button, Typography} from "@mui/material";
import {
    LoginContainerStyle,
    LoginFormContent,
    LoginFormStyle,
    LoginFormTitle,
    LoginStyle,
    LoginSubmitButton,
    Register__AlreadyHaveAccount,
    SideImage as SideImageStyle
} from "./style";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userRegister} from "../../features/user/userSlice";
import accountSchema from "../../validations/accountSchema";
import LogoBanner from "../../components/logo-banner/logoBanner";
import Loader from "../../components/loader/Loader";
import RenderSnackbar from "../../components/renderSnackbar/renderSnackbar";


const Register = () => {
    const [error, setError] = useState(null)
    const isLoading = useSelector(state => state.user.isLoading)
    const router = useNavigate()
    const dispatch = useDispatch()

    const onSignUp = (values) => {
        dispatch(userRegister({...values, router, setError}))
    }

    if (isLoading) return <Loader/>
    return (
        <Box sx={LoginStyle}>
            <LogoBanner theme={"dark"}/>
            <Box sx={LoginContainerStyle}>
                <Box sx={SideImageStyle}>
                    <img src={SideImage} alt="Sign in to Sha2a - Real E-state Platform"/>
                </Box>
                <Box sx={LoginFormStyle}>
                    <Formik validationSchema={accountSchema}
                            initialValues={{username: "", email: "", password: "", phone: ""}}
                            onSubmit={(values) => {
                                onSignUp(values)
                            }}>
                        {() => (
                            <Form style={LoginFormContent}>
                                <Typography variant={"h1"} sx={LoginFormTitle}>Create New Account</Typography>
                                <InputHandler placeholder={"Write your email."} name={"email"} label={"Email"}/>
                                <InputHandler placeholder={"Write your User Name."} name={"username"}
                                              label={"User Name"}
                                />
                                <InputHandler placeholder={"Write your phone number."} name={"phone"}
                                              label={"Phone Number"} type={"tel"}
                                />
                                <InputHandler placeholder={"Write your Password."} name={"password"}
                                              label={"Password"} type={"password"}/>
                                <Button type={"submit"} sx={LoginSubmitButton}>Sign up</Button>
                                <Typography variant={"h3"} sx={Register__AlreadyHaveAccount}>Already have an
                                    account? <Link
                                        to={"/login"}>Sign in</Link></Typography>
                                {/*<GoogleAuth/>*/}
                                <RenderSnackbar open={Boolean(error)} setOpen={setError} content={error}/>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;