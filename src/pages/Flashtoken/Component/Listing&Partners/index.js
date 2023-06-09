import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
// import Slider from "infinite-react-carousel";
//import partner1 from "../../../../assests/Images/partner1.png";
import partner1 from "../../../../assests/Images/cropped-Onramper-Logo.png";

import partner2 from "../../../../assests/Images/solid_proof.png";
import partner3 from "../../../../assests/Images/partner3.png";
import partner4 from "../../../../assests/Images/partner4.png";
import partner5 from "../../../../assests/Images/osborne.png";
import partner6 from "../../../../assests/Images/partner6.png";
import partner7 from "../../../../assests/Images/partner7.png";
import partner8 from "../../../../assests/Images/partner8.png";
import partner9 from "../../../../assests/Images/partner9.png";
import partner10 from "../../../../assests/Images/partner10.png";
import partner11 from "../../../../assests/Images/partner11.png";
import partner12 from "../../../../assests/Images/partner12.png";
import partner13 from "../../../../assests/Images/partner13.png";
import partner14 from "../../../../assests/Images/partner14.png";
import partner15 from "../../../../assests/Images/partner15.png";
import partner16 from "../../../../assests/Images/partner16.png";
import partner17 from "../../../../assests/svg/clertlogo.svg";
import partner18 from '../../../../assests/svg/dexview-full.svg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";
// import "react-owl-carousel2/style.css";
import AppButton from "../../../../components/AppButton";
import { useSelector } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
// import MobileDrawer from "../MobileDrawer";

const ListingPartners = () => {
  const classes = useStyles();
  const list1 = [
    {
      img: partner3,
    },
    {
      img:partner17,
      url: "https://www.certik.com"
    },
    // {
    //   img: partner2,
    //   url: "https://solidproof.io/"
    // },
    {
      img: partner1,
    },
    {
      img: partner4,
    },
    {
      img: partner5,
    },
  ];
  const list2 = [
    {
      img: partner6,
    },
    {
      img: partner7,
    },
    {
      img: partner18,
    },
    {
      img: partner8,
    },
    {
      img: partner9,
    },
  ];
  const list3 = [
    {
      img: partner10,
    },
    {
      img: partner11,
    },
    {
      img: partner12,
    },
    {
      img: partner13,
    },
    {
      img: partner14,
    },
  ];
  const list4 = [
    {
      img: partner15,
    },
    {
      img: partner16,
    },
  ];
  const list5 = [
    {
      img: partner1,
    },
    // {
    //   img: partner2,
    //   url: "https://solidproof.io/"
    // },
    {
      img: partner3,
    },
    {
      img: partner4,
    },
    {
      img: partner5,
    },
    {
      img: partner6,
    },
    {
      img: partner7,
    },
    {
      img: partner8,
    },
    {
      img: partner9,
    },
    {
      img: partner10,
    },
    {
      img: partner11,
    },
    {
      img: partner12,
    },
    {
      img: partner13,
    },
    {
      img: partner14,
    },
    {
      img: partner15,
    },
    {
      img: partner16,
    },
    {
      img: partner17,
      url: "https://www.certik.com"
    },
    {
      img: partner18
    }
  ];

  const Option = {
    responsive: {
      0: {
        items: 2,
      },
      375: {
        items: 2,
      },
      425: {
        items: 2,
      },
      575: {
        items: 3,
      },
      770: {
        items: 4,
      },
      960: {
        items: 4,
      },
      1170: {
        items: 4,
      },
      1340: {
        items: 4,
      },
      1560: {
        items: 4,
      },
      1600: {
        items: 4,
      },
    },
  };
  const lang = useSelector(Languagemodel)
  return (
    <>
      <Grid
        container
        sx={{
          marginBottom: { lg: "0px", xs: "-20px" },
          height: { lg: "550px", xs: "450px" },
          color: "white",
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
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              transform: { lg: "scale(0.8)", xs: "scale(none)" },
            }}
          >
            <Typography
              sx={{
                mt: { lg: "20px", xs: "0px" },
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: "65px !important",
                color: "#ffff",
              }}
            >
              {lang["Listing & Partners"]}
            </Typography>
          </Grid>

          <div className="mobile-carousel">
            <OwlCarousel
              className="owl-theme"
              autoplay={true}
              loop
              margin={40}
              autoplaySpeed={7000}
              autoplayTimeout={1000}
              nav={false}
              dots={false}
              items={6}
              responsive={Option.responsive}
            >
              {list5.map((i) => {
                return (
                  <div>
                    {i.img == partner2 || i.img == partner17 ? <a href={i.url} target="_blank"> <img src={i.img} width="140px" /> </a> :
                        <img src={i.img} />}                    
                  </div>
                );
              })}
            </OwlCarousel>
          </div>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              paddingTop: "32px",

              marginBottom: "-32px",
              display: { lg: "none", xs: "flex" },
              justifyContent: "center",
              flexDirection: "column",
              transform: { lg: "scale(0.8)", xs: "scale(0.9)" },
              marginTop: "-50px",
            }}
            className="hidden-mobile"
          >
            <Grid container>
              {list5.map((i) => {
                return (
                  <Grid
                    item
                    xs={4}
                    sx={{
                      // mr: "5px",
                      display: { lg: "none", xs: "flex" },
                      alignItems: "center",
                      // flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      className="animated-div"
                    >
                      <Box
                        sx={{
                          margin: " 10px 0px",
                          display: "flex",
                          flexDirection: "column",
                          // alignItems: "center",
                        }}
                      >
                        <Box>
                          <img src={i.img} width="101px" height="auto" />
                        </Box>
                      </Box>
                    </motion.button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          {/* <Box  sx={{ displlay: { lg: "flex", xs: "none" } }}>
                      <img src={i.img} width="101px" height="17px" />
                    </Box> */}

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              transform: "scale(0.8)",
              marginTop: "-50px",
            }}
          >
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
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="animated-div"
                  >
                    <Box
                      sx={{
                        margin: "0px 30px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        {i.img == partner2 || i.img == partner17 ? <a href={i.url} target="_blank"> <img src={i.img} height={"120px"} width={"140px"}/> </a> :
                        <img src={i.img} />}
                      </Box>
                    </Box>
                  </motion.button>
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
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="animated-div"
                  >
                    <Box
                      sx={{
                        margin: "20px 40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <img src={i.img} />
                      </Box>
                    </Box>
                  </motion.button>
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
              {list3.map((i) => {
                return (
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="animated-div"
                  >
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
                  </motion.button>
                );
              })}
            </Box>{" "}
            <Box
              sx={{
                // mt: "88.22px",
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list4.map((i) => {
                return (
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="animated-div"
                  >
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
                  </motion.button>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListingPartners;
