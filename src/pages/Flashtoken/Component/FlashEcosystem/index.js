import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";
import insta from "../../../../assests/Images/insta.png";
import youtube from "../../../../assests/Images/youtube.png";
import tele from "../../../../assests/Images/tele.png";
import book from "../../../../assests/Images/book.png";
import arrow from "../../../../assests/Images/2arrow.png";
import git from "../../../../assests/Images/git.png";
import fb from "../../../../assests/Images/tweter.png";
import twetter from "../../../../assests/Images/tweterbtn.png";
import In from "../../../../assests/Images/in.png";
import face from "../../../../assests/Images/face.png";
import flashECO1 from "../../../../assests/Images/flash-eco-box1.png";
import flashbridge from "../../../../assests/Images/flashbridge.png";
import integrateFlashWallet from "../../../../assests/Images/integrateFlashWalletnew.png";
import StakingFLash from "../../../../assests/Images/StakingFLash.png";
import flashaudit from "../../../../assests/Images/flashaudit.png";
import flashlaunchpad from "../../../../assests/Images/flashlaunchpad.png";
import line3 from "../../../../assests/Images/Line3.png";
import line4 from "../../../../assests/Images/Line4.png";

import flashappOveralIcon from "../../../../assests/Images/ecosystemoverlay.png";

import blockhainsecuredBox from "../../../../assests/Images/blockhainsecured-box.png";
import singletransactionBox from "../../../../assests/Images/singletransaction-box.png";
import ReplaceBankAccountBox from "../../../../assests/Images/ReplaceBankAccount-box.png";
import tokenDeflationaryBox from "../../../../assests/Images/tokenDeflationary-box.png";

import blockhainsecured from "../../../../assests/Images/blockhainsecured-boxT.png";
import singletransaction from "../../../../assests/Images/singletransaction-boxT.png";
import ReplaceBankAccount from "../../../../assests/Images/ReplaceBankAccountT.png";
import tokenDeflationary from "../../../../assests/Images/tokenDeflationary-boxT.png";
import columnBackground from "../../../../assests/Images/columnBackground.png";

