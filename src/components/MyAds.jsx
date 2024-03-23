import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const MyAds = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <Box>
            <MobileNav
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
            <Navbar />
            <Typography variant="h6" fontWeight={100} mt={2} ml={2}>
                My Ads
            </Typography>
            <Typography variant="body1" mt={2} ml={2}>
            No ads available!
            </Typography>
        </Box>
    );
};

export default MyAds;