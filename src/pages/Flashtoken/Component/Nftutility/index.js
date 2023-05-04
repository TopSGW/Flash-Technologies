import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
// import one from "../../../../assests/Images/3d1.png";
// import two from "../../../../assests/Images/3d2.png";
// import three from "../../../../assests/Images/3d3.png";
// import four from "../../../../assests/Images/3d4.png";
import one from "../../../../assests/Images/Legendaire_Noir_Airdrop_1.png"
import two from "../../../../assests/Images/Legendaire_Noir_Ranking_1.png"
import three from "../../../../assests/Images/Legendaire_Ice_Fee_Reduction_1.png"
import four from "../../../../assests/Images/image_67.png"
import line3 from "../../../../assests/Images/Line3.png";

import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";
import lock from "../../../../assests/Images/lock.png";

import blockhainsecured from "../../../../assests/Images/blockhainsecured.png";
import singletransaction from "../../../../assests/Images/singletransaction.png";
import ReplaceBankAccount from "../../../../assests/Images/ReplaceBankAccount.png";
import tokenDeflationary from "../../../../assests/Images/tokenDeflationary.png";
import columnBackground from "../../../../assests/Images/columnBackground.png";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

import AppButton from "../../../../components/AppButton";
import { useSelector } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
// import MobileDrawer from "../MobileDrawer";
const data = [
  {
    cardimg: one,
    x: 0,
    number: "01.",
    img: lock,
    txt: "Airdrop",
    para1: "Each month receive Flash in your wallet.",
    para2:
      "Holders of the AIRDROP NFTS receive Flash tokens every month. The amount differs depending on the rarity of the NFT. It also gives access to other benefits including the vip club (call nft & tokens), whitelist, discounts and other benefits that will be disclosed in the future.",
  },
  {
    cardimg: two,
    x: 5,
    number: "02.",
    img: lock,
    txt: "Ranking Increase",
    para1: "Will quickly increase the privilege ranking.",
    para2:
      "The NFTS RANKING INCREASE allow you to increase quickly your ranking points on Flash Transfer Website. The earned points depend on the rarity of the NFT. It also gives access to other benefits including the vip club (call nft & tokens), whitelist, discounts and other benefits that will be disclosed later.",
  },
  {
    cardimg: three,
    x: 10,
    number: "03.",
    img: lock,
    txt: "Discount on transaction fees",
    para1: "Will entitle you to fees on money transfer site transactions.",
    para2:
      "The NFTS DISCOUNT ON TRANSACTION FEES provide discounts on transaction fees. The reduction is bigger depending on the rarity of the NFT. It also gives access to other benefits including the vip club (call nft & tokens), whitelist, discounts and other benefits that will be disclosed later.",
  },
  {
    cardimg: four,
    x: 15,
    number: "04.",
    img: lock,
    txt: "Random effect",
    para1: "Every 3 months or 6 months the function of the NFT changes.",
    para2:
      "The NFTS RANDOM EFFECT change abilities every 4 months. The benefit is greater depending on the rarity of the NFT. It also gives access to other benefits including the vip club (call nft & tokens), whitelist, discounts and other benefits that will be disclosed later.",
  },
];

