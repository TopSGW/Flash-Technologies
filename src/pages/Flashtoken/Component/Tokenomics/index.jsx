import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Typography,
  Grid,
  IconButton,
  CircularProgress
} from "@mui/material";
// import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";
import React,{ useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useStyles } from "../../../../Styles";
// import Flag from "../../assests/Logo/Flag.svg";

import AuditFlashImage from "../../../../assests/Images/audit-icon.png";
import cat from "../../../../assests/Images/cat.png";
import fw  from "../../../../assests/Images/flash-wallet.png";
import led from "../../../../assests/Images/led.png";
import paper from "../../../../assests/Images/paper.png";
import right from "../../../../assests/Images/down-arrow.png";
import left from "../../../../assests/Images/up-arrow.png";

import copy from "../../../../assests/Images/copy.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";

// import MobileDrawer from "../MobileDrawer";
import EN from "../../../../assests/pdf/WhitePaperEN.pdf";
import FR from "../../../../assests/pdf/WhitePaperFR.pdf";


import "./index.css";
// Chart
import { Doughnut } from 'react-chartjs-2';
import {Data, DataMobile, Options, chartLabel, transferChartLabel,  TransferChartData} from './chartData'
import {Chart, ArcElement, Legend} from 'chart.js'
Chart.register(ArcElement, Legend);

