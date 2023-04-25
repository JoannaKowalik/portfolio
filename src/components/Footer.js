import {
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React from "react";
import Privacy from "./Privacy";

const Footer = () => {
  return (
    <Box fullwidth sx={{ height: "50px" }}>
      <BottomNavigation>
        <BottomNavigationAction>
          <Typography>
            PRIVACY <Privacy />
          </Typography>
        </BottomNavigationAction>
      </BottomNavigation>
    </Box>
  );
};
export default Footer;
