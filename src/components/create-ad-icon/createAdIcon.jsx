import React from 'react';
import Box from "@mui/material/Box";
import {CreateAdIconStyle} from "./style";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";


const CreateAdIcon = () => {
    const router = useNavigate()
    return (
        <Box sx={CreateAdIconStyle} onClick={() => router('/create-ad')}>
            <AddIcon sx={{color: "inherit", width: "32px", objectFit: "cover"}}/>
        </Box>
    );
};

export default CreateAdIcon;