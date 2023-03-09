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
// import MobileDrawer from "../MobileDrawer";

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
                fontSize: { lg: "16px !important", xs: "12px" },
                letterSpacing: "1px",
                fontWeight: "500 !important",
                lineHeight: { lg: "24px !important", xs: "18px" },
                color: "#FBBF04",
              }}
            >
              WE ARE SUPPORTED


            </Typography>

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
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                marginTop: { lg: "88.22px", xs: "10px" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list.map((i) => {
                return (
                  <Box
                    sx={{
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
                    <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                      <img className="flash-list" src={i.img} />
                    </Box>
                    </motion.button>
                    <Box
                      sx={{
                        display: { lg: "none", xs: "flex" },
                      }}
                    >
                      <img className="flash-list" src={i.img} width="72px" height="65px" />
                    </Box>

                    <Typography
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
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashList;
