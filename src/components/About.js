import React from "react";
import { Box, Typography } from "@mui/material";
import AboutImage from "../images/2_About.jpg";
import "../App.css";

const About = () => {
  return (
    <Box
      className="about-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 13,
      }}
    >
      <Box
        className="about-box"
        sx={{
          width: "50%",
          height: "100%",
          mr: 1,
          backgroundImage: `url(${AboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        className="about-box"
        sx={{
          width: "50%",
          height: "100%",
          ml: 1,
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cinzel",
            fontSize: 40,

            mb: 3,
            color: "#000",
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            fontSize: 16,

            color: "#000",
          }}
        >
          Joanna Kowalik is a trained architect with passion for coding,
          visualization and all things artistic.
        </Typography>

        <Typography
          sx={{
            fontSize: 20,
            mt: 3,
            mb: 1,
            color: "#000",
          }}
        >
          Education
        </Typography>

        <ul>
          <li>
            M.Sc. Architecture-Typology at Technical University in Berlin,
            Germany (2021)
          </li>
          <li>B.Arch at University of Fine Arts in Poznań, Poland (2016)</li>
          <li>
            B.A. Interior Design at Academy of Fine Arts in Gdańsk, Poland
            (2012)
          </li>
        </ul>

        <Typography
          sx={{
            fontSize: 20,
            mt: 3,
            mb: 1,
            color: "#000",
          }}
        >
          Professional experience
        </Typography>

        <ul>
          <li>Freelance practice since 2017</li>
          <li>Aschenbrenner Architekten GmbH (2019-2021)</li>
          <li>DHBT. Architekten GmbH (2017-2018)</li>
          <li>Modal M GmbH (2016-2017)</li>
        </ul>
      </Box>
    </Box>
  );
};

export default About;