import twetterbtn from "../../../../assests/Images/tweterbtn.png";
import telebtn from "../../../../assests/Images/tele2.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";
import { motion } from "framer-motion";
const FlashEcosystem = () => {
  const classes = useStyles();
  const ButtonSize = useMediaQuery('(min-width : 600px)');
  const Navs = [
    {
      img: twetter,
    },
    {
      img: tele,
    },
    {
      img: youtube,
    },
    {
      img: insta,
    },
    {
      img: fb,
    },
    {
      img: git,
    },
    {
      img: book,
    },
    {
      img: In,
    },
    {
      img: arrow,
    },
    {
      img: face,
    },
  ];
  return (
    <>
      <Grid>
        <Grid
          container
          fixed
          sx={{
            color: "white",
            marginTop: { lg: "0px", xs: "-2px" },
            paddingTop: { lg: "100px", xs: "40px" },
            transform: { lg: "scale(0.8)", xs: "scale(none)" },
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sm={12}
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
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "150% !important",
                  color: "#FBBF04",
                }}
              >
                Services
              </Typography>

              <Typography
                sx={{
                  mt: "8px",
                  fontFamily: "'Manrope' !important",
                  fontSize: { lg: "50px !important", xs: "26px" },
                  fontWeight: "800 !important",
                  lineHeight: "130% !important",
                  color: "#ffff",
                }}
              >
                Flash Ecosystem
              </Typography>
              <Typography
                sx={{
                  mt: { lg: "20px", xs: "10px" },
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "170% !important",
                  color: "#85898F",
                }}
              >
                Discover all our services.
              </Typography>
              <Box
                sx={{
                  mt: { lg: "30px", xs: "15px" },
                  mb: { lg: "0px", xs: "15px" },
                }}
              >
                    <a href="https://flash-dex.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
              
                <IconButton
                  className="flash-button"
                  sx={{
                    height: { lg: "62px", xs: "37.33px" },
                    fontSize: { lg: "20px", xs: "14px" },
                    fontWeight: 600,
                    lineHeight: { lg: "30px", xs: "21px" },
                    borderRadius: "69px",
                    color: "#FFFF",
                    padding: { lg: "13px 20px", xs: "13px 20px" },
                    // width: "246px",
                    border: "1px solid #FBBF04",
                    // backgroundColor: "#FBBF04",
                  }}
                >
                  <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                    <img
                      src={FlashLogo}
                      style={{
                        marginRight: "10px",
                        // width: "27px",
                        height: "24px",
                      }}
                    />
                  </Box>
                  <Box style={{fontColor:"#FBBF04"}} sx={{ display: { lg: "none", xs: "flex" } }}>
                    <img
                      src={FlashLogo}
                      style={{
                        marginRight: "10px",
                        // width: "24px",
                        // height: "21.33px",
                        width: `${ButtonSize ? '24px' : '20px'}` ,
                        height: `${ButtonSize ? '21.33px' : '20px'}` 
                      }}
                    />
                  </Box>
                  Buy Flash
                </IconButton>
                </a>
              </Box>
              {/* <Grid item md={1.5}>
              <Box
                sx={{
                  backgroundColor: "#202020",
                  width: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "30.5px",
                }}
              >
                {Navs.map((i) => {
                  return (
                    <Box sx={{ margin: "10px 0px" }}>
                      <img src={i.img} />
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item md={6.8}>
              <Box sx={{ marginTop: "40px" }}>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "16px !important",
                    fontWeight: "600 !important",
                    // lineHeight: "160px !important",
                    color: "#FBBF04",
                  }}
                >
                  Flash Technologies L.L.C-FZ
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#ffff",
                  }}
                >
                  Flash
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#84898F",
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",
                      margin: "0px 5px",
                      fontWeight: 600,
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#0F0F0E",
                      padding: "15px 55px",
                      // width: "246px",
                      backgroundColor: "#FBBF04",
                    }}
                  >
                    <img src={flashbtn} />
                    Buy Flash
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",

                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 55px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={telebtn} />
                    Telegram
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 55px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={twetterbtn} />
                    Twitter
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3.7}>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "26px !important",
                    fontWeight: "500 !important",
                    lineHeight: "150% !important",
                    color: "#ffff",
                  }}
                >
                  Flash Technologies creates a money transfer ecosystem.
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "400 !important",
                    lineHeight: "165% !important",
                    color: "#85898F",
                  }}
                >
                  Flash transfer is the first platform in the world that allows
                  you to buy, send or sell cryptocurrencies, via our merchant
                  network with reasonable fees. Flash Transfer enables you as
                  well to exchange cash for cryptocurrencies and vice versa.
                </Typography>
              </Box>
            </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          fixed
          sx={{
            maxWidth: { lg: "1100px", xs: "100%" },
            color: "white",
            margin: "0px auto 0 auto",
          }}
        >
          
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
            
              
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Transfer
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Exchange your cash vs crypto or crypto vs cash. Buy directly cryptocurrency with our approved partners.
                You can also send your cryptocurrency and the receiver withdraws it in
                fiat all over the world using a Binance account or using your
                non custodial wallet ( Flash wallet, Metamask, Trust wallet ...).
              </Typography>

              <a
                href="https://flash-transfer.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                flash-transfer.com
              </a>
              <Box
                // sx={{
                //   display: { lg: "flex", xs: "none" },
                //   paddingTop: { lg: "0px", xs: "0px" },
                //   maxHeight: "400px",
                //   objectFit: "contain",
                // }}
                className={classes.flashBoxesImage}
                component="img"
                src={flashECO1}
              />
              
            
            </motion.fragment>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
            
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Dex
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash dex dapps is an all-in-one swap and bridge that allows users to swap their crypto assets from the same blockchain or from one blockchain to another. With the best possible direct market fees.
              </Typography>
              <a
                href="https://flash-dex.com/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                www.flash-dex.com
              </a>            

              <Box
                className={classes.flashBoxesImage}
                component="img"
                sx={{
                  marginTop: { lg: "90px", xs: "17px" },
                }}
                src={flashbridge}
              />
              
            </motion.fragment>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Wallet
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash Technologies has built a fully integrated cryptocurrency
                wallet that holders and merchants can use to buy, sell, stake,
                earn rewards and browse on internet. Flash Wallet has a special
                function that is unique in cryptospace. A very important feature
                that users will enjoy everywhere in the world. 
              </Typography>
              <a
                href  ='https://flash-wallet.com/'
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                flash-wallet.com
              </a>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                sx={{
//                  display: { lg: "flex", xs: "none" },
                  paddingTop: { lg: "0px", xs: "0px" },
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
                src={integrateFlashWallet}
              />
              {/* <Box
                className={classes.flashBoxesImage}
                component="img"
                sx={{
                  display: { lg: "none", xs: "flex" },
                  maxHeight: "900px",
                  width: "343px",
                }}
                src={integrateFlashWallet}
              /> */}
            </motion.fragment>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Staking
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Customers and merchants have the opportunity to earn rewards by
                using the staking protocol. Each month stakers receive a % of
                our staking pool.
              </Typography>
              <a
                href="https://flash-staking.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                flash-staking.com
              </a>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={StakingFLash}
              />
            </motion.fragment>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Audit
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash audit will audit smart contracts (tokens, bridges,
                staking, all types of dapps) and blockchains of our
                partners/customers on all networks.
                <br />
                Each partner/customer who would like to be in our ecosystem will
                have to go through our security audit to make sure there is no
                malicious code.
              </Typography>

              <a
                href="https://flash-audit.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                flash-audit.com
              </a>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                sx={{
                  maxWidth: "200px",
                  display: "block",
                  margin: { lg: "40px auto", xs: "-10px auto" },
                  // marginTop:{lg:"0",xs:"-20px"}
                }}
                src={flashaudit}
              />
            </motion.fragment>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.fragment
                whileHover={{ scale: 1.1 , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',zIndex:'2' }}
                
                className={`${classes.flashBoxes} ${'custom'}`}
              
              >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { lg: "30px", xs: "16px" },
                  marginBottom: { lg: "0px", xs: "10px" },
                  fontWeight: "800",
                  lineHeight: { lg: "61px", xs: "21.86px" },
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Launchpad
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash pad is our launchpad for upcoming IDOs and allows crypto
                projects to create their tokens (BNB Chain, Polygon, Eth &
                Cronos) and raise funds in pre-sales or fair launches.
              </Typography>
              

              <a
                href="https://flash-launch.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FBBF04",
                  fontSize: "20px",
                }}
              >
                flash-launch.com
              </a>
              <Box
                className={classes.flashBoxesImage}
                sx={{
                  marginTop: { lg: "100px", xs: "17px" },
                }}
                component="img"
                src={flashlaunchpad}
              />
            </motion.fragment>
          </Grid>
        </Grid>
        <Grid
          container
          fixed
          sx={{
            // marginTop: { lg: "0px", xs: "-10px" },
            display: "flex",
            justifyContent: { lg: "center", xs: "center" },
            maxWidth: { lg: "1100px", xs: "100%" },
            color: "white",
            margin: { lg: "75px auto 0px auto", xs: "48px  0px 0px 0px" },
            paddingBottom: { lg: "100px", xs: "48px" },
            position: "relative",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              textAlign: "center",
              marginTop: "-50px",
              marginLeft: "-20px",
            }}
          >
            <img src={flashappOveralIcon} />
          </Box> */}
          <Grid
            item
            xs={5.5}
            sm={5.5}
            md={2.95}
            sx={{
              // backgroundColor:"red",
              display: "flex",
              // margin: "0px 2px !important",
              alignItems: "center",
              // flexDirection: "column",
              // justifyContent: "center",
              // backgroundImage: `url(${blockhainsecuredBox})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "95%",
              // padding: { xs: "20px" },
              // minHeight: { lg: "320px", sm: "450px", xs: "230px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                transform: "scale(0.96)",
                backgroundImage: `url(${columnBackground})`,
                // padding: { xs: "20px" },
                

                margin: "-5px 2px 0px 2px !important",
                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
                width: "333px",
                position: "relative"
                // minHeight: "380px",
                // minHeight: { lg: "330px", sm: "450px", xs: "230px" },
                // textAlign: "center",
              }}
            >
              <Box
                className={classes.flashBoxesImage1}
                component="img"
                src={blockhainsecured}
              />
              <h1 style={{
                  position:"absolute", 
                  bottom:"10px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: 400,
                }}
                  className="EcosystemItemA"
                >
                Secured blockchain
              </h1>
              {/* <Box
                sx={{ display: { lg: "flex", xs: "none" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Box
                sx={{ display: { lg: "none", xs: "flex" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line4}
              /> */}
              {/* <Typography className={classes.usps} component="h3">
                Secured blockchain
              </Typography> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={5.5}
            sm={5.5}
            md={2.95}
            sx={{
              display: "flex",
              // margin: "0px 2px !important",
              alignItems: "center",
              // flexDirection: "column",
              // justifyContent: "center",
              // backgroundImage: `url(${singletransactionBox})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "95%",
              // padding: { xs: "20px" },
              // minHeight: { lg: "320px", sm: "450px", xs: "230px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                transform: "scale(0.96)",
                backgroundImage: `url(${columnBackground})`,
                // padding: { xs: "20px" },
                // padding: { xs: "17.5px" },

                margin: "-5px 2px 0px 2px !important",
                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
                width: "333px",
                position: "relative"
                // minHeight: "380px",
                // minHeight: { lg: "330px", sm: "450px", xs: "230px" },
                // textAlign: "center",
              }}
            >
              <Box
                className={classes.flashBoxesImage1}
                component="img"
                src={singletransaction}
              />
              <h1 style={{
                  position:"absolute", 
                  bottom:"10px",
                  color: "white",
                  fontWeight: 400,
                  textAlign: "center"
                }}
                  className="EcosystemItemA"
                >
                Single transaction
              </h1>

              {/* <Box
                sx={{ display: { lg: "flex", xs: "none" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Box
                sx={{ display: { lg: "none", xs: "flex" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line4}
              />
              <Typography className={classes.usps} component="h3">
                Single transaction
              </Typography> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={5.5}
            sm={5.5}
            md={2.95}
            sx={{
              display: "flex",
              // margin: "0px 2px !important",
              alignItems: "center",
              // flexDirection: "column",
              // justifyContent: "center",
              // backgroundImage: `url(${tokenDeflationaryBox})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "95%",
              // padding: { xs: "20px" },
              // minHeight: { lg: "320px", sm: "450px", xs: "230px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                transform: "scale(0.96)",
                backgroundImage: `url(${columnBackground})`,
                // padding: { xs: "17.5px" },

                margin: "-5px 2px 0px 2px !important",
                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
                width: { lg: "333px", xs: "333px" },
                position: "relative"
                // minHeight: "380px",
                // minHeight: { lg: "330px", sm: "450px", xs: "auto" },
                // textAlign: "center",
              }}
            >
              <Box
                className={classes.flashBoxesImage1}
                component="img"
                src={tokenDeflationary}
              />
              <h1 style={{
                  position:"absolute", 
                  bottom:"10px",
                  color: "white",
                  fontWeight: 400,
                  textAlign: "center"
                }}
                  className="EcosystemItemA"
                >
                Deflationary token
              </h1>

              {/* <Box
                sx={{ display: { lg: "flex", xs: "none" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Box
                sx={{ display: { lg: "none", xs: "flex" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line4}
              />
              <Typography className={classes.usps} component="h3">
                Deflationary token
              </Typography> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={5.5}
            sm={5.5}
            md={2.95}
            sx={{
              display: "flex",
              // margin: "0px 2px !important",
              alignItems: "center",
              // flexDirection: "column",
              // justifyContent: "center",
              // backgroundImage: `url(${ReplaceBankAccountBox})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "95%",
              // padding: { xs: "20px" },
              // minHeight: { lg: "320px", sm: "450px", xs: "230px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                transform: "scale(0.96)",
                backgroundImage: `url(${columnBackground})`,
                // padding: { xs: "17.5px" },
                margin: "-5px 2px 0px 2px !important",
                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
                width: { lg: "333px", xs: "333px" },
                position: "relative"
                // minHeight: "380px",
                // minHeight: { lg: "330px", sm: "450px", xs: "auto" },
                // textAlign: "center",
              }}
            >
              <Box
                className={classes.flashBoxesImage1}
                component="img"
                src={ReplaceBankAccount}
              />
              <h1 style={{
                  position:"absolute", 
                  bottom:"10px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: 400,
                }}
                  className="EcosystemItemA"
                >
                Replace a Bank Account
              </h1>
{/* 
              <Box
                sx={{ display: { lg: "flex", xs: "none" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Box
                sx={{ display: { lg: "none", xs: "flex" } }}
                className={classes.flashBoxesLine}
                component="img"
                src={line4}
              />
              <Typography className={classes.usps} component="h3">
                Replace a Bank Account
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashEcosystem;
