import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  InputLabel
} from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import {useEffect, useState} from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/flash-logosvg.svg"

// import Flag from "../../assests/Logo/Flag.svg";
import AmericanFlag from "../../../../assests/Images/flag.png";

import FranceFlag from "../../../../assests/Images/franceFlag.png"

import arrowDownIcon from "../../../../assests/Images/arrow-chevron.png";

import AppButton from "../../../../components/AppButton";
import Menubar from "../menu";
import NativeSelect from '@mui/material/NativeSelect';

import { useSelector, useDispatch } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
import { Translatechangemode } from "../../../../Slice/translateSlice";
import ReactFlagsSelect from "react-flags-select";
// import MobileDrawer from "../MobileDrawer";

import '../header/style.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const FTheader = () => {
  const classes = useStyles();
  const Navs = [
    {
      name: "Our Services",
      color: "#FBBF04",
      link: "services",
    },
    {
      name: "Roadmap",
      color: "#85898F",
      link: "roadmap",
    },
    {
      name: "Tokenomics",
      color: "#85898F",
      link: "tokenomics",
    },
    {
      name: "Whitepaper",
      color: "#85898F",
      link: "whitepaper",
    },
    {
      name: "Audit",
      color: "#85898F",
      link: "tokenomics",
    },
    {
      name: "NFT",
      color: "#85898F",
      link: "nft",
    },
    {
      name: "Partners",
      color: "#85898F",
      link: "partners",
    },
    {
      name: "Team",
      color: "#85898F",
      link: "team",
    },
    // {
    //   name: "Medias",
    //   color: "#85898F",
    //   link: "Medias",
    // },
    {
      name: "FAQ",
      color: "#85898F",
      link: "FAQ",
    },
    {
      name: "Contact",
      color: "#85898F",
      link: "Contact",
    },
  ];
  const languageState = useSelector((state) => state.translate.mode)
  const [menuStatus, SetmenuStatus] = useState(false);
  const dispatch = useDispatch()
  const Lang = useSelector(Languagemodel)
  const [selected, setSelected] = useState("GB");
  const handleSelected = (code) =>{
    if(code == "GB"){
      dispatch(Translatechangemode('en'))
    }
    else if(code == "FR"){
      dispatch(Translatechangemode('fr'))
    }
    else if(code == "DE"){
      dispatch(Translatechangemode('de'))
    }
    else if(code == "ES"){
      dispatch(Translatechangemode('es'))
    }
    else if(code == "SA"){
      dispatch(Translatechangemode('ar'))
    }
    else if(code == "PT"){
      dispatch(Translatechangemode('pt'))
    }
    setSelected(code)
    console.log(code)
  }
  useEffect(()=>{
    if(languageState == 'en'){
      setSelected("GB")
      console.log("GBGBGBGB")
    }
    else if (languageState == 'fr'){
      setSelected("FR")
    }
    else if(languageState == 'es'){
      setSelected("ES")
    }
    else if(languageState == 'pt'){
      setSelected("PT")
    }
    else if(languageState == 'ar'){
      setSelected("SA")
    }
    else if(languageState == 'de'){
      setSelected("DE")
    }
  })
  return (
    <>
      <Grid
        container
        sx={

          {
            mb: { lg: "0px", xs: "-10px" },
            // transform: 'scale(0.8)'
            position:'fixed',
            zIndex: 99999999999,
            backgroundColor: 'black',
            top: 0,
            boxShadow: "0 4px 8px 0 rgb(108 98 98 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
          }
        }
      >
        <Grid
          container
          sx={{
            backgroundColor: { lg: "none", xs: "black" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        >
          <Menubar status={menuStatus} SetmenuStatus={SetmenuStatus}/>
          <Grid
            item
            sm={12}
            md={12}
            sx={{
              padding: "10px 10px",
              display: { lg: "none", xs: "flex" },
              flexDirecion: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <IconButton onClick={()=>{SetmenuStatus(!menuStatus)}}>
                {!menuStatus ? <MenuIcon fontSize="large" sx={{ color: "white" }} /> :
                  <CloseIcon fontSize="large" sx={{ color: "white" }} />
                }
              </IconButton>
            </Box>
            <Box
              sx={{
                marginRight: { lg: "0px", xs: "30px" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={FlashLogo} height="35.64px" width="164px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexdirection: "row",
                width: "103px",
                height: "40px"
              }}
            >
              <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => handleSelected(code)}
                   countries={["GB", "FR", "DE", "ES", "PT", "SA"]}
                   customLabels={{"GB": "EN","SA": "AR","FR": "FR","DE": "DE","PT": "PT", "ES": "ES"}}
                  />
            </Box>
          </Grid>
        </Grid>
        <Grid
          className="container-box"
          item
          md={12}
          sx={{
           

            mt: { lg: "0px", xs: "0px" },
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
            
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              mb: { lg: "0px", xs: "10px" },
              display: { lg: "flex", xs: "none" },
              justifyContent: "space-between !important",
            }}
          >
            {/* <Grid item xs={4}> */}
            <Box sx={{ display: { lg: "none", xs: "none" } }}>
              <IconButton
              // aria-label="open drawer"
              // edge="end"
              // onClick={handleDrawerOpen}
              // sx={{ ...(open && { display: "none" }), color: "rgb(176, 41, 34)" }}
              >
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                marginRight: { lg: "0px", xs: "50px" },
                display: "flex",

                flexDirection: "row",
                alignItems: "center",
                paddingTop: { lg: "0px", xs: "-10px" },
              }}
            >
              <img src={FlashLogo} />
            </Box>
            {/* </Grid> */}
            <Grid>
              <Box
                sx={{
                  display: { lg: "flex", xs: "none" },
                  flexDirection: "row",
                  margin: "7px 10px",
                }}
              >
                {Navs.map((i) => {
                  return (
                    <Box
                      sx={{ margin: "10px 0px", textTransform: "capitalize" }}
                    >
                      <Typography
                        sx={{
                          color: `${i.color}`,
                          fontFamily: "Manrope !important",
                          fontSize: "12px !important",
                          fontWeight: "400 !important",
                          padding: "5px 10px",
                        }}
                      >
                        <div
                          className="menu-link"
                          sx={{
                            color: `${i.color}`,
                            fontFamily: "Manrope !important",
                            fontSize: "12px !important",
                            fontWeight: "400 !important",
                            lineHeight: "16.4px !important",
                            cursor: "pointer"
                          }}
                          href={i.link}
                          onClick={()=>setTimeout(()=>{
                            if(i.name ==="Medias"){
                              document.getElementById(i.link).scrollIntoView();
                              window.scrollBy(0,-100);}
                            else if(i.name==="Whitepaper"){
                              document.getElementById(i.link).scrollIntoView();
                              window.scrollBy(0,-100);}
                            else{
                                document.getElementById(i.link).scrollIntoView()
                                window.scrollBy(0,-55);
                            }
                          },20)}
                        >
                          {Lang[i.name]}
                        </div>
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              sx={{
                paddingTop: { lg: "8px", xs: "6px" },
                width: "326px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0",
                  justifyContent:"end"
                }}
              >
              {/* <div id="LanguageLocationA" style={{
                display: "flex",
                flexDirection: 'row'
              }}>
                <Box
                    sx={{
                      display: { lg: "flex", xs: "none" },
                    }}
                  >
                    <img
                      src={lang == "US" ? AmericanFlag : FranceFlag}
                      style={{
                        width: "27px",
                        height: "27px",
                        marginRight: "10px",
                      }}
                    />
                  </Box>

                  <FormControl
                    sx={{
                      // m: 1,
                      // minWidth: 70,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "74px"
                    }}
                  >
                    <NativeSelect
                      sx={{
                            color: '#ffffff', 
                            outline: 0
                      }}
                      labelId="lang"
                      id="lang"
                      value={lang}
                      label="Age"
                      onChange={handleChange}
                      className="LanguageSelector"
                      // style={{color: '#ffffff', outline: 0}}
                    >
                      <option value={'US'} style={{color:"black", padding: "14px"}}>USaa</option>
                      <option value={'FR'} style={{color:"black", padding: "14px"}}>FR</option>
                    </NativeSelect>
                  </FormControl>
              </div> */}
              <div style={{marginRight: "20px", marginTop: "3px"}}>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => handleSelected(code)}
                   countries={["GB", "FR", "DE", "ES", "PT", "SA"]}
                   customLabels={{"GB": "EN","SA": "AR","FR": "FR","DE": "DE","PT": "PT", "ES": "ES"}}
                  />
              </div>
                <Box sx={{ display: { lg: "flex", xs: "none" }, width:"150px", marginTop: "2px"}}>
                  <a  target='__blank' 
                  id="headPartnerurl" style={{textDecoration: 'none', fontFamily:'Manrope'}}
                  href={`${languageState == 'fr' ? 'https://tcjpmvkkcyv.typeform.com/to/ILnGtfxh' : 'https://tcjpmvkkcyv.typeform.com/to/De146S9S'}`}>
                  <AppButton
                    textTransform="none"
                    marginLeft="20px"
                    title={Lang["Become a Partner"]}
                    width="250px"
                    backgroundColor="#FBBF04"
                    borderRadius="50px"
                    height="42px"
                  />
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default FTheader;
