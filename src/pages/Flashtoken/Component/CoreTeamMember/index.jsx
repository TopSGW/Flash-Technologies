import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
// import core1 from "../../../../assests/team_pictures/core1.png";
// import core2 from "../../../../assests/team_pictures/core2.jpg";
// import core3 from "../../../../assests/team_pictures/core3.png";
// import core4 from "../../../../assests/team_pictures/core4.JPG";
import core1 from "../../../../assests/Images/core1.png";
import core2 from "../../../../assests/Images/core2.png";
import core3 from "../../../../assests/Images/core3.png";
import core4 from "../../../../assests/Images/core4.png";
import thirdcoreteam from "../../../../assests/Images/third-core-team.png";
import min from "../../../../assests/Images/memberin.png";
import mtweet from "../../../../assests/Images/membertweet.png";
import partner21 from "../../../../assests/Images/partner21.png";
import partner22 from "../../../../assests/Images/partner22.png";
import partner23 from "../../../../assests/Images/partner23.png";
import partner24 from "../../../../assests/Images/partner24.png";
import partner25 from "../../../../assests/Images/partner25.png";

import coreteam1 from "../../../../assests/Images/coreteam1.png";
import coreteam2 from "../../../../assests/Images/coreteam2.png";
import coreteam3 from "../../../../assests/Images/coreteam3.png";
import coreteam4 from "../../../../assests/Images/coreteam4.png";
import "./index.css";

import AppButton from "../../../../components/AppButton";
import Avatar from "@mui/material/Avatar";
import { Languagemodel } from "../../../../Slice/translateSlice";
import { useSelector } from "react-redux";
// import MobileDrawer from "../MobileDrawer";

const CoreTeamMember = () => {
  const classes = useStyles();
  const lang = useSelector(Languagemodel)
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          padding: { lg: "0 20px 50px 20px", xs: "0px 0px 50px 0px" },
          color: "white",
          width: { lg: "100%", xs: "100%", sm: "100%" },
          // maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            transform: {
              lg: "scale(0.8)",
              xs: "scale(none)",
              sm: "scale(none)",
            },
          }}
        >
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mt: "70px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: "65px !important",
                color: "#ffff",
              }}
            >
              {lang["Core Team"]}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            alignItem: "start",
            flexDirection: { lg: "row", xs: "column" },
            // justifyContent: "center",

            transform: { lg: "scale(0.9)", xs: "scale(0.9)", sm: "scale(0.9)" },
            marginTop: { lg: "20px !important", xs: "13px" },
          }}
          className={"core-team-members"}
          // sx={{

          // }}
        >
          <Grid item xs={12} md={4} sm={12}>
            <Box className="member_core">
              <img src={core4} className="core_member" />
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "800 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  {lang["Aladdin CEO & Founder"]}
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "11px !important",
                    fontWeight: "400 !important",
                    lineHeight: "17px !important",
                  }}
                >
                  {lang["CEO & Founder of"]} <br />{" "}
                  <span className="colored-text">{lang["Blocklabchain"]} </span> &{" "}
                  <span className="colored-text">{lang["Hulk"]}</span>
                </Typography>
                <Box mt="10px">
                  <a
                    href="https://www.linkedin.com/in/alaeddine-abu-saed-b466b3139
"
                    target="__blank"
                  >
                    <img src={min} style={{ marginRight: "10px" }} />
                  </a>

                  <a
                    href="https://twitter.com/Aladdinbusiness"
                    target="__blank"
                  >
                    <img src={mtweet} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={12} >
            <Box className="member_core">
            <img src={core3} className="core_member" />
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "800 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  {lang["Safi CCO & Co-Founder"]}
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "11px !important",
                    fontWeight: "400 !important",
                    lineHeight: "17px !important",
                  }}
                >
                  {lang["CEO & Founder of"]} <br />
                  <span className="colored-text">{lang["Les Artisans d’Orient"]}</span>
                </Typography>
                <Box mt="10px">
                  <a
                    href="https://www.linkedin.com/in/safi-medjahdi-95769b248
"
                    target="__blank"
                  >
                    <img src={min} style={{ marginRight: "10px" }} />
                  </a>
                  
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={12}  sx={{}}>
            <Box className="member_core">
            <img src={core2} className="core_member" />
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "800 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  {lang["Junior COO"]}
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "11px !important",
                    fontWeight: "400 !important",
                    lineHeight: "17px !important",
                  }}
                >
                  {lang["Communication English & German. Works in"]}{" "}
                  <span className="colored-text">{lang["Diplomatic Institution"]} </span>,{" "}
                  <a className="colored-text"
                    style={{textDecoration:'none'}} 
                    href="https://www.binance.com/en/feed/profile/84382884" target="_blank">{lang["Binance feed creator"]} </a>{" "}
                </Typography>
                <Box mt="10px">
                  <a
                    href="https://www.linkedin.com/in/terry-junior-65a578232
"
                    target="__blank"
                  >
                    <img src={min} style={{ marginRight: "10px" }} />
                  </a>

                  <a
                    href="https://twitter.com/TerryJunior87
"
                    target="__blank"
                  >
                    <img src={mtweet} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Box className="member_core">
            <img src={core1} className="core_member" />
                <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "800 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  {lang["Mimirk CMO & CDO"]}
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "11px !important",
                    fontWeight: "400 !important",
                    lineHeight: "17px !important",
                  }}
                >
                  {lang["Chief marketing officer. Works as a"]}{" "}&nbsp;
                  <span className="colored-text">
                    {lang["Expert in marketing and public relations"]}{" "}
                  </span>{" "}
                  {/* and{" "}
                  <span className="colored-text">digital communication</span> */}
                </Typography>
                <Box mt="10px">
                  <a
                    href="https://www.linkedin.com/in/samir-keffache"
                    target="__blank"
                  >
                    <img src={min} style={{ marginRight: "10px" }} />
                  </a>

                  <a href="https://twitter.com/mimirkcrypto" target="__blank">
                    <img src={mtweet} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CoreTeamMember;
