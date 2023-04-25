import React from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import Image6 from "../images/6.png";
import Image7 from "../images/7.jpg";
import Image8 from "../images/8.jpg";
import Image9 from "../images/9.jpg";
import Image10 from "../images/10.jpg";
import Image11 from "../images/11.jpg";
import Image12 from "../images/12.jpg";
import Image13 from "../images/13.jpg";
import Image14 from "../images/14.jpg";
import Image15 from "../images/15.jpg";
import Image16 from "../images/16.jpg";
import Image17 from "../images/17.jpg";
import Image18 from "../images/18.jpg";
import Image19 from "../images/19.jpg";
import Image20 from "../images/20.jpg";
import Image21 from "../images/21.jpg";
import Image22 from "../images/22.jpg";
import Image27 from "../images/27.jpg";
import Image28 from "../images/28.jpg";
import Image29 from "../images/29.png";
import Image30 from "../images/30.jpg";
import Image31 from "../images/31.jpg";
import Image32 from "../images/32.jpg";
import Image33 from "../images/33.jpg";

const itemData = [
  {
    img: Image16,
    title: "Image16",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image10,
    title: "Image10",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image27,
    title: "Image27",
    author: "Client: Blauform GmbH",
  },
  {
    img: Image6,
    title: "Image6",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image19,
    title: "Image19",
    author: "Client: Griffwerk GmbH",
  },
  {
    img: Image7,
    title: "Image7",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image18,
    title: "Image18",
    author: "Client: Griffwerk GmbH",
  },
  {
    img: Image8,
    title: "Image8",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image33,
    title: "Image33",
  },
  {
    img: Image9,
    title: "Image9",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image22,
    title: "Image22",
    author: "Client: Blauform GmbH",
  },

  {
    img: Image12,
    title: "Image12",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image13,
    title: "Image13",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image14,
    title: "Image14",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image15,
    title: "Image15",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image17,
    title: "Image17",
    author: "Client: DHBT. Architekten GmbH",
  },

  {
    img: Image20,
    title: "Image20",
    author: "Client: Blauform GmbH",
  },
  {
    img: Image21,
    title: "Image21",
    author: "Client: Blauform GmbH",
  },
  {
    img: Image11,
    title: "Image11",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image28,
    title: "Image28",
    author: "Client: Blauform GmbH",
  },
  {
    img: Image29,
    title: "Image29",
    author: "Client: Golfblocks GmbH",
  },
  {
    img: Image30,
    title: "Image30",
    author: "Client: Griffwerk GmbH",
  },
  {
    img: Image31,
    title: "Image31",
    author: "Client: private",
  },
  {
    img: Image32,
    title: "Image32",
    author: "Client: private",
  },
];

const Stills = () => {
  return (
    <Box
      sx={{
        mt: 10,

        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Stills;