const NFTutility = () => {
  const classes = useStyles();
  const list = [
    {
      img: one,
    },
    {
      img: two,
    },
    {
      img: three,
    },
    {
      img: four,
    },
  ];
  const lang = useSelector(Languagemodel)
  return (
    <>
      <Grid
        container
        sx={{
          mt: { xs: "-10px" },

          color: "white",
          transform: { lg: "scale(0.8)", xs: "scale(none)" },
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
            mt: {sm:'20px'}
          }}
        >
          <Grid item xs={12} md={6} > 
            <Typography
              sx={{
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: "130% !important",
                color: "#FBBF04",
                textAlign: "center",
                paddingX: "10px",
              }}
            >
              {lang["GET YOUR NFT UTILITY"]}
            </Typography>
          </Grid>
          <Grid
            container
            fixed
            sx={{
              maxWidth: { lg: "1400px", xs: "100%" },
              color: "white",
              margin: { lg: "120px auto 0px auto", xs: "30px 0px -80px 0px" },
              paddingBottom: "50px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "0",
                right: "0",
                textAlign: "center",
                marginTop: "-50px",
                marginLeft: "-20px",
              }}
            >
              {/* <img src={flashappOveralIcon} /> */}
            </Box>
            <Grid container style={{justifyContent:'center'}}>
              {data.map((i) => {
                return (
                  <Grid
                    item
                    md={2.9}
                    sm={12}
                    xs={12}
                    sx={{
                      display: "flex",
                      margin: {
                        lg: "0px 2px !important",
                        // xs: "0px 20px !important",
                      },
                      mt: {sm: '20px', md:'30px', lg: '0px'},
                      padding: { md: "0px 3px", xs: "0px 0px" },
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Bounce left sx={{}}>
                      <Box
                        sx={{
                          backgroundImage: `url(${columnBackground})`,
                          // width: "100%",
                          // width:"300px",
                          height: { md: "400px", sm: "570px", xs: "391px" },
                          // margin: "0px 10px !important",
                          // textAlign: "center",
                          width: { lg: "100%", xs: "335px", sm: "60%"},
                          mx:{sm: "auto" },
                          mt:{sm:"20px", lg:"0px"},
                          backgroundSize: "100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Box
                          sx={{
                            transform: "scale(0.9)",
                            margin: { lg: "0px 0px", xs: "30px 40px" },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Manrope' !important",
                              fontSize: "35px !important",
                              fontWeight: "600 !important",
                              lineHeight: "47.81px !important",
                              color: "#FFFF",
                            }}
                          >
                            {i.number}
                          </Typography>
                          {/* <img src={i.img}/> */}
                          <Box
                            mt="14px"
                            // className={classes.flashBoxesImage}
                            component="img"
                            src={i.img}
                          />
                          <Typography
                            sx={{
                              fontFamily: "'Manrope' !important",
                              fontSize: { lg: "20px !important", xs: "16px" },
                              fontWeight: "700 !important",
                              lineHeight: "27.32px !important",
                              color: "#FFFF",
                              margin: "10px 0",
                            }}
                          >
                            {lang[i.txt]}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Manrope' !important",
                              fontSize: { lg: "14px !important", xs: "12px" },
                              fontWeight: "400 !important",
                              lineHeight: "21px !important",
                              color: "#FBBF04",
                            }}
                          >
                            {lang[i.para1]}
                          </Typography>{" "}
                          <Typography
                            sx={{
                              fontFamily: "'Manrope' !important",
                              fontSize: { lg: "14px !important", xs: "12px" },
                              fontWeight: "400 !important",
                              lineHeight: "150% !important",
                              color: "#85898F",
                            }}
                          >
                            {lang[i.para2]}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: { lg: "none", xs: "flex", sm: "none" },
                          margin: "20px 0px",
                        }}
                      >
                        <img src={i.cardimg} height="467px" width="334px" />
                      </Box>
                      <Box
                        sx={{
                          display: { lg: "none", xs: "none", sm: "flex" },
                          margin: "0px 0px -30px 0px",
                        }}
                      >
                        <img src={i.cardimg} height="90%" width="400px" />
                      </Box>
                    </Bounce>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "100%",
              width: { lg: "1400px", xs: "100%" },
              paddingBottom: "0px",
            }}
          >
            <Box
            className='cont-main'
              sx={{
                mt: "40px",
                display: "flex",
                flexDirection: { lg: "row", xs: "column" },
                justifyContent: "center",
                width: "100%",
              }}
            >
              {list.map((i) => {
                return (
                  <Bounce left style={{width:'100%'}} >
                    <Box
                      className="nft-images"
                      sx={{
                        // margin: "10px 0px",
                        padding: "10px 7px",
                        display: "flex",
                        alignItems: "center",
                        flexGrow: "1",
                        flexBasis: "100%",
                        maxWidth:'100%'
                      }}
                    >
                      
                      <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                        <img src={i.img} />
                      </Box>
                      <Box sx={{ display: { lg: "none", xs: "none" } }}>
                        <img src={i.img} height="800px"  />
                      </Box>
                      
                    </Box>
                    </Bounce>
                );
              })}
              <Box></Box>
            </Box>
          </Grid>
          {/* <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                mt: "88.22px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "220px",
                  width: "220px",
                  border:
                    "1px solid  linear-gradient(306.56deg, #FBBF04 -1.32%, rgba(0, 0, 0, 0) 77.14%)",
                }}
              ></Box>
              <Box></Box>
            </Box>
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default NFTutility;
