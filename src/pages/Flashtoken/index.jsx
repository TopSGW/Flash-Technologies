import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../Styles";
import FTheader from "./Component/header";
import { Box } from "@mui/system";
import Banner from "./Component/banner";
import FlashEcosystem from "./Component/FlashEcosystem";
import FlashList from "./Component/Flashlist";
import ListingPartners from "./Component/Listing&Partners";
import FlashTransfer from "./Component/FlashTransfer";
import Roadmap from "./Component/Roadmap";
import Footer from "./Component/Footer";
import InvestFuture from "./Component/InvestFuture";
import NFTutility from "./Component/Nftutility";
import CoreTeams from "./Component/CoreTeam";
import Tokenomics from "./Component/Tokenomics";
import FlashRecharge from "./Component/FlashRecharge";
import CoreTeamMember from "./Component/CoreTeamMember";
import DevTeam from "./Component/DevTeam";
import Faq from "./Component/Faq";
import ContactUs from "./Component/ContactUs";
import HeaderTopBar from "./Component/HeaderTopBar";
import Menu from "./Component/menu";
import bannerBackground from "../../assests/Images/banner-background.png";
import Carousel from 'react-material-ui-carousel'
import "./index.css";

import tokenomicsBack from "../../assests/Images/tokenomics-back.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';
import Media from "./Component/Media";

const FlashToken = () => {
  const classes = useStyles();
  const tokenomicsBreakpoint = useMediaQuery('(max-width : 1199px)');
  return (
    <>
      <Grid container style={{overflow:'hidden'}}>
        <Grid item md={12} sx={{
          width: "100vw",
          marginTop: {xs:'71px', lg:'0px'}
        }} 
        >
          {/* <Grid sx={{ backgroundColor: "black" }}>
            <HeaderTopBar />
          </Grid> */}
          {/* <Grid
            sx={{
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize: "cover",
              // backgroundColor: "#181818",
            }}
          ></Grid> */}
          <Grid
            sx={{
              backgroundColor: "#181818",
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize: "cover",
              position: "relative"
            }}
          >
            <FTheader />
            <Banner />
          </Grid>
          <Grid id="services" sx={{ backgroundColor: "#0F0F0F" }}>
            <FlashEcosystem />
          </Grid>
          <Grid sx={{ backgroundColor: "#181818" }}>
            <FlashList />
          </Grid>

          <Grid id="partners" sx={{ backgroundColor: "black" }}>
            <ListingPartners />
          </Grid>
          <Grid id="partners" sx={{ backgroundColor: "black" }}>
            <FlashTransfer />
          </Grid>
          <Grid sx={{ backgroundColor: "#181818" }} id="roadmap">
            <Roadmap />
          </Grid>
          <Grid
            id="tokenomics"
            sx={{
              backgroundImage: `url(${tokenomicsBack})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative"
            }}
          >
            <div style={{
              width: "100%",
              height: "40px",
              position: "absolute",
              bottom: "100%",
              backgroundColor: "black",
              display:`${tokenomicsBreakpoint ? 'none' : 'block'}`
            }}></div>
            <Tokenomics/>
          </Grid> 
          <Grid sx={{ backgroundColor: "#181818" }}>
            <FlashRecharge />
          </Grid>

          <Grid sx={{ backgroundColor: "black" }}>
            <InvestFuture />
          </Grid>
          <Grid id="nft" sx={{ backgroundColor: "black" }}>
            <NFTutility />
          </Grid>
          <Grid sx={{ backgroundColor: "black" }}>
            <CoreTeams />
          </Grid>
          <Grid id="team" sx={{ backgroundColor: "#181818" }}>
            <CoreTeamMember />
          </Grid>
          <Grid sx={{ backgroundColor: "black", position: "relative", paddingBottom:{lg:"60px"} }}>
            <DevTeam />
            <Media/>
          </Grid>
          <Grid
            id="faq"
            sx={{ backgroundColor: { lg: "#181818", xs: "black" } }}
          >
            <Faq />
          </Grid>
          <Grid id="Contact" sx={{ backgroundColor: "black" }}>
            <ContactUs />
          </Grid>
          <Grid sx={{ backgroundColor: "#181818", paddingBottom: '60px'}}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashToken;
