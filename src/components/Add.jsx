import React from 'react';
import {
    Box,
    Fab,
    IconButton,
    Modal,
    styled,
    Tooltip,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import MobileNav from './MobileNav';


const Add = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <MobileNav open={open} handleClose={handleClose} handleOpen={handleOpen} />
            <Tooltip
                onClick={() => setOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: {xs: "calc(50% - 30px)", md: 30},
                    zIndex: 99
                }}
                title="Add Post"
            >
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>
        </>
    );
};

export default Add;