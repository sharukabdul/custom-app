import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Add from "./Add";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Chats = () => {
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
            <Sidebar />
            <Add />
            <Box sx={{marginBottom: "60px", marginLeft: {xs: "0", sm: "30%"}}}>
                <Typography variant="h6" fontWeight={100} mt={2} ml={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                Ali Connors
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                to Scott, Alex, Jennifer
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/7.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Trevor Henderson"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Henderson"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Chats;
