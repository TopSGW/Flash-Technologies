import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import list1 from "../../../../assests/Images/list1.png";
import list2 from "../../../../assests/Images/list2.png";
import list3 from "../../../../assests/Images/list3.png";
import list4 from "../../../../assests/Images/list4.png";
//
import flashListedCoinBackground from "../../../../assests/Images/flashListedCoinBackground.png";
import { motion } from "framer-motion";

import AppButton from "../../../../components/AppButton";
import Firimg from '../../../../assests/img_gallery/1.jpg'
import Secimg from '../../../../assests/img_gallery/2.jpg'
import Threeimg from '../../../../assests/img_gallery/3.jpg'
import Fourimg from '../../../../assests/img_gallery/4.jpg'
import Fiveimg from '../../../../assests/img_gallery/5.jpg'
import Siximg from '../../../../assests/img_gallery/6.jpg'
import Sevenimg from '../../../../assests/img_gallery/7.jpg'
import Eightimg from '../../../../assests/img_gallery/8.jpg'
import Nineimg from '../../../../assests/img_gallery/9.jpg'
import Tenimg from '../../../../assests/img_gallery/10.jpg'
import Elevenimg from '../../../../assests/img_gallery/11.jpg'
import Twelveimg from '../../../../assests/img_gallery/12.jpg'
import Thirteenimg from '../../../../assests/img_gallery/13.jpg'
import Fourteenimg from '../../../../assests/img_gallery/14.jpg'
import Fifteenimg from '../../../../assests/img_gallery/15.jpg'
// import MobileDrawer from "../MobileDrawer";
import Marquee from "react-fast-marquee";
const FlashList = () => {
  const classes = useStyles();
  const list = [
    {
      img: list1,
      name: "BNB Chain",
    },
    {
      img: list2,
      name: "Cronos",
    },
    {
      img: list3,
      name: "Ethereum",
    },
    {
      img: list4,
      name: "Polygon",
    },
  ];
  const ImgGalleryList = [
    {img:Firimg},
    {img:Secimg},
    {img:Threeimg},
    {img:Fourimg},
    {img:Fiveimg},
    {img:Siximg},
    {img:Sevenimg},
    {img:Eightimg},
    {img:Nineimg},
    {img:Tenimg},
    {img:Elevenimg},
    {img:Twelveimg},
    {img:Thirteenimg},
    {img:Fourteenimg},
    {img:Fifteenimg},
  ]
  return (
    <>
      <Grid
        container
        sx={{
          height: { lg: "665.62px", xs: "220px" },
          color: "white",
          paddingTop: { lg: "60px", xs: "0px" },
          backgroundImage: `url(${flashListedCoinBackground})`,
          backgroundSize: "cover",
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
            md={4}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "40px !important", xs: "12px" },
                letterSpacing: "1px",
                fontWeight: "500 !important",
                lineHeight: { lg: "24px !important", xs: "18px" },
                color: "#FBBF04",
              }}
            >
              WE ARE SUPPORTED

            </Typography>
{/* 
            <Typography
              sx={{
                mt: "8px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: { lg: "130% !important", xs: "26.7px" },
                color: "#ffff",
              }}
            >
              Flash is listed on
            </Typography> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center", paddingBottom: {lg: "0px", xs:"20px"} }}
          >
            <Marquee gradient={false} speed={40}>
              <Box
                sx={{
                  marginTop: { lg: "20.22px", xs: "10px" },
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {ImgGalleryList.map((i) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mx: {lg:"60px", xs:"30px"}
                      }}
                    >
                        <motion.button
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.5 },
                        }}
                        className="animated-div"
                        
                      >
                          <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                            <img className ="flash-list" src={i.img} 
                             style={{borderRadius: "16px", height: "300px"}}/>
                        </Box>
                        </motion.button>
                      <Box
                        sx={{
                          display: { lg: "none", xs: "flex" },
                        }}
                      >
                        <img className="flash-list" src={i.img} height="120px" 
                         style={{borderRadius: "8px"}}/>
                      </Box>

                      {/* <Typography
                        sx={{
                          fontFamily: "'Manrope' !important",
                          fontSize: {
                            lg: "22px !important",
                            xs: "10px !important",
                          },
                          fontWeight: "700 !important",
                          lineHeight: {
                            lg: "35.2px !important",
                            xs: "16px !important",
                          },
                          color: "#FFFF",
                        }}
                      >
                        {i.name}
                      </Typography> */}
                    </Box>
                  );
                })}
              </Box>
            </Marquee>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashList;
