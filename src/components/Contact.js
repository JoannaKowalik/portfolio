import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import ContactImage from "../images/5_Contact.jpg";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_eja2kq1", "template_b1h36zb", toSend, "DRroXFZ1KNWqnagFK")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      className="about-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 13,

        marginLeft: isSmallScreen ? 5 : 10,
        marginRight: isSmallScreen ? 5 : 10,
      }}
    >
      <Box
        className="about-box"
        sx={{
          width: "50%",
          height: "80vh",
          mr: 1,
          backgroundImage: `url(${ContactImage})`,
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
          Contact
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            color: "#000",
          }}
        >
          Phone: +49 (0) 151 11583043
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            color: "#000",
          }}
        >
          E-Mail: info@joannakowalik.com
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={{ minWidth: "100%" }}>
            <Typography
              sx={{
                fontSize: 16,
                color: "#000",
                mt: 3,
              }}
            >
              Your name:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="filled"
              size="small"
              fullWidth
              required
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <Typography
              sx={{
                fontSize: 16,
                color: "#000",
              }}
            >
              Your E-Mail:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="filled"
              size="small"
              fullWidth
              type="email"
              required
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
            />

            <Typography>Message:</Typography>
            <TextField
              id="filled-multiline-static"
              variant="filled"
              multiline
              rows={4}
              size="small"
              fullWidth
              required
              name="message"
              value={toSend.message}
              onChange={handleChange}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                sx={{
                  width: "200px",
                  border: "1px solid",
                  fontWeight: "bold",
                  backgroundColor: "#283a43",
                  mt: 3.7,
                  justifyContent: "center",
                  "&:hover": {
                    borderColor: "#283a43",
                    color: "#283a43",
                  },
                }}
              >
                <Typography sx={{ textDecoration: "none" }}>Send</Typography>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
