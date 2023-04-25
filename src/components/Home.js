import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import HomeImage from "../images/1_Home.png";
import ButtonMore from "./ButtonMore";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 75%)",
          py: 3,
          px: 5,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography
          paddingBottom="0"
          sx={{
            fontFamily: "Cinzel",
            fontSize: "80px",
            color: "rgb(80, 80, 80)",
            lineHeight: 1,
          }}
        >
          Joanna Kowalik
        </Typography>
        <Typography
          paddingTop="0"
          sx={{ fontSize: 30, letterSpacing: 10, lineHeight: 1 }}
        >
          Architectural Visualization
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: 2,
          textDecoration: "none",
        }}
        component={RouterLink}
        to="/portfolio"
      >
        <ButtonMore />
      </Box>
    </Box>
  );
};

export default Home;
