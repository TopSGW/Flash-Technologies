import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React ,{ useEffect, useState } from "react";
import { useStyles } from "../../../../Styles";

import list1 from "../../../../assests/Images/list1.png";
import list2 from "../../../../assests/Images/list2.png";
import list3 from "../../../../assests/Images/list3.png";
import list4 from "../../../../assests/Images/list4.png";
import map1 from "../../../../assests/Images/1T_t.png";
import map2 from "../../../../assests/Images/1T_t.png";
import map3 from "../../../../assests/Images/1T_t.png";
import right from "../../../../assests/Images/down-arrow.png";
import left from "../../../../assests/Images/up-arrow.png";
import hleft from "../../../../assests/Images/hprev.png";
import hright from "../../../../assests/Images/hnext.png";

import Map1 from "./map1";
import Map2 from "./map2";
import Map3 from "./map3";
// import mapV from "../../../../assests/Images/V.png";
import mapV2 from "../../../../assests/Images/V2.png";
import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";

import "./index.css";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const photos = [
  {
    id: 'p1',
    title: '1',
    url: map1,
  },
  {
    id: 'p2',
    title: '2',
    url: map2,
  },
  {
    id: 'p3',
    title: '3',
    url: map3,
  },
];

const Roadmap = () => {
  const classes = useStyles();
  const [listItem, setlistItem]= useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const handleList = (index) =>{
    switch(index){
      case 0: setlistItem(details.slice(0,7));break;
      case 1: setlistItem(details.slice(7,14));break;
      case 2:
        setlistItem(details.slice(14)); break;
    }
    // index === 0 ? setlistItem(details.slice(listIndexs[0])) :  
    //   setlistItem(details.slice(listIndexs[index],listIndexs[index + 1] ));
  }
  const next = () => {
    handleList((currentIndex + 1) % photos.length);    
    setCurrentIndex((currentIndex + 1)  % photos.length);
  };
  const prev = () => {
    handleList((currentIndex - 1 + photos.length) % photos.length);    
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };
  const [hover, setHover] = useState(false);
  useEffect(()=>{
    setlistItem(details.slice(14));
  },[])
  // const setFontColor = details.map((num, index) => {
  //   if (index == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 10 || 11 || 12 || 13) {
  //     return num;
  //     console.log('num);
  //   }
  // });

  const color_dark = "#85898F";
  const color_white = "#FFFFFF"
  const details = [
    {
      num: "1",
      name: " August 2021 ",
      color: color_white,
      des: "Market study and meeting with professionals for the feasibility of the project.",
    },
    {
      num: "2",
      name: " September 2021",
      color: color_white,
      des: "Definition of the project and creation of the whitepaper.",
    },
    {
      num: "3",
      name: "October 2021 ",
      color: color_white,
      des: "Creation of the team of developers. Creation of the Flash Token Website. ",
    },
    {
      num: "4",
      name: "November 2021",
      color: color_white,
      des: "Implementation of the Marketing strategy. Creation of the money transfer platform website. Meeting with influencers for the promotion of Flash Token. Launch of the Flash Token on the Bsc.",
    },
    {
      num: "5",
      name: "December 2021",
      color: color_white,
      des: "Promotion of the Flash Token by influencers. ",
    },
    {
      num: "6",
      name: "January 2022 ",
      color: color_white,
      des: "Launch of the 1st NFT collection. Launch of the Flash Token on the Bsc.",
    },
    {
      num: "7",
      name: " February 2022 ",
      color: color_white,
      des: "Release of the beta version of the money transfer. Coming out of the Nft mint platform Deployment ",
    },
    {
      num: "8",
      name: "2022",
      color: color_white,
      des: "Launch of Flash Technologies website ",
    },
    {
      num: "9",
      name: "2022",
      color: color_white,
      des: "Unveiling of the first Flash Transfer partners",
    },
    {
      num: "10",
      name: "2022",
      color: color_white,
      des: "Launch of Flash Audit ",
    },
    {
      num: "11",
      name: "2022",
      color: color_white,
      des: "Vip Club Launch (only for the 200 Nft)",
    },
    {
      num: "12",
      name: "2022",
      color: color_white,
      des: "Launch of the advertising campaign with influencers + new ambassadors ",
    },
    {
      num: "13",
      name: "2022",
      color: color_white,
      des: "Development of the Audit platform",
    },
    {
      num: "14",
      name: "2022",
      color: color_white,
      des: "Development of the Staking platform",
    },
    {
      num: "15",
      name: "2023",
      color: color_white,
      des: "Beta Launch Flash Transfert",
    },
    {
      num: "16",
      name: "2023",
      color: color_white,
      des: "Flash x Binance",
    },
    {
      num: "17",
      name: "2023",
      color: color_dark,
      des: "Launch Flash Wallet extension & application Android + IOS",
    },
    {
      num: "18",
      name: "2023",
      color: color_white,
      des: "AML compliance",
    },
    {
      num: "19",
      name: "2023",
      color: color_white,
      des: "Flash x Synaps",
    },
    {
      num: "20",
      name: "2023",
      color: color_white,
      des: "Flash x Certik",
    },
    {
      num: "21",
      name: "2023",
      color: color_dark,
      des: "Launch Flash Transfer extension & application Android + IOS",
    },
  ];
  const list = [
    {
      img: list1,
      name: "Binance",
    },
    {
      img: list2,
      name: "Cronos",
    },
    {
      img: list3,
      name: "Ethereum",
    },
    {
      img: list4,
      name: "Polygon",
    },
  ];
  return (
    <>
      <Grid
        container
        sx={{
          color: "white",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            paddingTop: {lg:"55px",xs:"0px"},
          }}
        >
          <Box
            sx={{
              right: "10%",
              left: "unset",
              bottom: {lg:"-12px",xs:"-50px"},
              position: "absolute",
              maxWidth:{lg:'117px',xs:'86px'}
            }}
          >
            <img  className="rotating roadmap-overlay" src={flashappOveralIcon} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mt="50px"
          sx={{
            // position:"absolute",

            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
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
                letterSpacing: "1px",
                fontWeight: "500 !important",
                lineHeight: "24px !important",
                color: "#FBBF04",
              }}
            >
              ROADMAP
            </Typography>

            <Typography
              align="center"
              sx={{
                padding: { lg: "0px 0px", xs: "0px 50px" },
                mt: "8px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px !important" },
                fontWeight: "800 !important",
                lineHeight: { lg: "130% !important", xs: "33px" },
                color: "#ffff",
              }}
            >
              Flash Technologies Roadmap
            </Typography>
            <Box
              sx={{
                mb: "27px",
                display: { lg: "none", xs: "flex" },
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box>
                <img className="roadmap-image" src={left} onClick= {prev}/>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Inter' !important",
                  fontSize: "34px !important",
                  fontWeight: "400 !important",
                  lineHeight: "73px !important",
                }}
              >
                  <div
                    // if the photo is the current photo, show it
                    className={
                      photos[currentIndex].id === photos[currentIndex].id ? 'fade' : 'slide fade'
                    }
                  >
                    <div className='roadmap-image'>{photos[currentIndex].title}</div>
                  </div>
              </Typography>
              <Box >
                <img className="roadmap-image" src={right} onClick={next}/>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              display: { lg: "none", xs: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              width: { lg: "1072px", xs: "100%" },
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            {listItem.map((i, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sx={{
                    padding: "20px 9px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      padding: "0px 25px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: { lg: "none", xs: "flex" },
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "37px",

                          // marginRight: "20px",
                          height: "37px",
                          alignItems: "center",
                          display: "flex",
                          backgroundColor: "#242424",
                          justifyContent: "center",
                          borderRadius: "100px",
                        }}
                      >
                        <Typography
                          sx={{
                            padding: "10px 9px",
                            textTransform: "uppercase",
                            fontFamily: "'Manrope' !important",
                            fontSize: "14px !important",
                            fontWeight: "800 !important",
                            lineHeight: "18.2px !important",
                          }}
                        >
                          {i.num}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          margin: "0px 20px",
                          display: { lg: "none", xs: "flex" },
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Manrope' !important",
                            fontSize: "12px !important",
                            fontWeight: "700 !important",
                            lineHeight: "18px !important",
                            color: "#FBBF04",
                          }}
                        >
                          {i.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Manrope' !important",
                            fontSize: "10px !important",
                            fontWeight: "400 !important",
                            lineHeight: "15px !important",
                            // color: `${index == 1 ? "#FFFFFF" : "#85898F"}`,
                            color: i.color,
                          }}
                        >
                          {i.des}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
            {/* </Box> */}
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              display: { lg: "flex", xs: "none" },
              justifyContent: "center",
              width: "1072px",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  mb: "27px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                  {hover ? (
                      <img className="roadmap-image" src={left} onClick= {prev} style={{cursor:"pointer"}}/>
                    ) : (
                      <img className="roadmap-image" src={left}  />
                    )}
                  {/* <img className="roadmap-image" src={left} onClick= {prev}/> */}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter' !important",
                    fontSize: "60px !important",
                    fontWeight: "400 !important",
                    lineHeight: "73px !important",
                  }}
                >
                  {photos.map((photo) => (
                  <div
                    key={photo.id}

                    // if the photo is the current photo, show it
                    className={
                      photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                    }
                  >
                    <div className='roadmap-image'>{photo.title}</div>
                  </div>
                ))}
                </Typography>
                <Box onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                  {hover ? (
                      <img className="roadmap-image" src={right} onClick= {next} style={{cursor: "pointer"}}/>
                    ) : (
                      <img className="roadmap-image" src={right}  />
                    )}
                </Box>
              </Box>
              <Box className='slider-container'>
                {photos.map((photo) => (
                  <div
                    key={photo.id}

                    // if the photo is the current photo, show it
                    className={
                      photos[currentIndex].id === photo.id   ? 'fade' : 'slide fade'
                    }
                  >
                    <img src={photo.url} alt={photo.title} className='photo' />
                    {currentIndex == 0 ? <Map1/> : <></>}
                    {currentIndex == 1 ? <Map2/> : <></>}
                    {currentIndex == 2 ? <Map3/> : <></>}
                  </div>
                ))}
                {/* <img className="roadmap-image" src={mapV} /> */}
                {/* <img className="roadmap-image" src={mapV1} /> */}
              </Box>
            </Box>
            {/* <Box className={'roadmap-leftbox-parent'}>
                    <Box className={'roadmap-leftbox roadmap-leftbox-1'}>
                        <Typography component="h4">
                        October 2021
                        </Typography>
                        <Typography >
                        Creation of the team of developers. Creation of the Flash Token Website. 
                        </Typography>
                    </Box>

                    <Box className={'roadmap-leftbox roadmap-leftbox-2'}>
                        <Typography component="h4">
                        December 2021
                        </Typography>
                        <Typography >
                        Promotion of the Flash Token by influencers.  
                        </Typography>
                    </Box>

                    <Box className={'roadmap-leftbox roadmap-leftbox-3'}>
                        <Typography component="h4">
                        February 2022
                        </Typography>
                        <Typography >
                        Release of the beta version of the money transfer. Coming out of the Nft mint platform Deployment  
                        </Typography>
                    </Box>
            </Box>
            <Box className={'roadmap-centerbox-parent'}>
                <Box className={'roadmap-centerbox'}>
                    <Typography component="h4">
                        August 2021
                    </Typography>
                    <Typography >
                    Market study and meeting with professionals for the feasibility of the project.
                    </Typography>
                </Box>
              <img src={mapV} />
            </Box>
            <Box className={'roadmap-rightbox-parent'}>
                    <Box className={'roadmap-rightbox roadmap-right-1'}>
                        <Typography component="h4">
                        September 2021
                        </Typography>
                        <Typography >
                        Definition of the project and creation of the whitepaper. 
                        </Typography>
                    </Box>

                    <Box className={'roadmap-rightbox roadmap-rightbox-2'}>
                        <Typography component="h4">
                        November 2021
                        </Typography>
                        <Typography >
                        Implementation of the Marketing strategy. Creation of the money transfer platform website. Meeting with influencers for the promotion of Flash Token. Launch of the Flash Token on the Bsc.  
                        </Typography>
                    </Box>

                    <Box className={'roadmap-rightbox roadmap-rightbox-3'}>
                        <Typography component="h4">
                        January 2022
                        </Typography>
                        <Typography >
                        Launch of the 1st NFT collection. Launch of the Flash Token on the Bsc.
                        </Typography>
                    </Box>
            </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Roadmap;
