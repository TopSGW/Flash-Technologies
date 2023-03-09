import { Grid, Typography } from "@mui/material";
import React from "react";
// import { useStyles } from "../../CssFile";
// import AppButton from "../AppButton";
import home from "../../assests/Images/home.png";
import arrow from "../../assests/Images/forwerd.png";

// import { Grid } from "@mui/system";

const MiniHeader = () => {
  // const classes = useStyles();

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          md={10.2}
          sm={11}
          xs={11}
          sx={{
            height: "45px",
            display: { md: "flex", sm: "flex", xs: "none" },
            flexDirection: { md: "row", sm: "row", xs: "column" },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img src={home} />
            <img src={arrow} style={{ margin: "20px" }} />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter !important",
                fontSize: "14 px !important",
                fontWeight: "500 !important",
                lineHeight: "20px !important",
              }}
            >
              Send Money
            </Typography>
            <img src={arrow} style={{ margin: "15px" }} />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter !important",
                fontSize: "14 px !important",
                fontWeight: "500 !important",
                lineHeight: "20px !important",
              }}
            >
              Benificiary Info
            </Typography>

            <img src={arrow} style={{ margin: "15px" }} />
          </Grid>{" "}
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter !important",
                fontSize: "14 px !important",
                fontWeight: "500 !important",
                lineHeight: "20px !important",
                color: "#6B7280",
              }}
            >
              Confirm Detail
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MiniHeader;
