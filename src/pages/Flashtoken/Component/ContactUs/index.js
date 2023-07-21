import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Button,
  TextField,
  Alert,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useStyles } from "../../../../Styles";

import axios from "axios";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import inbox from "../../../../assests/Images/inbox.png";
import img1 from "../../../../assests/Images/social1.png";
import img2 from "../../../../assests/Images/social2.png";
import img3 from "../../../../assests/Images/social3.png";
import img4 from "../../../../assests/Images/social4.png";
import img5 from "../../../../assests/Images/social5.png";
import img6 from "../../../../assests/Images/social6.png";
import img7 from "../../../../assests/Images/social7.png";
import img8 from "../../../../assests/Images/social8.png";
import img9 from "../../../../assests/Images/social9.png";
import img10 from "../../../../assests/Images/opensea.png";

import contactsectionicons from "../../../../assests/Images/contact-section-icons.png";
import contactnumber from "../../../../assests/Images/contactnumber.png";
import contactemail from "../../../../assests/Images/mails.png";
import sendmessagebutton from "../../../../assests/Images/sendmessagebutton.png";
import { Languagemodel } from "../../../../Slice/translateSlice";
import { useSelector } from "react-redux";
import "./index.css";
// import MobileDrawer from "../MobileDrawer";
import EN from "../../../../assests/pdf/WhitePaperEN.pdf";

const dev = 2; // 1: develop 2: deploy
// const config = {
//     SERVER_URL: window.location.origin
// }

const config = {
  SERVER_URL: "https://flash-technologies.org:3001",
};

const pics = [
  {
    img: img1,
    link: "https://twitter.com/Flash_Techno_Of",
  },
  {
    img: img2,
    link: "https://t.me/flashtokenenglish",
  },
  {
    img: img3,
    link: "https://www.youtube.com/channel/UCbNApPsnWrYixnri4hwUUyA",
  },
  {
    img: img4,
    link: "https://www.instagram.com/flash_techno_of/",
  },
  {
    img: img5,
    link: "https://www.facebook.com/profile.php?id=100076643679062",
  },
  {
    img: img6,
    link: "https://www.linkedin.com/company/flash-technologies-off/",
  },
  {
    img: img7,
    link: "https://github.com/Flash-Technologies",
  },
  {
    img: img8,
    link: EN,
  },
  {
    img: img9,
    link: "https://linktr.ee/FlashTechnologies",
  },
  {
    img: img10,
    link: "https://opensea.io/collection/flash-nfts",
  },
];

