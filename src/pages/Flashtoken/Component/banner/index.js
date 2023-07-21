import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";
import insta from "../../../../assests/Images/insta.png";
import youtube from "../../../../assests/Images/youtube.png";
import tele from "../../../../assests/Images/tele.png";
import book from "../../../../assests/Images/book.png";
import arrow from "../../../../assests/Images/2arrow.png";
import git from "../../../../assests/svg/github.svg";
import fb from "../../../../assests/Images/fb.png";
import twetter from "../../../../assests/Images/tweter.png";
import In from "../../../../assests/Images/in.png";
import face from "../../../../assests/Images/face.png";
import opensea from "../../../../assests/svg/opensea.png";

import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";

import twetterbtn from "../../../../assests/Images/Twitter (5).png";
import telebtn from "../../../../assests/Images/Telegram.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";
import bannerline from "../../../../assests/Images/bannerline.png";
import certImg1 from '../../../../assests/Images/Hcertlogo.png';
import certImg2 from '../../../../assests/Images/Lcert.png';
import AppButton from "../../../../components/AppButton";
import { Languagemodel } from "../../../../Slice/translateSlice";
import { useSelector } from "react-redux";
// import MobileDrawer from "../MobileDrawer";
import EN from "../../../../assests/pdf/WhitePaperEN.pdf";

import "./index.css"

