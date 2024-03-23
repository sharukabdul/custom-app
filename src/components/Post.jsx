import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Post = (props) => {
    return (
        <Card sx={{margin: {xs: 2, sm: 5}}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: [props.color] }} aria-label="recipe">
                        {props.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                subheader="June 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={props.url}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to
                    cook together with your guests. Add 1 cup of frozen peas along with
                    the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography
                    variant="body2"
                    ml={1}
                    sx={{textDecoration: "underline", cursor: "pointer"}}
                >
                    5 comments
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Post;