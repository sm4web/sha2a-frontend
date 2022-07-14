import React from "react";
import {ErrorMessage, useField} from "formik";
import {Box, TextField, Typography} from "@mui/material";

const ReturnLabel = ({children, label}) => {
    if (label) {
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                }}
            >
                <Typography variant="h1" sx={{fontSize: {lg: "20px", xs: "16px"}, fontFamily: "GiloryMedium"}}>
                    {label}
                </Typography>
                {children}
            </Box>
        )
    }
    return (
        <>
            {children}
        </>
    )

}

const InputHandler = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <ReturnLabel label={label}>
            <TextField
                error={!!(meta.touched && meta.error)}
                autoComplete="off"
                fullWidth
                helperText={<ErrorMessage name={field.name}/>}
                sx={NormalInputStyle}
                {...field}
                {...props}
            />
        </ReturnLabel>
    );
};

export const NormalInputStyle = {
    "& .MuiOutlinedInput-root": {
        background: "#fff",
        minHeight: {lg: "60px", md: "60px", xs: "45px"},
        width: "100%",
        fontSize: {lg: "16px", xs: "14px"},
        fontFamily: "GilorySemiBold",
        color: "rgba(1,1,1,.9)",
        padding: "0 16px",
        borderRadius: "8px",
        border: "none",
        "& fieldset": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            border: "none",
        },
    },
};
export default InputHandler;
