import { Typography, Box, useMediaQuery } from "@mui/material";
import React from "react";

const Imprint = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Box
        className="about-container"
        sx={{
          display: "flex",
          flexDirection: "column",

          marginLeft: isSmallScreen ? 5 : 10,
          marginRight: isSmallScreen ? 5 : 10,
          marginTop: 13,
        }}
      >
        <Typography sx={{ fontFamily: "Cinzel", fontSize: 40 }}>
          Imprint
        </Typography>
        <Box sx={{ mt: 7 }}>
          <Typography>Joanna Kowalik</Typography>
          <Typography>Benjamin-Vogelsdorff-Str. 4</Typography>
          <Typography>13187 Berlin</Typography>
          <Typography>+49 151 1158 3043</Typography>
          <Typography>info@joannakowalik.com</Typography>
          <Typography>www.joannakowalik.com</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Imprint;
