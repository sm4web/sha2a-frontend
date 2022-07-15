import React, {useRef} from 'react';
import Box from "@mui/material/Box";
import {UploadImages__Header, UploadImages__ImagesContainer, UploadImagesStyle} from "./style";
import {images} from "../../constants";
import {useFormikContext} from "formik";

const UploadImages = ({name}) => {
    const formikProps = useFormikContext()
    const ref = useRef()

    const handleImageSelect = () => {
        ref.current.click()
    }

    const handleImageChange = (e) => {
        console.log(e.target.files[0])
        formikProps.setFieldValue(name, [...formikProps.values.images, e.target.files[0]])
    }

    return (<Box sx={UploadImagesStyle}>
            <Box sx={UploadImages__Header}>
                <h3>Upload Images</h3>
                <img onClick={handleImageSelect} src={images.UploadImagesIcon} width={48} height={48} alt="d"/>
                <input onChange={handleImageChange} ref={ref} style={{display: "none"}} type={"file"}
                       accept={"image/*"}/>
            </Box>
            <Box sx={UploadImages__ImagesContainer}>
                {formikProps.values.images?.map((img, index) => (
                    <img key={index} src={URL.createObjectURL(img)} width={320} alt=""/>))}
            </Box>
        </Box>);
};

export default UploadImages;