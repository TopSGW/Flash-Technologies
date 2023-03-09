import { Typography, Grid, FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/flash-logosvg.svg";

// import Flag from "../../assests/Logo/Flag.svg";
import AmericanFlag from "../../../../assests/Images/AmericanFlag.png";
import smileyIcon from "../../../../assests/Images/smiley-icon.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

import "./index.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F951AD" : "#308fe8",
  },
}));

const HeaderTopBar = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        sx={{
          mb: { lg: "0px", xs: "-10px" },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            width: { lg: "1400px", xs: "100%" },
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0px 20px",
            transform: { lg: "scale(0.8)", xs: "scale(none)" },
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "none",
                width: "100%",
              }}
            >
              <Grid
                sx={{ padding: { lg: "5px 0px", xs: "0px 0px" } }}
                className="topbarboxparent"
              >
                <div className="counter-box">
                  <div>
                    <Grid container>
                      <Grid
                        item
                        xs={8}
                        sx={{
                          display: { lg: "flex", xs: "none" },
                          flexDirection: { xs: "row" },
                        }}
                        className="counter-wrap"
                      >
                        <div className="counter-item jours">
                          <h6>71</h6>
                          <p>jours</p>
                        </div>
                        <div className="counter-item heures">
                          <h6>04</h6>
                          <p>heures</p>
                        </div>
                        <div className="counter-item minutes">
                          <h6>13</h6>
                          <p>minutes</p>
                        </div>
                        <div className="counter-item secondes">
                          <h6>15</h6>
                          <p>secondes</p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="launc-notify">
                  <div className="notify-items">
                    <Grid container>
                      <Grid sx={{ display: { md: "flex", xs: "none" } }}>
                        <div className="notify-text">
                          <h4>
                            Token Sale IN{" "}
                            <span class="primary-color">fair launch</span>{" "}
                            (soon)
                          </h4>
                        </div>
                      </Grid>
                    </Grid>
                    {/* <Grid container> */}
                    <Grid
                      sx={{ display: { md: "flex", xs: "none" } }}
                      item
                      md={4}
                      xs={1}
                      // backgroundColor="red"
                    >
                      <div className="notify-button">
                        <a href="#">
                          {" "}
                          <img alt="" src={smileyIcon} /> <span>Pinksale</span>
                        </a>
                      </div>
                      {/* </Grid> */}
                    </Grid>
                  </div>
                </div>

                <Grid container sx={{ display: { xs: "none", md: "flex" } }}>
                  <Grid item xs={12}>
                    <div className="sold-coins">
                      <h5>300 BNB</h5>
                      <BorderLinearProgress
                        className="progressbar-top"
                        variant="determinate"
                        value={5}
                      />
                      <p>Softcap</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ display: "none", justifyContent: "center" }}>
          <Grid
            sx={{
              transform: { lg: "scale(none)", xs: "scale(1)",sm: "scale(1)" },

              display: { md: "none",  xs: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Grid
              sx={{
                transform: "scale(0.8)",
              }}
              className="counter-wrap"
            >
              <div className="counter-item jours">
                <h6>71</h6>
                <p>jours</p>
              </div>
              <div className="counter-item heures">
                <h6>04</h6>
                <p>heures</p>
              </div>
              <div className="counter-item minutes">
                <h6>13</h6>
                <p>minutes</p>
              </div>
              <div className="counter-item secondes">
                <h6>15</h6>
                <p>secondes</p>
              </div>
            </Grid>
            <Grid>
              <Box
                sx={{
                  ml: {xs:"30px",sm:"440px"},
                  width: "83px",
                  backgroundColor: "#E0007B",
                  borderRadius: "56px",
                  height: "28px",
                  padding: "3px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={smileyIcon} width="20px" height="20px" />
                  <Typography ml="3px" color="#fff" fontSize="10px">
                    Pinksale{" "}
                  </Typography>
                </Box>
                {/* <a href="#">
                  {" "}
                  <img alt="" src={smileyIcon}/> <span >Pinksale</span>
                </a> */}
              </Box>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderTopBar;
