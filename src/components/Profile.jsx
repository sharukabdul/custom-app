import { Avatar, Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MobileNav from './MobileNav';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebar from './Sidebar';
import Add from './Add';

const Profile = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const StyledBox = styled(Box)(({ theme }) => ({
        marginLeft: "16px",
        marginTop: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        [theme.breakpoints.up("sm")]: {
            marginLeft: "30%"
        }
    }));

    return (
        <Box>
            <MobileNav open={open} handleClose={handleClose} handleOpen={handleOpen} />
            <Navbar />
            <Sidebar />
            <Add />
            <Box sx={{minHeight: "100vh", marginBottom: "60px"}}>
                <Typography sx={{textAlign: {xs: "none", sm: "center"}}} variant="h5" fontWeight={100} mt={2} ml={2}>
                    Profile
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ml: 1
                }}>
                    <Avatar
                        sx={{ width: 110, height: 110, cursor: "pointer", ml: 1, mt: 2 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                </Box>
                <Typography
                    sx={{marginLeft: 2, mt: 2}}
                    variant="h6"
                    textAlign="center"
                >
                    Sharuk Abdul
                </Typography>
                <StyledBox>
                    <BusinessCenterIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Worked at <b>Wirpo</b>
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <SchoolIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Studied at <b>Sana Engineering College</b>
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <SchoolIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Went to <b>Teja Talent School</b>
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <HomeIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Lives in <b>Hyderabad</b>
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <LocationOnIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        From <b>India</b>
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <FavoriteIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Single
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <AccessTimeFilledIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Joined July 2013
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <CheckBoxIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        Followed by 294 people
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <InstagramIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        sharuk.abdul_
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <TwitterIcon />
                    <Typography variant="subtitle1" component="span" ml={1}>
                        sharukabdul_
                    </Typography>
                </StyledBox>
            </Box>
        </Box>
    );
};

export default Profile;