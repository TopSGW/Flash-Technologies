import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import linedot from "../../../../assests/Images/Linedot.png";

import { useStyles } from "../../../../Styles";
import fourimg from "../../../../assests/Images/fourimg.png";
import one from "../../../../assests/Images/onetag.png";
import two from "../../../../assests/Images/twotag.png";

import three from "../../../../assests/Images/threetag.png";
import CircleImage from "../../../../assests/Images/cir.png";
import busd from "../../../../assests/Images/bitcoin.png";
import busd1 from "../../../../assests/Images/binance-coin.png";
import busd2 from "../../../../assests/Images/busd.png";
import busd3 from "../../../../assests/Images/elipse.png";
import { motion } from "framer-motion";
import AppButton from "../../../../components/AppButton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery'; // import MobileDrawer from "../MobileDrawer";

const InvestFuture = () => {
  const InvestSize = useMediaQuery('(max-width : 440px)');
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const classes = useStyles();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();

  useEffect(() => {
    console.log("inview", inView);
    console.log("inview2", inView2);
    if (inView) {
      animation.start({
        top: "-12%",
        transition: { type: "spring", duration: 2 },
      });
      animation2.start({
        right: "49%",
        transition: { type: "spring", duration: 2 },
      });
      animation3.start({
        left: "49%",
        transition: { type: "spring", duration: 2 },
      });
      animation4.start({
        top: "85%",
        transition: { type: "spring", duration: 2 },
      });
    }

    if (inView2) {
      animation5.start({
        top: "-12%",
        transition: { type: "spring", duration: 2 },
      });
      animation6.start({
        top: "36%",
        left: "-12%",
        transition: { type: "spring", duration: 2 },
      });
      animation7.start({
        top: "36%",
        left: "84%",
        transition: { type: "spring", duration: 2 },
      });
      animation8.start({
        top: "85%",
        transition: { type: "spring", duration: 2 },
      });
    }

    if (!inView2) {
      animation5.start({
        x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
      });
      animation6.start({
        x: "37%",
        position: "absolute",
        left: "37%",
        top: "36%",
      });
      animation7.start({
        x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
      });
      animation8.start({
        x: "37%",
        position: "absolute",
        left: "37%",
        top: "36%",
      });
    }
    if (!inView) {
      animation.start({
        x: "37%",
        position: "absolute",
        width: "100%",
        top: "36%",
      });
      animation2.start({
        x: "37%",
        position: "absolute",
        width: "100%",
        top: "36%",
        right: "0%",
      });
      animation3.start({
        x: "37%",
        position: "absolute",
        width: "100%",
        top: "36%",
        left: "0%",
      });
      animation4.start({
        x: "37%",
        position: "absolute",
        width: "100%",
        top: "36%",
      });
    }

    // if(!inView){
    //   animation2.start(
    //     {
    //       x: '37%',
    //       position: "absolute",
    //       width:'100%',
    //       top:'36%'
    //     }
    //   )
    // }
  }, [inView, inView2]);

  return (
    <>
      <Grid
        container
        sx={{
          // height: "100vh",
          display: "flex",
          color: "white",
          justifyContent: "center",
          transform: { lg: "scale(0.8)", xs: "scale(0.8)" },
        }}
      >
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: { lg: "56px", xs: "-20px" },
              marginLeft: { lg: "36px", xs: "0px" },
            }}
          >
            <Box
              ref={ref2}
              sx={{
                display: { lg: "none", xs: "flex" },
                mb: "60px",
              }}
            >
              {/* <img src={fourimg} /> */}
              <div className="main-con">
                <img src={CircleImage}  style={{width:`${InvestSize ? '100%' : ''}`}}/>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
                  }}
                  animate={animation5}
                >
                  <img src={busd} className="First" style={{width:`${InvestSize ? '90px' : ''}`}}/>
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
                  }}
                  animate={animation6}
                >
                  <img src={busd1} className="First" style={{width:`${InvestSize ? '90px' : ''}`}}/>
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
                  }}
                  animate={animation7}
                >
                  <img src={busd2} className="Third" style={{width:`${InvestSize ? '90px' : ''}`}}/>
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    left: "37%",
                    top: "36%",
                  }}
                  animate={animation8}
                >
                  <img src={busd3} className="Fourth" style={{width:`${InvestSize ? '90px' : ''}`}}/>
                </motion.div>
              </div>
            </Box>
            <Box
              ref={ref}
              sx={{
                display: { lg: "flex", xs: "none" },
              }}
            >
              {/* <img src={fourimg} /> */}
              <div className="main-con">
                <img src={CircleImage}/>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    width: "100%",
                    top: "36%",
                  }}
                  animate={animation}
                >
                  <img src={busd} className="First"/>
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    width: "100%",
                    top: "36%",
                  }}
                  animate={animation2}
                >
                  <img src={busd1} className="First" />
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    width: "100%",
                    top: "36%",
                  }}
                  animate={animation3}
                >
                  <img src={busd2} className="Third" />
                </motion.div>

                <motion.div
                  initial={{
                    x: "37%",
                    position: "absolute",
                    width: "100%",
                    top: "36%",
                  }}
                  animate={animation4}
                >
                  <img src={busd3} className="Fourth" />
                </motion.div>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt="70px"
            sx={{ margin: { lg: "0px 0px 0px 0px", xs: " 0px 0px 50px 0px" } }}
          >
            <Box>
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "150% !important",
                  letterSpacing: "0.1em",
                  color: "#FBBF04",
                }}
              >
                Staking
              </Typography>
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: { lg: "50px !important", xs: "26px" },
                  fontWeight: "800 !important",
                  lineHeight: "65px !important",
                  color: "#FFF",
                }}
              >
                Invest in your Future
              </Typography>
              <Typography
                sx={{
                  mt: "22px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "400 !important",
                  lineHeight: "21.86px !important",
                  color: "#84898F",
                }}
              >
                Clients can stake Flash or our approved partner's tokens for a
                certain period of time in order to earn rewards and bonuses
              </Typography>
            </Box>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* <Box sx={{ marginLeft: "15px", position: "relative" }}>
                <img src={linedot} />
              </Box> */}

              <Box
                sx={{
                  padding: { lg: "0px 90px 0px 0px", xs: "0px 0px 0px 0px" },
                  // mt
                //  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  mb="40px"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={one} />
                  <Box p="0 20px 0px 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Stake
                    </Typography>
                    <Typography
                      sx={{
                        mt: "5px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                      }}
                    >
                      Stake FLASH and receive rewards.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  // mb="25px"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={two} />
                  <Box p="0 20px 0px 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Complete Staking Term
                    </Typography>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                        maxWidth: { lg: "70%", xs: "100%" },
                        marginBottom: "20px",
                      }}
                    >
                      Users can choose the staking terms and hold their stake
                      for s period of time to earn higher yield bonus returns.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={three} />
                  <Box p="0 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Pay via Flash and partner tokens
                    </Typography>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                        maxWidth: { lg: "70%", xs: "100%" },
                      }}
                    >
                      After every successful stake, users are rewarded with
                      Flash token as a farming bonus and partners tokens.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InvestFuture;
