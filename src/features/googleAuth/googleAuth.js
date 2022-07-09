import React from 'react';
import {Box, Typography} from "@mui/material";
import GoogleSignin from "../../assets/images/google-logo.png";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {signIn} from "../user/userSlice";
import {useNavigate} from "react-router-dom";


const GoogleAuth = () => {
    const dispatch = useDispatch()
    const router = useNavigate()
    const onLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(userData => {
            dispatch(signIn(userData?.user))
            router('/personal-info?step=2')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Box sx={LoginGoogleSignin} onClick={onLogin}>
            <img src={GoogleSignin} width={"32px"} alt=""/>
            <Typography variant={"h5"} sx={{fontSize: "20px", fontFamily: "GiloryBold"}}>
                Sign in with google
            </Typography>
        </Box>
    );
};
const LoginGoogleSignin = {
    width: "100%",
    height: {md: "60px", xs: "45px"},
    borderRadius: "8px",
    bgcolor: "#ECF2F7",
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    fontFamily: "GiloryBold",
    color: "gray",
    cursor: "pointer"
}
export default GoogleAuth;