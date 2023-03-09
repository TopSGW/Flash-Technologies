import { Grid, Typography } from "@mui/material";
import React from "react";
// import { useStyles } from "../../CssFile";
// import AppButton from "../AppButton";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";

import carve from "../../assests/Images/carve.png";

import { Box } from "@mui/system";

const TabHeader = () => {
  // const classes = useStyles();
  const tabs = [
    {
      img: carve,
      imgright: right,
      color: "black",
      text: "Reciver’s info",
      des: "Vitae sed mi luctus laoreet.",
    },
    {
      img: carve,
      imgright: right,

      color: "black",
      text: "Payment Method",
      des: "Cursus semper viverra.",
    },
    {
      img: carve,
      imgright: right,
      color: "black",

      text: "Review & Confirm",
      des: "Penatibus eu quis ante.",
    },
    {
      img: carve,
      imgright: right2,
      text: "reCeipt",
      color: "#4F46E5",
      des: "Penatibus eu quis ante.",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundColor: "#F7FDFF",
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid  #D1D5DB",
            borderBottom: "1px solid  #D1D5DB",
          }}
        >
          <Grid
            item
            md={10.2}
            xs={12}
            sx={{
              borderRight: "1px solid  #D1D5DB",
              borderLeft: "1px solid  #D1D5DB",
              display: "flex",
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            {tabs.map((i) => {
              return (
                <Grid
                  item
                  md={3}
                  xs={12}
                  sx={{
                    height: "80px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={i.img} />
                    <img src={i.imgright} style={{ margin: "15px" }} />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          letterSpacing: "0.7px !important",
                          fontFamily: "Inter !important",
                          fontSize: "12px !important",
                          fontWeight: "600 !important",
                          lineHeight: "16px !important",
                        }}
                      >
                        {i.text}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Inter !important",
                          fontSize: "14px !important",
                          fontWeight: "500 !important",
                          lineHeight: "20px !important",

                          color: "#6A6A6A",
                        }}
                      >
                        {i.des}
                      </Typography>
                      {/* <img src={i.img} style={{ margin: "15px" }} /> */}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TabHeader;