const Banner = () => {
  const classes = useStyles();
  const Navs = [
    {
      img: twetter,
      link: "https://twitter.com/Flash_Techno_Of",
    },
    {
      img: tele,
      link: "https://t.me/flashtokenenglish",
    },
    {
      img: youtube,
      link: "https://www.youtube.com/channel/UCbNApPsnWrYixnri4hwUUyA",
    },
    {
      img: insta,
      link: "https://www.instagram.com/flash_techno_of/",
    },
    {
      img: fb,
      link: "https://www.facebook.com/flashtechnologiesoff/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0",
    },
    {
      img: git,
      link: "https://github.com/Flash-Technologies",
    },
    {
      img: book,
      link: EN,
    },
    {
      img: In,
      link: "https://www.linkedin.com/company/flash-technologies-off/",
    },
    {
      img: arrow,
      link: "https://linktr.ee/FlashTechnologies",
    },
    {
      img:opensea,
      link: "https://opensea.io/collection/flash-nfts",
    },
    {
      img: face,
      link: "https://www.pinksale.finance/launchpad/0x0903f032F0cf20e1e105F49fD6C74fFFaF1Df831?chain=ETH",
    },
  ];
  const lang = useSelector(Languagemodel)
  const languageMode = useSelector((state) => state.translate.mode)
  return (
    <>
      <Grid
        container
        sx={{
          position: "relative",
          color: "white",
          height: { lg: "659px", xs: "594px" },
          paddingBottom: { lg: "0px", xs: "20px" },
        }}
      >
        <Grid
          xs={12}
          item
          md={12}
          sx={{
            mt: { lg: "140px", xs: "0px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={11.5}
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
            }}
          >
            <Grid item md={1.5}>
              <Box
                sx={{
                  width: "40px",
                  display: { lg: "flex", xs: "none" },
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "30.5px",
                  padding: "5px 0 0 0",
                  position: "relative",
                  zIndex: "999"
                }}
                className="social-vertical"
              >
                {Navs.map((i) => {
                  if(i.img == tele){
                    return (
                      <Box sx={{ margin: "10px 0px" }}>
                      <a id="telegramlink" target="__blank" href={`${languageMode == 'fr' ? 'https://t.me/flashtechnologiesfr' : 'https://t.me/flashtokenenglish'}`}>
                            <img src={i.img} />
                        </a>
                      </Box>
                    )
                  }
                  else{
                    return (
                      <Box sx={{ margin: "10px 0px" }}>
                        {i.img == git ? <a href={i.link} target="__blank">
                            <img src={i.img} style={{width:'27px'}}/>
                          </a> :
                          <a href={i.link} target="__blank">
                              <img src={i.img} />
                          </a>
                        }
                      </Box>
                    );  
                  }
                })}
              </Box>
            </Grid>

            <Grid item xs={12} md={6.8}>
              <Box
                sx={{
                  padding: { lg: "0px 0px", xs: "0px 30px" },
                  marginTop: { lg: "100px", xs: "90px" },
                  transform: { lg: "scale(0.8)", xs: "scale(none)" },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "16px !important", xs: "12px !important" },
                    fontWeight: "600 !important",
                    lineHeight: { lg: "none", xs: "19.2px !important" },
                    color: "#FBBF04",
                  }}
                >
                  {lang["Flash Technologies L.L.C-FZ"]}
                  
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: {
                      lg: "89.58px !important",
                      xs: "40px !important",
                    },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "none", xs: "52px !important" },
                    color: "#ffff",
                    lineHeight: "1.2",
                  }}
                >
                  Flash
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: {
                      lg: "89.58px !important",
                      xs: "40px !important",
                    },
                    fontWeight: "800 !important",

                    color: {lg: 'rgb(132, 137, 143)' , sm:"#FBBF04" , xs:'#FBBF04'},
                    lineHeight: "1.2",
                    marginBottom: { lg: "30px", xs: "0px" },
                  }}
                >
                  Technologies
                </Typography>

                <Grid
                  container
                  columnSpacing={2}
                  rowSpacing={2}
                  // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{
                    // mt: "-60px",
                    // transform: { lg: "scale(0.7)", xs: "scale(none)" },
                    display: { lg: "flex", xs: "none" },
                    // justifyContent:"space-between",
                    flexDirection: "row",
                    // padding: { lg: "0px 0px", xs: "0px 40px" },
                  }}
                >
                  <Grid item lg={4}md={4} xs={6}>
                  <a href="https://flash-dex.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
              
                  
                    <IconButton
                      className="iconbutton"
                      sx={{
                        fontSize: { md: "20px", xs: "14px" },
                        padding: { lg: "15px 40px", xs: "8px 16px" },
                        height: { lg: "62px", xs: "37px" },
                        margin: "0px 5px",
                        fontWeight: 600,
                        lineHeight: "150%",
                        borderRadius: "69px",
                        color: "#0F0F0E",
                        fontStyle: "Manrope",
                        width: { lg: "100%", xs: "auto" },
                        backgroundColor: "#FBBF04",
                      }}
                    >
                      <img src={flashbtn} />
                      {lang["Buy Flash"]}
                    </IconButton>
                    </a>
                  </Grid>
                  <Grid item lg={3.3} md={4} xs={6}>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      id="telegramlink4"
                      href={`${languageMode == 'fr' ? 'https://t.me/flashtechnologiesfr' : 'https://t.me/flashtokenenglish'}`}
                    >
                      <IconButton
                        className="iconbutton"
                        sx={{
                          fontStyle: "Manrope",
                          fontSize: { md: "20px", xs: "14px" },
                          padding: { lg: "15px 20px", xs: "8px 16px" },
                          height: { lg: "62px", xs: "37px" },
                          margin: "0px 5px",
                          fontWeight: 600,
                          lineHeight: "150%",
                          borderRadius: "69px",
                          color: "#0F0F0E",
                          width: { lg: "100%", xs: "auto" },
                          backgroundColor: "#FBBF04",
                        }}
                      >
                        <img src={telebtn} style={{ marginRight: "5px" , width: '25px'}} />
                        Telegram
                      </IconButton>
                    </a>
                  </Grid>

                  <Grid item lg={3.3} md={4} xs={6}>
                    <a
                      href="https://twitter.com/Flash_Techno_Of"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton
                        className="iconbutton"
                        sx={{
                          fontStyle: "Manrope",
                          fontSize: { md: "20px", xs: "14px" },
                          padding: { lg: "15px 20px", xs: "8px 16px" },
                          height: { lg: "62px", xs: "37px" },
                          margin: "0px 5px",
                          fontWeight: 600,
                          fontStyle: "Manrope",
                          lineHeight: "150%",
                          borderRadius: "69px",
                          color: "#0F0F0E",
                          width: { lg: "100%", xs: "auto" },
                          backgroundColor: "#FBBF04",
                        }}
                      >
                        <img src={twetterbtn} style={{ margin: "0px 5px" , width: '25px'}} />
                        Twitter
                      </IconButton>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={3.7}>
              <Box
                sx={{
                  padding: { lg: "0px 0px", xs: "0px 30px" },
                  marginTop: { lg: "100px", xs: "10px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  transform: { lg: "scale(0.8)", xs: "scale(none)" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "26px !important", xs: "18px !important" },
                    fontWeight: "500 !important",
                    lineHeight: {
                      lg: "150% !important",
                      xs: "27px !important",
                    },
                    color: "#ffff",
                    marginBottom: { lg: "30px", xs: "20px" },
                    marginTop: { lg: "0px", xs: "-15px" },
                    maxWidth: "350px",
                  }}
                >
                  {lang["Flash Technologies creates a money transfer ecosystem."]}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "16px !important", xs: "12px" },
                    fontWeight: "400 !important",
                    lineHeight: { lg: "165% !important", xs: "16px" },
                    color: "#85898F",
                    marginBottom: "40px",
                    maxWidth: "600px",
                  }}
                >
                  {lang["Flash Transfer is the world's first platform that allows you to buy crypto with cash, transfer, or sell cryptocurrencies for cash through our network of merchants, with reasonable fees. Flash Wallet, our non-custodial wallet, has a smart contract that you can use to transfer your crypto in the event of death. When making payments on the blockchain, you can use Flash Pay, our escrow smart contract, to secure your transactions without any third party holding your crypto. Find the best fees with Flash Dex, our aggregator swap & bridge!"]}
                </Typography>
                <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                  <img src={bannerline} />
                </Box>
              </Box>
            </Grid>
            <Grid
              container
              columnSpacing={2}
              rowSpacing={2}
              sx={{
                padding: { lg: "0px 0px", xs: "0px 50px" },
                display: { lg: "none", xs: "flex" },
                flexDirection: "row",
              }}
            >
              <Grid
                item
                md={4}
                xs={6}
                sx={{
                  marginLeft: "-25px",
                }}
                className="resp-buttons"
              >
                    <a href="https://flash-dex.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
              
                <IconButton
                  className="iconbutton"
                  sx={{
                    fontSize: { md: "20px", xs: "14px" },
                    padding: { lg: "15px 40px", xs: "8px 10px" },
                    height: { lg: "62px", xs: "37px" },
                    margin: "0px 5px",
                    fontWeight: 600,
                    width: "95%",
                    lineHeight: "150%",
                    borderRadius: "69px",
                    color: "#0F0F0E",

                    // width: { lg: "100%", xs: "auto" },
                    backgroundColor: "#FBBF04",
                  }}
                >
                  <img
                    src={flashbtn}
                    style={{ width: "24px", height: "21.33px" }}
                  />
                  {lang["Buy Flash"]}
                </IconButton>
                </a>
              </Grid>
              <Grid
                item
                lg={3.3}
                md={4}
                xs={6}
                sx={{}}
                className="resp-buttons"
              >
                <a
                  id="telegramlink3"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href={`${languageMode == 'fr' ? 'https://t.me/flashtechnologiesfr' : 'https://t.me/flashtokenenglish'}`}
                >
                  <IconButton
                  className="iconbutton"
                    sx={{
                      height: { lg: "62px", xs: "37px" },
                      fontSize: { md: "20px", xs: "14px" },
                      fontWeight: 600,
                      padding: { lg: "15px 40px", xs: "8px 10px" },
                      margin: "0px 5px",
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#0F0F0E",
                      border: "1px solid #FBBF04",
                      width: { lg: "auto", xs: "93%" },
                      backgroundColor: "#FBBF04",
                    }}
                  >
                    <img
                      src={telebtn}
                      style={{
                        width: "18px",
                        height: "14.73px",
                        marginRight: "5px",
                      }}
                    />
                    Telegram
                  </IconButton>
                </a>
              </Grid>

              <Grid
                item
                lg={3.3}
                md={4}
                xs={12}
                sx={{
                  marginLeft: "-25px",
                }}
                className="resp-buttons"
              >
                <a
                  href="https://twitter.com/Flash_Techno_Of"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <IconButton
                  className="iconbutton"
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      padding: { lg: "15px 40px", xs: "8px 10px" },
                      height: { lg: "62px", xs: "37px" },

                      fontWeight: 600,
                      margin: "0px 5px",

                      lineHeight: "150%",
                      borderRadius: "69px",
                      minWidth: "120px",
                      color: "#0F0F0E",
                      border: "1px solid #FBBF04",
                      width: { lg: "auto", xs: "auto" },
                      backgroundColor: "#FBBF04",
                    }}
                  >
                    <img
                      src={twetterbtn}
                      style={{
                        width: "20px",
                        height: "15.24px",
                        margin: "0px 5px",
                      }}
                    />
                    Twitter
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: { lg: "center", xs: "end" } }}
        >
          <Box sx={{ display: { lg: "flex", xs: "none" } }}>
            <div className="banner-overlay-icon">
              <img
                className="rotating banner-overlay"
                src={flashappOveralIcon}
                style={{ width: "117px", height: "117px" }}
              />
            </div>
          </Box>

          <Box
            sx={{
              display: { lg: "none", xs: "flex" },
              mt: { lg: "0px", xs: "20px" },
            }}
          >
            <Box sx={{ position: "absolute", bottom: "-50px", left: "65%" }}>
              <img
                className="rotating banner-overlay"
                src={flashappOveralIcon}
                style={{ width: "87.94px", height: "87.46px" }}
              />
            </Box>
          </Box>
        </Grid>
        <a className="logo_cert">
          <a className="logo_elements" href="https://skynet.certik.com/projects/flash-3.0" target="_blank" rel="noreferrer">
            <h3 className="audit_by">{lang["Audited by"]}</h3>
            <div style={{marginLeft:"10px"}}>
              <img src={certImg1} className="certImg1"></img>
            </div>
            <div style={{marginLeft:"10px"}}>
              <img src={certImg2} className="certImg2"></img>
            </div>
          </a>
        </a>
      </Grid>
    </>
  );
};

export default Banner;
