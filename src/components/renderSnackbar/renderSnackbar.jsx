import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const RenderSnackbar = ({open, setOpen, content, status}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(null)

    };


    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={status === 'success' ? "success" : "error"} sx={{width: '100%'}}>
                {content}
            </Alert>
        </Snackbar>
    );
};

export default RenderSnackbar;