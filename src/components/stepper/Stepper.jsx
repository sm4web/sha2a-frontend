import * as React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {ColorlibConnector, ColorlibStepIconRoot} from "./style";
import {useSearchParams} from "react-router-dom";
import {Typography} from "@mui/material";


function ColorlibStepIcon(props) {
    const {active, completed, className} = props;
    const icons = {
        1: 1,
        2: 2,
        3: 3,
    };
    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}
                              sx={{
                                  fontSize: {md: "20px", xs: "12px"}, fontFamily: "GiloryBold", width: {md: 50, xs: 32},
                                  height: {md: 50, xs: 32},
                              }}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};


const steps = ['Create an account', 'Complete your profile', 'What are you going to do'];

export default function CustomizedSteppers() {
    const [step, setStep] = useSearchParams()
    const currentStep = parseInt(step.get('step'))
    return (
        <Stack sx={{maxWidth: {md: '720px', xs: "100%"}, margin: "auto"}}>
            <Stepper alternativeLabel activeStep={currentStep} connector={<ColorlibConnector/>}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography variant={"h3"} sx={{
                                fontSize: {md: "18px", xs: "12px"},
                                fontFamily: "GilorySemiBold"
                            }}>{label}</Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}