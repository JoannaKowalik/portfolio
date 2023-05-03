import React from "react";
import { Button, Typography } from "@mui/material";

const ButtonMore = () => {
  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        width: "200px",
        border: "1px solid",
        fontWeight: "bold",
        backgroundColor: "#283a43",
      }}
    >
      <Typography sx={{ textDecoration: "none" }}>Portfolio</Typography>
    </Button>
  );
};

export default ButtonMore;
