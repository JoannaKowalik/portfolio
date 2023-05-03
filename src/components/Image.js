import React from "react";
import { Typography, DialogContent, Box } from "@mui/material";

const Image = ({ selectedItem }) => {
  return (
    <DialogContent>
      <Box>
        <Typography variant="subtitle1">{selectedItem.author}</Typography>
        <img
          srcSet={`${selectedItem.img}?w=900&fit=crop&auto=format&dpr=2 3x`}
          alt={selectedItem.title}
          style={{ objectFit: "contain", height: "100vh", width: "100%" }}
        />
      </Box>
    </DialogContent>
  );
};

export default Image;
