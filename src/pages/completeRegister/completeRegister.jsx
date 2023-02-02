import React from 'react';
import {Box} from "@mui/material";
import CustomizedSteppers from "../../components/stepper/Stepper";
import {PersonalInfoStyle} from "./style";
import {useSearchParams} from "react-router-dom";
import PersonalInfoForm from "../../components/personal-info-form/personalInfoForm";
import UserTypeForm from "../../components/user-type-form/userTypeForm";

const RenderFormByStep = () => {
    const [step, setStep] = useSearchParams()
    const currentStep = parseInt(step.get('step'))
    switch (currentStep) {
        case 2:
            return <PersonalInfoForm/>
        case 3:
            return <UserTypeForm/>
        default:
            return;
    }
}

const CompleteRegister = () => {
    return (
        <Box sx={PersonalInfoStyle}>
            <CustomizedSteppers/>
            <RenderFormByStep/>
        </Box>
    );
};

export default CompleteRegister;