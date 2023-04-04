import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Button,
  Accordion,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useStyles } from "../../../../Styles";
import { styled } from "@mui/material/styles";
// import Flag from "../../assests/Logo/Flag.svg";
import AppButton from "../../../../components/AppButton";
import Icon from "@mui/material/Icon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import UsingFW from "../../../../assests/Images/UsingFlashWallet.png";
import WhitepaperCTA from "../../../../assests/Images/Whitepaper-fr (2).png";
import PitchDeckCTA from "../../../../assests/Images/Whitepaper-en2.png";
import EN from "../../../../assests/pdf/WhitePaperEN.pdf";
import FR from "../../../../assests/pdf/WhitePaperFR.pdf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';
import flashWalletImg from '../../../../assests/Images/flash-wallet.png'
import "./index.css";

const Accordion2 = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

// const Accordion = styled((props) => (

//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({

//   // border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// import MobileDrawer from "../MobileDrawer";

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
          margin: {lg:"0 auto",xs:"-2px auto 0 auto"},
          padding: {lg:"58px 20px 0 20px",xs:"40px 30px 0 30px"},
        }}
        id="FAQ"
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
            }}
          >
            <Typography
              component="h3"
              sx={{
                mb: "40px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: { lg: "65px !important", xs: "36.4px" },
                color: "#ffff",
              }}
            >
              FAQ
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sx={{ display: { lg: "none", xs: "flex" } }}>
          <Box className='accordion-box-parent' sx={{ transform: { lg: "scale(0.8)", xs: "scale:none" } }}>
            <Accordion
              
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="accord-heading"
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  What is Flash technologies?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  Flash Technologies is the name that represents all Flash
                  projects.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion-box"
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="accord-heading"
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  How can I buy Flash?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  You can buy Flash tokens directly by credit card on <a href="https://flash-dex.com/" target="_blank" rel="noreferrer"
                    style={{color:'#FBBF04'}}>flash-dex.com</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion-box"
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="accord-heading"
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  What is Flash Transfer?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  Flash Transfer is the main project of Flash Technologies. We
                  will be able to bank people who do not have a bank account or
                  who wish to free themselves from traditional banks. We can
                  exchange cash for crypto via our various partners. Users of
                  this service will be able to make transfers worldwide.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion-box"
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="accord-heading"
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  What are the advantages of buying Flash ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  Your Flash token increases in value according to the evolution
                  of the course. When Flash Technologies projects evolve, it has
                  a positive impact on the price.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion-box"
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel5d-content"
                id="panel5d-header"
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  On which site will the token be listed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  The token will be listed on cex and dex.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion-box"
              sx={{ backgroundColor: "black", m: "15px 0px" }}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                sx={{
                  height: "35px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="accord-heading"
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  Why transaction fees?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: { lg: "0px !important", xs: "12px" },
                    fontWeight: "800 !important",
                    lineHeight: { lg: "0px !important", xs: "15px" },
                  }}
                >
                  Transaction fees support the project.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sx={{ display: { lg: "flex", xs: "none" } }}>
          <Box sx={{ transform: { lg: "scale(0.8)", xs: "scale:none" } }}>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>What is Flash technologies?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                  Flash Technologies is the name that represents all Flash
                  projects.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>How can I buy Flash?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                  You can buy our tokens directly on <a href="https://flash-dex.com/" target="_blank" rel="noreferrer"
                    style={{color:'#FBBF04', textDecoration:'none'}}>flash-dex.com</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>What is Flash Transfer?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                  Flash Transfer is the main project of Flash Technologies. We
                  will be able to bank people who do not have a bank account or
                  who wish to free themselves from traditional banks. We can
                  exchange cash for crypto via our various partners. Users of
                  this service will be able to make transfers worldwide.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>
                What are the advantages of buying Flash ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                  Your Flash increases in value according to the evolution
                  of the course. When Flash Technologies projects evolve, it has
                  a positive impact on the price.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>On which site will the token be listed?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                  The token will be listed on cex and dex.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            className="accordion-box"
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                className="accord-heading"
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography>Why transaction fees?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accord-details">
                <Typography>
                Transaction fees support the project.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Box
          sx={{
            display: { lg: "flex",  },
            marginTop: "0px",
            paddingBottom: "50px",
            width: " 100%",
            justifyContent: "space-between",
            transform: "scale(0.8)",
          }}
          id="whitepaper"
        >
          <Box sx={{
            display: "flex",
            justifyContent: 'center'
          }}>
            {" "}
            <Button className="mobile_button">
              <a href={EN} target="__blank"  className="fq_btn">
                {/* <img src={PitchDeckCTA} /> */}
                <p>Whitepaper EN</p>  
                  <DescriptionIcon sx={{
                  fontSize: 35,
                  marginLeft: "12px"
                  }}/>                
              </a>
            </Button>{" "}
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: 'center'
          }}>
            {" "}
            <Button className="mobile_button">
            <a  id="youtube_url" target="__blank" className="fq_btn">
              <p>Presentation</p>  
              <YouTubeIcon sx={{
                fontSize: 40,
                marginLeft: "12px"
              }}/>

              {/* <img src={WhitepaperCTA} /> */}
              </a>
            </Button>{" "}
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: 'center'
          }}>
            {" "}
            <Button className="mobile_button">
              <div className="fq_btn">
                <p>Using Flash Wallet</p>
                <img src={flashWalletImg} style={{ width:'40px', marginLeft: "12px"}}/>
              </div>
            </Button>{""}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Faq;