const Tokenomics = () => {
  const discount = '0x311e015e2e255dd14eddc4a2107e39649dc81c5d';
  const [copied, setCopied] = useState(false);
  const CircleTrack = useMediaQuery('(min-width : 600px)');
  const ArrowTrack = useMediaQuery('(min-width : 1199px)');
  const TokenomicsMobile = useMediaQuery('(max-width : 420px)');
  const TokenomicsButton = useMediaQuery('(max-width : 600px)');
  const breakpoint899px = useMediaQuery('(min-width: 899px)');
  const classes = useStyles();
  const COLORS = ["#0088FE", "#03C39F", "#FFB827", "#FE8042"];
  const [isTransfer, SetisTransfer] = useState(true);
  const AuditReport = "https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/Flash_AuditReport_InterFi.pdf";
  const next = () => {
    SetisTransfer(!isTransfer);
  };
  const prev = () => {
    SetisTransfer(!isTransfer);
  };

  return (
    <>
      <Grid
        container
        sx={{
          position: "relative",
          color: "white",
          maxWidth: "100%",
          width: { lg: "1400px", xs: "100%" },
          margin: "0 auto",
          padding: { lg: "60px 0", xs: "30px 0 0 0" },
        }}
       className={`${isTransfer ? 'unselectable' : ''}`}>
      {
        isTransfer && <Typography variant="h3" className="soon">{/* Soon*/}</Typography>

      }
      <img 
            className={isTransfer ? `roadmap-image ShiftImage` : 'roadmap-image ShiftImage'}
            style={{
                position: "absolute",
                left: "0px",  
                width: "40px",
                zIndex: 99999,
                bottom: `${ArrowTrack ? '45%' : '33%'}`,
                cursor: 'pointer',
            }}
           src={left} onClick={prev}/>
      <img className={isTransfer ? `roadmap-image ShiftImage` : 'roadmap-image ShiftImage'} 
            style={{
              position: "absolute",
              right: "0px",  
              width: "40px",
              zIndex: 99999,
              bottom: `${ArrowTrack ? '45%' : '33%'}`,
              cursor: 'pointer', 
            }}
            src={right} onClick={next}/>

        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center", position: 'relative' }}
        > 
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Manrope",
                    fontSize: { lg: "50px", xs: "26px" },
                    fontWeight: "700",
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    marginBottom: "20px",
                    transform: { lg: "scale(0.8)", xs: "scale(none)" },
                  }}
                  className={isTransfer ? classes.blurTransferComponent : ''}
                >
                  Tokenomics
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 20px",
            position: "relative"
          }}
          // style={{filter:`${isTransfer && 'blur(10px)'}`}}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
              transform: { lg: "scale(0.8)", xs: "scale(none)" },
            }}
          >
            <Grid
              item
              // xs={12}
              md={6}
              sx={{
                display: { lg: "flex", xs: "flex" }
              }}
            >
              <Box
                sx={{
                  width: {xs:"100%"}
                }}
              // style={{width:"427px"}}
                className={isTransfer ? classes.blurTransferComponent : ''}>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight:'bold',
                    fontSize: { lg: "50px", xs: "18px" },
                    display: 'flex',
                    flexDirection: 'row'
                    // lineHeight: "140%",
                    // paddingRight: "130px",
                  }}
                >
                  {/* {CircleTrack ? 'TOKEN FLASH' : 'Flash Transfer'} */}
                  {/* Tokenomics */}
                  <Typography sx={{ 
                    color: "#FBBF04",
                    fontStyle: 'inherit',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',

                  }}> {isTransfer ? ' Flash 3.0' : ' Flash Token'}</Typography>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { lg: "20px", xs: "12px" },
                    fontWeight: "400",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    // paddingRight: { lg: "130px", xs: "0px" },
                  }}
                >
                { !isTransfer ?   
                  <>Flash token is a governance token tied to the entire Flash Technologies ecosystem. 2% of all revenues (transaction fees) will be reinvested in the token in the form of a monthly Buyback. Flash token is also linked to NFT "Airdrops," where holders will receive 1% of the monthly token volume directly. The token is cross-chain, meaning it can be purchased on multiple networks with the same address. It can also be transferred to other wallets without paying transfer fees.
                  <div style={{width:'100%'}} className="tmpBlock"></div></>: `Flash 3.0 is a cross-chain token that aims to become a means of exchange within the Flash Technologies ecosystem, which includes services such as Flash-transfer.com, Flash Wallet, and more, so that regular users are not exposed to exorbitant transaction fees.
                  One of the primary goals of Flash 3.0 is to provide holders with the ability to trade at a lower cost. Additionally, it will provide various benefits based on the number of tokens held by the user.
                  Flash 3.0 can be purchased on different blockchains with the same address. It can also be transferred from one wallet to another without transfer fees.`
                }
                </Typography>
                <Box>
                  <Grid item md={12} >
                    <Typography
                      sx={{
                        fontFamily: "Manrope",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: { lg: "18px", xs: "12px" },
                        lineHeight: "160%",
                        display: "block",
                        margin: "30px 0",
                      }}
                    >
                      Contract address:{" "}
                      <Typography
                        sx={{
                          color: "#FBBF04",
                          display: "inline",
                          fontSize: { lg: "18px", xs: "12px" },
                          position: "relative"
                        }}
                      >
                        {/* {discount} */}
                        {/* <img src={copy}/> */}
                          {!isTransfer ? discount : '0x4362B603AE4b198ddE3C9EeF641B79C6f801B895'}
                          {
                            <>
                              <div 
                              className="discount-copied" 
                              style={{
 //                              display: `${copied ? 'block' : 'none'}`,
                                opacity: '0',
                                animationName: `${copied  ? 'clipbooard' : ''}`,
                                animationDuration: '2s',
                                position:"absolute",
                                bottom: '18px',
                                right: '0px'
                                }} 
                                >
                                Copied!
                              </div>
                              <CopyToClipboard text={!isTransfer ? discount : '0x4362B603AE4b198ddE3C9EeF641B79C6f801B895'} onCopy={() => setCopied(!copied)}>
                                <img src={copy} style={{
                                  cursor:'pointer',
                                  marginLeft: "10px"
                                  }}/>
                              </CopyToClipboard>
                            </>
                          }
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Grid
                      item
                      md={6}
                      sx={{
                        marginBottom: "30px !important",
                        flexBasis: "max-content !important",
                        paddingRight: {lg:"120px !important",xs:"0px"},
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "20px",
                          width:"200px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Token name :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: { lg: "18px", xs: "14px" },
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          {!isTransfer ? 'Flash Token' : 'Flash 3.0'}  {/* mobile */} 
                        </Typography>
                      </Box>

                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Total Supply :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: { lg: "18px", xs: "14px" },
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          {isTransfer ? '100.000.000' : '1.000.000.000'}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{
                        width: "400px !important ",
                        maxWidth: "400px !important",
                        flexBasis: "auto !important",
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Symbol :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: { lg: "18px", xs: "14px" },
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          Flash
                        </Typography>
                      </Box>

                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: { lg: "14px", xs: "12px" },
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Available on :
                        </Typography>
                        <Typography
                          component="h4"
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: " 160%",
                          }}
                        >
                          BNB Chain &nbsp;  {isTransfer ? '- Ethereum - Polygon - Cronos' : ''}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item md={12} style={{ marginBottom:`${TokenomicsButton ? "30px" : ""}` }}>
                  <a href="https://flash-dex.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}
                  /*  className={!isTransfer ? '' : 'disabled'} */ >
                    <IconButton
                      className="iconbutton"
                      sx={{
                        height: {lg:"62px" ,xs:"37.3px"},
                        fontSize: {lg:"20px",xs:"14px"},
                        margin: "0px 5px",
                        fontWeight: 600,
                        lineHeight: "150%",
                        borderRadius: "69px",
                        color: "#0F0F0E",
                        padding: {lg:"15px 55px", xs:"15px 25px"},
                        // width: "246px",
                        backgroundColor: "#FBBF04",
                      }}
                      /*</a>disabled={isTransfer}*/
                    >
                      <img src={flashbtn} className="btn_icon"/>
                      {" "}Buy Flash
                    </IconButton>
                      </a>
                    <a
                    href={isTransfer ? 'https://skynet.certik.com/projects/flash-technologies'
                    : AuditReport}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      rel="noreferrer"
                    >
                      <IconButton
                        className="iconbutton"
                        sx={{
                          height: "62px",
                          fontSize: "20px",
                          margin: "0px 5px",
                          fontWeight: 600,
                          lineHeight: "150%",
                          borderRadius: "69px",
                          color: "#0F0F0E",
                          padding: "15px 55px",
                          display: {lg: "inline-flex",xs: "none"},
                          // width: "246px",
                          backgroundColor: "#FBBF04",
                        }}
                      >
                        <img src={AuditFlashImage} />
                        Audit Flash
                      </IconButton>
                    </a>

                    {/* <Button className="audit-flash-button"><img src={AuditFlashCTA} /></Button> */}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              // xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center",
              }}
            >
              <Grid xs={6} md={8}>
                <Box 
                  // style={{marginLeft:70 + 'px'}}
                  sx={{ 
                  marginLeft: {lg:70 + 'px',xs:20 + 'px'},
                  width: { lg: "100%", xs: "80%" },
                  marginTop: "10px",
                  position: "relative"
                  }}    
                 className="CircleManager">
                <img className="roadmap-image arrowImageReponsive" 
                    style={{
                      position: "absolute",
                      right: "102%",  
                      width: "40px",
                      zIndex: 99999,
                      cursor: 'pointer', 
                    }}
                  src={left} onClick={prev}
                  />
                  <img className="roadmap-image arrowImageReponsive" 
                    style={{
                      position: "absolute",
                      left: "216%",  
                      width: "40px",
                      zIndex: 99999,
                      cursor: 'pointer', 
                    }}
                  src={right} onClick={next}
                  />                  
                  <Doughnut className={isTransfer ? `${classes.blurTransferComponent} doughnut-filter` : 'doughnut-filter'} 
                        data={TokenomicsMobile? DataMobile : Data}  
                        options={Options} 
                        plugins={[chartLabel]}
                        style={{display:`${!isTransfer ? 'block' : 'none'}`}}  
                  /> 
                  <Doughnut className={isTransfer ? `${classes.blurTransferComponent} doughnut-filter` : 'doughnut-filter'} 
                      data={TransferChartData} options={Options} 
                      plugins={[transferChartLabel]}
                      style={{display:`${!isTransfer ? 'none' : 'block'}`}}/>
                </Box>
              </Grid>
              <Grid xs={6} md={4} className={isTransfer ? classes.blurTransferComponent : ''}>
                {/* <Grid xs={12} md={12} mt={3}>
                  <div justifyContent='center'style={{ display: 'flex'}}>
                    <CircularProgress
                      sx={{
                        '--CircularProgress-size': '80px',
                        "--CircularProgress-progress-thickness": "8px"
                        }}
                        determinate id="marketing" value={100} color="#5E95FF" />
                    <Typography 
                      sx={{fontSize: { lg: "26px", xs: "13px" }}}
                      style={{ alignSelf: "center",fontFamily: "Manrope"}} variant="h6" ml={1}>5% Marketing</Typography>
                  </div>
                </Grid> */}
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress 
                    size={CircleTrack ? '30px' : '20px'} 
                    thickness={CircleTrack ? '8' : '8'}
                    variant="determinate" id="marketing" value={100} style={{'color': '#5E95FF'}} />
                    <Typography 
                      sx={{fontSize: { lg: "20px", xs: "13px" }}}
                      style={{ alignSelf: "center" ,fontFamily: "Manrope"}} variant="h6" ml={1}>
                        {!isTransfer ? '5' : '1'}% Marketing</Typography>
                  </div>
                </Grid>
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress 
                    size={CircleTrack ? '30px' : '20px'} 
                    thickness={CircleTrack ? '8' : '8'}
                    variant="determinate" id="liquidity" value={100} style={{'color': '#039D81'}} />
                    <Typography 
                      sx={{fontSize: { lg: "20px", xs: "13px" }}}
                      style={{ alignSelf: "center" ,fontFamily: "Manrope"}} variant="h6" ml={1}>1% Liquidity</Typography>
                  </div>
                </Grid>
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress 
                    size={CircleTrack ? '30px' : '20px'} 
                    thickness={CircleTrack ? '8' : '8'}
                    variant="determinate" id="burn" value={100} style={{'color': '#FF8D08'}} />
                    <Typography 
                      sx={{fontSize: { lg: "20px", xs: "13px" }}}
                      style={{ alignSelf: "center",fontFamily: "Manrope"}} variant="h6" ml={1}>1% Burn</Typography>
                  </div>
                </Grid>
                { !isTransfer &&
                    <Grid xs={12} md={12} mt={3}>
                      <div style={{ display: 'flex'}}>
                        <CircularProgress 
                        size={CircleTrack ? '30px' : '20px'} 
                        thickness={CircleTrack ? '8' : '8'} 
                        variant="determinate" id="reward" value={100} style={{'color': '#FF0808'}} />
                        <Typography 
                          sx={{fontSize: { lg: "18px", xs: "13px" }}}
                          style={{ alignSelf: "center",fontFamily: "Manrope"}} variant="h6" ml={1}>3% Rewards</Typography>
                      </div>
                    </Grid> 
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            // item
            // xs={12}
            // md={8}
            sx={{
              mb: { lg: "86px", xs: "60px" },
              display: { lg: "none", xs: "flex" },
              padding: { lg: "0px 200px", xs: "0px 10px" },
              alignItems: "center",
              justifyContent: "center",
              // justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Grid item md={2.8} xs={5.4} m={1}>
              <a href={EN} target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Whitepaper EN
                  <img src={paper} style={{ marginLeft: "30px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <a
                href={isTransfer ? 'https://skynet.certik.com/projects/flash-technologies'
                  : AuditReport}
                target="_blank"
                style={{ textDecoration: "none" }}
                className="Audit"
              >
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Audit Flash
                  <img src={AuditFlashImage} style={{ marginLeft: "20px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <a href={FR} target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Whitepaper FR
                  <img src={paper} style={{ marginLeft: "30px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <IconButton
                className="iconbutton"
                sx={{
                  height: "62px",
                  fontSize: { lg: "16px", xs: "12px" },
                  margin: "5px 2px",
                  fontWeight: 500,
                  lineHeight: { lg: "24", xs: "18px" },
                  borderRadius: "10px",
                  color: "#0F0F0E",
                  padding: "20px 20px",
                  width: "100%",
                  backgroundColor: "#FBBF04",
                }}
              >
                Using Flash Wallet
                <img src={fw} style={{ marginLeft: "30px" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tokenomics;
