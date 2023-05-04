import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import flashbtn from "../../../../assests/Images/flashbtn.png";

import { useStyles } from "../../../../Styles";
import mobile from "../../../../assests/Images/mobile.png";
import circle from "../../../../assests/Images/circle.png";
import appstore from "../../../../assests/Images/applebtn.png";
import playstore from "../../../../assests/Images/storebtn.png";

import { useSelector } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FlashTransfer = () => {
  const classes = useStyles();
  const lang = useSelector(Languagemodel)
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          color: "white",
          justifyContent: "center",
          overflow: "hidden",
          paddingBottom: "150px",
          transform: { lg: "scale(0.8)", xs: "scale(none)" },
          marginBottom: "-75px",
        }}
      >
      <Grid
          item
          xs={12}
          md={10}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: { lg: "space-between", xs: "center" },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              marginTop: { lg: "0px", xs: "20px" },
              display: "flex",
              alignItems: "end",
              position: { lg: "relative", xs: "relative" },
              justifyContent: "center",
              marginBottom: { lg: "-200px", xs: "0px" },
              paddingLeft: { lg: "60px", xs: "0px" },
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                position: { lg: "absolute", xs: "absolute" },
                width: { lg: "650px", xs: "333px" },
                backgroundColor: "#FBBF04",
                height: { lg: "600px", xs: "400.75px" },
                // marginBottom: '100px'
                bottom: { lg: "-200px", xs: "-200px" },
                
              }}

              className="add-filter"
            ></Box>
            <Box
              sx={{
                display: { lg: "flex", xs: "none" },
                position: { lg: "relative", xs: "relative" },
              }}
            >
              <img
                src={mobile}
                className="mobile-mockup"
                sx={{
                  marginBottom: "-50px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: { lg: "none", xs: "flex" },
                position: { lg: "relative", xs: "relative" },
              }}
            >
              <img
                src={mobile}
                width="185.83px"
                height="363.4px"
                // className="mobile-mockup"
                sx={{
                  marginBottom: "-50px",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              marginTop: { lg: "0px", xs: "-80px" },

              position: { lg: "relative", xs: "relative" },
            }}
          >
            <Box
              sx={{
                padding: { lg: "0px 0px", xs: "24px 30px" },
                backgroundColor: { xs: "black" },
              }}
            >
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: { lg: "16px !important", xs: "12px" },
                  fontWeight: "500 !important",
                  lineHeight: "150% !important",
                  letterSpacing: "0.1em",
                  color: "#FBBF04",
                  marginTop: { lg: "90px", xs: "0px" },
                }}
              >
                {lang["Cash to crypto and vice versa."]}
              </Typography>
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: { lg: "50px !important", xs: "26px" },
                  fontWeight: "800 !important",
                  lineHeight: "140% !important",
                  color: "#FFF",
                  marginBottom: "20px",
                }}
              >
                {lang["Flash Transfer"]}
              </Typography>
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: "17px !important",
                  fontWeight: "400 !important",
                  lineHeight: "160% !important",
                  color: "#FFFF",
                  maxWidth: { lg: "80%", xs: "100%",sm: "70%" },
                }}
              >
                {lang["Exchange your cash vs crypto or crypto vs cash. Buy directly cryptocurrency with our approved partners. You can also send your cryptocurrency and the receiver withdraws it in fiat all over the world using a Binance account or using your non custodial wallet ( Flash wallet, Metamask, Trust wallet ...)."]}
              </Typography>
              <a href="https://flash-dex.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
              
              <IconButton
                className="iconbutton"
                sx={{
                  height: {lg:"62px",xs:"37.33px"},
                  fontSize: {lg:"16px",xs:"14px"},
                  margin: "20px 5px 20px 5px",
                  fontWeight: 600,
                  lineHeight: "150%",
                  borderRadius: "69px",
                  color: "#0F0F0E",
                  padding: {lg:"15px 55px",xs:"8px 18px"},
                  // width: "246px",
                  backgroundColor: "#FBBF04",
                }}
              >
                <img src={flashbtn} />
                {lang["Buy Flash"]}
              </IconButton>

              </a>
              <Typography
                sx={{
                  mt: "8",
                  textTransform: "uppercase",
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "24px !important",
                  color: "#84898F",
                }}
              >
                {lang["DOWNLOAD FROM"]}
              </Typography>

              <Box
                sx={{
                  mt: "10px",
                  display: { lg: "flex", xs: "none" },
                  // alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box mr={1}>
                  <img src={playstore} />
                </Box>
                <Box ml={1}>
                  <img src={appstore} />
                </Box>
              </Box>
              <Box
                sx={{
                  mt: "10px",

                  display: { lg: "none", xs: "flex" },
                  // alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box mr={1}>
                  <img src={playstore} width="126.97px" height="38.29px" />
                </Box>
                <Box ml={1}>
                  <img src={appstore} width="126.97px" height="38.29px" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashTransfer;
