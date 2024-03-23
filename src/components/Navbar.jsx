import React, { useState } from 'react';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
                    onClick={() => navigate('/home')}
                >
                    Facebook lite
                </Typography>
                <FacebookIcon
                    fontSize='large'
                    sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
                    onClick={() => navigate('/home')}
                />
                <Search>
                    <InputBase
                        placeholder="Search..."
                    />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={() => setOpen(true)}
                        sx={{ width: 30, height: 30, cursor: "pointer" }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">Sharuk</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => {setOpen(false); navigate("/profile")}}>Profile</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
                <MenuItem onClick={() => {setOpen(false); navigate("/")}}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;