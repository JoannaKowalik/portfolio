import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box textAlign="center">
      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography>© 2023 Joanna Kowalik</Typography>
        <Box display="flex" justifyContent="center">
          <Typography
            component={Link}
            to="/privacy"
            sx={{ mr: 1, color: "#000" }}
          >
            Privacy policy
          </Typography>
          <Typography
            component={Link}
            to="/imprint"
            sx={{ ml: 1, color: "#000" }}
          >
            Imprint
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
