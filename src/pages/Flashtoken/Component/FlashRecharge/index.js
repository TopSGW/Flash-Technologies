import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
import flashCards from "../../../../assests/Images/flashCards.png";
import { motion } from "framer-motion";
import checkSquare from "../../../../assests/Images/check-square.png";
// import Flag from "../../assests/Logo/Flag.svg";

import "./index.css";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FlashRecharge = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        sx={{
          pt: { lg: "0px", xs: "80px" },
          position: "relative",
          color: "white",
          maxWidth: "100%",
          width: { lg: "1400px", xs: "100%" },
          margin: "0 auto",
          padding: " 0 0 50px 0",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            transform: "scale(0.8)",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={12}>
              <Box>
                
                  <img
                    sx={{ marginTop: "-90px", width: "100%" }}
                    className="recharge-card"
                    src={flashCards}
                  />
                
              </Box>
            </Grid>

          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            transform: "scale(0.8)",
          }}
        >
          <Grid
            item
            md={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    color: "#FBBF04",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16x",
                    lineHeight: "140%",
                    marginTop: "0px",
                  }}
                >
                  Flash Recharge Card
                </Typography>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: { lg: "50px", xs: "30px" },
                    lineHeight: "140%",
                  }}
                >
                  Flash Recharge
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { lg: "16px", xs: "13px" },
                    fontWeight: "400",
                    lineHeight: { lg: "32px", xs: "22px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    paddingRight: { lg: "60px", xs: "30px" },
                    color: "#85898F",
                  }}
                >
                  The Flash recharge is a prepaid card that allows users to top
                  up their account in $ BUSD on the Flash wallet website
                  without any intermediary.
                </Typography>
                <Box>
                  <Grid item md={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                      }}
                    >
                      <Box>
                        <img
                          src={checkSquare}
                          style={{
                            marginTop: "20px",
                            marginRight: "10px",
                            display: "inline-block",
                          }}
                        />{" "}
                      </Box>
                      <Typography
                        sx={{
                          // padding: "0px 10px",
                          fontFamily: "Manrope",
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: { lg: "18px", xs: "10px" },
                          lineHeight: "160%",
                          display: "block",
                          margin: "10px 0",
                          color: "#85898F",
                        }}
                      >
                        Flash recharge allows users to top up their balance on
                        our Flash wallet website.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                      }}
                    >
                      <Box>
                        <img
                          src={checkSquare}
                          style={{
                            marginTop: "10px",
                            marginRight: "10px",
                            display: "inline-block",
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          // padding: "0px 10px",
                          fontFamily: "Manrope",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: { lg: "18px", xs: "10px" },
                          lineHeight: "160%",
                          display: "block",
                          color: "#85898F",
                        }}
                      >
                        The Flash recharge's cards will be printed at the time
                        of purchase for an eco-responsible approach.
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashRecharge;
