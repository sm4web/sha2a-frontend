import React, {useState} from 'react';
import {Alert, Snackbar} from "@mui/material";

const RenderSnackbar = ({open, content, status}) => {
    const [isOpen, setOpen] = useState(open)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    };

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}

        >
            <Alert onClose={handleClose} severity={status === 'success' ? "success" : "error"} sx={{width: '100%'}}>
                {content}
            </Alert>
        </Snackbar>
    );
};

export default RenderSnackbar;