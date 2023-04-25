import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  // FormControl,
  // Select,
  MenuItem,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  // const [language, setLanguage] = useState("en");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleLanguage = (language) => {
  //   setLanguage(language);
  //   console.log(language);
  // };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <Box>
      <AppBar elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginLeft: 5,
            marginRight: 5,
            height: 100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MenuItem component={Link} to="/" style={{ marginRight: 10 }}>
              <Typography sx={{ fontFamily: "Cinzel", fontSize: 25 }}>
                Joanna Kowalik
              </Typography>
            </MenuItem>
            {/* <FormControl size="small" sx={{ m: 1, minWidth: 50 }}>
              <Select
                value={language}
                onChange={(event) => handleLanguage(event.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="de">DE</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem
                    component={Link}
                    to="/"
                    onClick={handleDrawerToggle}
                    sx={{ color: "#000" }}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/portfolio"
                    onClick={handleDrawerToggle}
                    sx={{ color: "#000" }}
                  >
                    <ListItemText primary="Portfolio" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/about"
                    onClick={handleDrawerToggle}
                    sx={{ color: "#000" }}
                  >
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/contact"
                    onClick={handleDrawerToggle}
                    sx={{ color: "#000" }}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ marginRight: 20, textDecoration: "none" }}>
                <Typography sx={{ color: "#000" }}>Home</Typography>
              </Link>
              <Link
                to="/portfolio"
                style={{ marginRight: 20, textDecoration: "none" }}
              >
                <Typography sx={{ color: "#000" }}>Portfolio</Typography>
              </Link>
              <Link
                to="/about"
                style={{ marginRight: 20, textDecoration: "none" }}
              >
                <Typography sx={{ color: "#000" }}>About</Typography>
              </Link>
              <Link
                to="/contact"
                style={{ marginRight: 20, textDecoration: "none" }}
              >
                <Typography sx={{ color: "#000" }}>Contact</Typography>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
