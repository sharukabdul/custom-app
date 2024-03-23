import React, { useState } from "react";
import {
  Box, Skeleton, Stack,
} from "@mui/material";
import Post from "./Post";

const Feed = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    return (
        <Box
            flex={{ xs: 4, sm: 2.5, md: 3, lg: 4 }} 
            p={{ xs: 0, md: 2 }}
        >
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={100} width="95%" />
                    <Skeleton variant="text" height={20} width="95%" />
                    <Skeleton variant="text" height={20} width="95%" />
                    <Skeleton variant="rectangular" height={300} width="95%" />
                </Stack>
            ) : (
                <Box
                    sx={{marginBottom: "90px"}}
                >
                    <Post
                        title="John Doe"
                        avatar="J"
                        color="green"
                        url="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        title="Peter Ellison"
                        avatar="P"
                        color="red"
                        url="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        title="Kevin Jill"
                        avatar="K"
                        color="orange"
                        url="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        title="Jack Adam"
                        avatar="J"
                        color="red"
                        url="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        title="Johnson Ill"
                        avatar="J"
                        color="orange"
                        url="https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        title="Thomas Nill"
                        avatar="T"
                        color="skyblue"
                        url="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </Box>
            )}
        </Box>
    );
};

export default Feed;
