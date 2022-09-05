import {Box, Typography} from "@mui/material";
import React, {useRef} from "react";
import UploadPic from "../../assets/icons/upload-profile-picture.png";
import {useFormikContext} from "formik";
import {ContainerStyle, LabelStyle, ProfilePicStyle} from "./style";

const UploadPicture = ({name}) => {
    const formikProps = useFormikContext();
    const ref = useRef();

    const handleChange = () => {
        ref.current.click();
    };

    const handleImageLocally = (e) => {
        formikProps.setFieldValue(name, e.target.files[0]);
    };

    const handleRemoveImageLocally = () => {
        formikProps.setFieldValue(name, null);
    };


    return (
        <Box
            sx={ContainerStyle}
            onClick={
                formikProps.values[name] ? handleRemoveImageLocally : handleChange
            }
        >
            <input
                type="file"
                accept=".jpg,.png,.jpeg"
                ref={ref}
                style={{display: "none"}}
                onChange={handleImageLocally}
            />
            <img
                src={
                    formikProps.values[name]
                        ? URL.createObjectURL(formikProps.values[name])
                        : UploadPic
                }
                style={ProfilePicStyle}
                alt="User profile"
            />
            <Typography variant="body1" color="initial" sx={LabelStyle}>
                {formikProps.values[name]
                    ? "Remove profile picture"
                    : "Upload profile picture"}
            </Typography>
        </Box>
    );
};

export default UploadPicture;
