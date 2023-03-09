import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
//import partner1 from "../../../../assests/Images/partner1.png";
import partner1 from "../../../../assests/Images/cropped-Onramper-Logo.png";

import partner2 from "../../../../assests/Logo/currenxie.svg";
import partner3 from "../../../../assests/Images/partner3.png";
import partner4 from "../../../../assests/Images/partner4.png";
import partner17 from "../../../../assests/Images/partner17.png";
import partner18 from "../../../../assests/Images/partner18.png";
import partner19 from "../../../../assests/Images/partner19.png";
import partner20 from "../../../../assests/Images/partner20.png";
import partner21 from "../../../../assests/Images/partner21.png";
import partner22 from "../../../../assests/Images/partner22.png";
import partner23 from "../../../../assests/Images/partner23.png";
import partner24 from "../../../../assests/Images/huawei.png";
import partner25 from "../../../../assests/Images/partner25.png";
import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";
import { motion } from "framer-motion";
import "./index.css";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const CoreTeams = () => {
  const classes = useStyles();
  const list1 = [
    {
      img: partner3,
    },
    // {
    //   img: partner2,
    // },
    {
      img: partner1,
    },
    {
      img: partner17,
    },
    {
      img: partner18,
    },
    {
      img: partner19,
    },
  ];
  const list2 = [
    {
      img: partner20,
    },
    {
      img: partner25,
    },
    {
      img: partner22,
    },
    {
      img: partner24,
    },
  ];
  const list3 = [
    {
      img: partner24,
    },
    {
      img: partner25,
    },
  ];
  const list5 = [
    {
      img: partner3,
    },
    // {
    //   img: partner2,
    // },
    {
      img: partner1,
    },
    {
      img: partner17,
    },
    {
      img: partner18,
    },
    {
      img: partner19,
    },
    {
      img: partner20,
    },
    {
      img: partner25,
    },
    {
      img: partner22,
    },
    // {
    //   img: partner23,
    // },
    // {
    //   img: partner20,
    // },
    // {
    //   img: partner21,
    // },
    // {
    //   img: partner22,
    // },
    // {
    //   img: partner23,
    // },
    {
      img: partner24,
    },
    // {
    //   img: partner25,
    // }
  ];

  return (
    <>
      <Grid
        container
        sx={{
          paddingBottom: { lg: "0px", xs: "40px" },
          marginTop: { lg: "0px", xs: "-20px" },
          // height: "505.62px",
          color: "white",
          position: "relative",
          transform: { lg: "scale(0.8)", xs: "scale(0.9)" },
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "20px" },
                fontWeight: "800 !important",
                lineHeight: { lg: "65px !important", xs: "26px" },
                color: "#ffff",
              }}
            >
              Our{" "}
              <Typography
                component="span"
                sx={{
                  color: "#FBBF04",
                  fontFamily: "'Manrope' !important",
                  fontSize: { lg: "50px !important", xs: "26px" },
                  fontWeight: "800 !important",
                  lineHeight: { lg: "65px !important", xs: "26px" },
                  display: "inline",
                }}
              >
                CORE TEAM{" "}
              </Typography>{" "}
              has worked with
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              mt: "50px",
              mb: { lg: "50px", xs: "0px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                // mt: "88.22px",
                display: { lg: "none", xs: "flex" },
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {list5.map((i) => {
                  return (
                    <Grid
                      item
                      xs={4}
                      mb={1}
                      mt={1}
                      sx={{
                        // mr: "5px",
                        display: { lg: "none", xs: "flex" },
                        alignItems: "center",
                        // flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={
                          {
                            // margin: " 10px 0px",
                            // display: "flex",
                            // flexDirection: "column",
                            // alignItems: "center",
                          }
                        }
                      >
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                          className="animated-div"
                        >
                          <Box>
                            <img src={i.img} width="auto" height="auto" />
                          </Box>
                        </motion.button>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
              {/* <Grid container>
                {list5.map((i) => {
                  return (
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          margin: "30px 20px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img src={i.img} />
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid> */}
            </Box>
            <Box
              sx={{
                // mt: "88.22px",
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list1.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      className="animated-div"
                    >
                      <Box>
                        <img src={i.img} />
                      </Box>
                    </motion.button>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                // mt: "88.22px",
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list2.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "10px 30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.button
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                          className="animated-div"
                        >
                    <Box>
                      <img src={i.img} />
                    </Box>
                    </motion.button>
                  </Box>
                );
              })}
            </Box>
            {/* <Box
              sx={{
                // mt: "88.22px",
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list3.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={i.img} />
                    </Box>
                  </Box>
                );
              })}
            </Box> */}{" "}
          </Grid>
        </Grid>
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            className={classes.overlapIcon}
            sx={{
              bottom: " -130px",
              display: { lg: "flex", xs: "none" },
            }}
          >
            <img className="rotating" src={flashappOveralIcon} />
          </Box>
          <Box
            className={classes.overlapIcon}
            sx={{
              bottom: {
                lg: " 110px",
                xs: " -95px",
              },
              width: {
                xs: "96px",
              },
              left: {
                lg: "60%",
                xs: "65%",
              },
              display: { lg: "none", xs: "flex" },
            }}
          >
            <img
              className="rotating rotating-image repsponsive-rotate"
              src={flashappOveralIcon}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CoreTeams;
