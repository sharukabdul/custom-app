import React from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./Add";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

function Home() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <Box backgroundColor="background.default" color="text.primary">
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
                <Feed />
                <Rightbar />
            </Stack>
            <Add />
        </Box>
    </ThemeProvider>
  );
}

export default Home;
