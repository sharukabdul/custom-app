import React from 'react';
import {
    AppBar,
    Box,
    Fab,
    Hidden,
    IconButton,
    styled,
    Toolbar,
    Tooltip,
    Avatar,
    Button,
    ButtonGroup,
    Stack,
    TextField,
    Typography,
    Modal,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px",
}));

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const MobileNav = (props) => {
    const navigate = useNavigate();

    const navigation = (component) => {
        navigate(component);
    }
    
    return (
        <Box>
            <Hidden smUp>
                <AppBar
                    position="fixed"
                    sx={{
                        position: "fixed",
                        top: "auto",
                        bottom: "0px"
                    }}
                >
                    <StyledToolbar>
                        <Icons>
                            <Tooltip
                                title="Home"
                                onClick={() => navigation("/home")}
                            >
                                <HomeIcon fontSize='large' />
                            </Tooltip>
                            <Tooltip
                                title="Chat"
                                onClick={() => navigation('/chats')}
                            >
                                <ChatBubbleIcon fontSize='large' />
                            </Tooltip>
                        </Icons>
                        <Tooltip
                            onClick={() => props.handleOpen()}
                            sx={{
                                position: 'fixed',
                                bottom: 20,
                                left: {xs: "calc(50% - 30px)", md: 30}
                            }}
                            title="Add Post"
                        >
                            <IconButton>
                                <Fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </IconButton>
                        </Tooltip>
                        <Icons>
                            <Tooltip
                                title="My Ads"
                                onClick={() => navigation('/myads')}
                            >
                                <FavoriteIcon fontSize='large' />
                            </Tooltip>
                            <Tooltip
                                title="My Profile"
                                onClick={() => navigation('/profile')}
                            >
                                <PersonIcon fontSize='large' />
                            </Tooltip>
                        </Icons>
                    </StyledToolbar>
                </AppBar>
            </Hidden>
            <StyledModal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: {xs: 280, sm: 400},
                        height: {xs: 280, sm: 280}
                    }}
                    backgroundColor="background.default"
                    color="text.primary"
                    p={3}
                    borderRadius={5}
                >
                    <Typography
                        variant="h6"
                        color="gray"
                        textAlign="center"
                    >
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                        <Typography
                            variant="span"
                            fontWeight={500}
                        >
                            Sharuk Abdul
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            Post
                        </Button>
                        <Button sx={{width: "100px"}}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Box>
    );
};

export default MobileNav;