const ContactUs = () => {
  const classes = useStyles();
  const [firstName, SetfirstName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [emailAddress, SetemailAddress] = useState("");
  const [messageContent, SetmessageContent] = useState("");
  const [messageStatus, SetmessageStatus] = useState(<></>);
  const SendMessage = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      messageContent: messageContent,
    };
    // await axios.post(`${config.SERVER_URL}/api/messages`, data)
    await axios
      .post("https://flash-launch.com:3000/send-email", data)
      .then((res) => {
        SetmessageStatus(
          <Alert
            variant="filled"
            severity="success"
            style={{
              margin: "auto",
              width: "60%",
              animation: "visible 0.8s ease",
              position: "relative",
            }}
            className="AlertSetting"
          >
            Success!
          </Alert>
        );
        setTimeout(() => {
          SetmessageStatus(<></>);
        }, 2000);
        console.log(res.data);
      })
      .catch((err) => {
        SetmessageStatus(
          <Alert
            variant="filled"
            severity="error"
            style={{
              margin: "auto",
              width: "60%",
              animation: "visible 0.8s ease",
              position: "relative",
            }}
            className="AlertSetting"
          >
            Error!
          </Alert>
        );
        setTimeout(() => {
          SetmessageStatus(<></>);
        }, 2000);
      });
  };
  const lang = useSelector(Languagemodel);
  const LaguageState = useSelector((state) => state.translate.mode);
  return (
    <>
      <Stack
        sx={{ width: "100%", position: "fixed", top: 0, zIndex: 9999999 }}
        spacing={2}
      >
        {messageStatus}
      </Stack>
      <Grid
        container
        sx={{
          position: "relative",
          color: "white",
          maxWidth: "100%",
          width: { lg: "1400px", xs: "100%" },
          margin: "0 auto",
          padding: { lg: "30px 20px", xs: "30px 30px" },
          transform: { lg: "scale(0.8)", xs: "scale(none)" },
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    mt: "3px",
                    color: "#FBBF04",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { lg: "16px", xs: "12px" },
                    lineHeight: "140%",
                  }}
                >
                  {lang["CONTACT"]}
                </Typography>
                <Typography
                  sx={{
                    mt: "px",
                    color: "#ffff",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: { lg: "50px", xs: "26px" },
                    lineHeight: "140%",
                  }}
                >
                  {lang["Contact Us"]}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { lg: "18px", xs: "12px" },
                    fontWeight: "500",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    paddingRight: { lg: "60px", xs: "60px" },
                  }}
                >
                  {
                    lang[
                      "Whether you have a question about one of our services or want to get involved in our mission, we are ready to help."
                    ]
                  }
                </Typography>
                <Box>
                  <br></br>
                  <Grid
                    item
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  ></Grid>
                  <Grid item xs={12} md={12}>
                    <Box className="contact-info">
                      {/* <Box>
                        <a
                          href="tel:+ 39020"
                          style={{ textDecoration: "none" }}
                        >
                          <img src={contactnumber} />
                        </a>
                      </Box> */}
                      {/* <br /> */}
                      <Box mt="23px">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="mailto:contact@flash-technologies.org"
                            style={{
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img className="email-icon" src={contactemail} />

                            <p style={{ marginLeft: "17px", color: "#fff" }}>
                              contact@flash-technologies.org
                            </p>
                          </a>
                        </div>
                      </Box>
                      {/* <img src={contactsectionicons} /> */}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box className="contact-info">
                      {/* <Box>
                        <a
                          href="tel:+ 39020"
                          style={{ textDecoration: "none" }}
                        >
                          <img src={contactnumber} />
                        </a>
                      </Box> */}
                      {/* <br /> */}
                      <Box mt="23px">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="mailto:contact@flash-technologies.org"
                            style={{
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img className="email-icon" src={contactemail} />

                            <p style={{ marginLeft: "17px", color: "#fff" }}>
                              Investor@flash-technologies.org
                            </p>
                          </a>
                        </div>
                      </Box>
                      {/* <img src={contactsectionicons} /> */}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box className="contact-info">
                      {/* <Box>
                        <a
                          href="tel:+ 39020"
                          style={{ textDecoration: "none" }}
                        >
                          <img src={contactnumber} />
                        </a>
                      </Box> */}
                      {/* <br /> */}
                      <Box mt="23px">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="mailto:contact@flash-technologies.org"
                            style={{
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img className="email-icon" src={contactemail} />

                            <p style={{ marginLeft: "17px", color: "#fff" }}>
                              media@flash-technologies.org
                            </p>
                          </a>
                        </div>
                      </Box>
                      {/* <img src={contactsectionicons} /> */}
                    </Box>
                  </Grid>
                  <Typography
                    sx={{
                      mt: { xs: "8px", md: "10px", lg: "24px" },
                      mb: "5px",
                      fontFamily: "Manrope",
                      fontWeight: "700 !important",
                      fontSize: "16px !important",
                      lineHeight: "25.6px !important",
                    }}
                  >
                    {lang["Follow us:"]}
                  </Typography>
                  <Grid
                    container
                    sx={{
                      mt: { xs: "7px", md: "10px", lg: "12px" },
                      display: "flex",
                      flexDirection: { lg: "row", xs: "row" },
                    }}
                  >
                    {pics.map((i) => {
                      return (
                        <Grid item xs={2.3} md={1} sm={1}>
                          <Box m="5px" sx={{ lg: "100%", xs: "50px" }}>
                            {i.img == img2 ? (
                              <a
                                id="telegramlink2"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                                href={`${
                                  LaguageState == "fr"
                                    ? "https://t.me/flashtechnologiesfr"
                                    : "https://t.me/flashtokenenglish"
                                }`}
                              >
                                <img src={i.img} />
                              </a>
                            ) : (
                              <a
                                href={i.link}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <img src={i.img} />
                              </a>
                            )}
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                className="contact-form"
                item
                // xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Grid item md={6} xs={6}>
                  {/* <TextField label="First Name" fullWidth autocomplete="none"/> */}
                  <div className="contact-form-box">
                    <label>
                      <span>{lang["First Name"]}</span>
                      <input
                        type="text"
                        placeholder="Jenny"
                        value={firstName}
                        onChange={(e) => SetfirstName(e.target.value)}
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={6} md={6}>
                  {/* <TextField label="Last Name" fullWidth autocomplete="none"/> */}
                  <div className="contact-form-box">
                    <label>
                      <span>{lang["Last Name"]}</span>
                      <input
                        type="text"
                        placeholder="Wilson"
                        value={lastName}
                        onChange={(e) => SetlastName(e.target.value)}
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="contact-form-box">
                    <label>
                      <span>{lang["Your Email Address"]}</span>
                      <input
                        type="email"
                        placeholder="jenny.lawson@example.com"
                        value={emailAddress}
                        onChange={(e) => SetemailAddress(e.target.value)}
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="contact-form-box">
                    <label>
                      <span>{lang["Tell us about your project"]}</span>
                      <textarea
                        placeholder={`${lang["Type Here"]}...`}
                        value={messageContent}
                        onChange={(e) => SetmessageContent(e.target.value)}
                      ></textarea>
                    </label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: { lg: "end", xs: "center" },
                    // width: { lg: "350px", xs: "100%" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className="contact-form-box"
                    style={{ padding: "20px" }}
                  >
                    <Button
                      sx={{ textTransform: "none", padding: "10px" }}
                      onClick={() => SendMessage()}
                    >
                      {lang["Send Message"]}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
