import React from "react";
import ButtonMore from "./ButtonMore";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import StillsImage from "../images/3_Stills.jpg";
import MotionImage from "../images/4_Motion.jpg";

const Portfolio = () => {
  return (
    <Box
      className="about-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 13,
      }}
    >
      <Box
        className="portfolio-box"
        sx={{
          width: "50%",
          height: "100%",
          mr: 1,
          textDecoration: "none",
          backgroundImage: `url(${StillsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cinzel",
            fontSize: 40,
            mt: 10,
            mb: 1,
            color: "#000",
          }}
        >
          Stills
        </Typography>
        <Box component={RouterLink} to="/stills">
          <ButtonMore />
        </Box>
      </Box>
      <Box
        className="portfolio-box"
        sx={{
          width: "50%",
          height: "100%",
          mr: 1,
          textDecoration: "none",
          backgroundImage: `url(${MotionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cinzel",
            fontSize: 40,
            mt: 10,
            mb: 1,
            color: "#000",
          }}
        >
          In Motion
        </Typography>
        <Box component={RouterLink} to="/motion">
          <ButtonMore />
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
