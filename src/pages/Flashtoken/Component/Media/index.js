import Marquee from "react-fast-marquee";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Bloomberg from "../../../../assests/carousel_Img/Bloomberg.svg";
import benzinga from "../../../../assests/carousel_Img/benzinga.svg";
import YahooFinance from "../../../../assests/carousel_Img/YahooFinance.svg";
import Binance from "../../../../assests/svg/binance.svg";
import telechargementImg from '../../../../assests/carousel_Img/telechargement.svg';
import tradingviewSvg from '../../../../assests/carousel_Img/tradingview.svg';
import marketwatchSvg from '../../../../assests/carousel_Img/marketwatch.svg';


import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default function Media(){
  const fixedbar = useMediaQuery('(max-width : 1200px)');
      const Option = {
        responsive: {
          0: {
            items: 2,
          },
          375: {
            items: 2,
          },
          425: {
            items: 2,
          },
          575: {
            items: 2,
          },
          770: {
            items: 3,
          },
          960: {
            items: 3,
          },
          1170: {
            items: 3,
          },
          1340: {
            items: 4,
          },
          1560: {
            items: 4,
          },
          1600: {
            items: 4,
          },
        },
      };
      const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        1024: {
            items: 4, 
            itemsFit: 'contain'
        },
    };
    
      const list1 = [
        {
            img:Bloomberg,
            link: "https://www.bloomberg.com/press-releases/2023-04-04/flash-technologies-is-set-to-revolutionize-the-money-transfer-market"
        },
        {
            img:benzinga,
            link: "https://www.benzinga.com/pressreleases/23/04/g31662539/flash-technologies-is-set-to-revolutionize-the-money-transfer-market"
        },
        {
            img:YahooFinance,
            link: "https://finance.yahoo.com/news/flash-technologies-set-revolutionize-money-170000615.html"
        },
        {
            img:Binance,
            link: "https://www.binance.com/en/feed/post/221737"
        },
        {
          img:telechargementImg,
          link: "https://fr.cointelegraph.com/press-releases/flash-technologies-is-set-to-revolutionize-the-money-transfer-market"
        },
        {
          img:tradingviewSvg,
          link: "https://www.tradingview.com/news/reuters.com,2023-04-04:newsml_GNX2nycJb:0/"
        },
        {
          img: marketwatchSvg,
          link: "https://www.marketwatch.com/press-release/flash-technologies-is-set-to-revolutionize-the-money-transfer-market-2023-04-04?mod=search_headline"
        }
      ];    
    return(
        <div style={{
            width: "100%",
        }}
            className="MediaContent"
            id="Medias"
        >
            <h1 style={{
                color: "white",
                padding: "20px 0px 20px 0px",
                textAlign: "center",
                margin: 0,
                lineHeight: 0
            }} className="seeIntheMedia">Seen in the media</h1>             
            <div className="MediaContentQuery" style={{zIndex:22}}>
              <Marquee gradient={false} speed={60}>
                {list1.map((i,index) => {
                     if(i.img == YahooFinance){
                        return (<a href={i.link} target="_blank" rel="noreferrer" className="marquee_element">
                           <img src={i.img} style={{height:"40px"}} />
                         </a>
                        )
                     }
                    else if(i.img == telechargementImg){
                      return (<a href={i.link} target="_blank" rel="noreferrer" className="marquee_element">
                            <img src={i.img} style={{height:"44px"}} />
                          </a>
                       )
                     }
                    else if(i.img == Binance){
                      return (<a href={i.link} target="_blank" rel="noreferrer" className="marquee_element">
                            <img src={i.img} style={{height:"37px"}} />
                        </a>
                      )
                    }
                    else if(i.img == benzinga){
                      return (<a href={i.link} target="_blank" rel="noreferrer" className="marquee_element">
                          <img src={i.img} style={{height:"26px"}} />
                        </a>
                      )
                    }
                    // else if(i.img == marketwatchSvg){
                    //   return (<a href={i.link} target="_blank" rel="noreferrer">
                    //       <img src={i.img} style={{width:"190px"}} />
                    //     </a>
                    //   )
                    // }
                    else{
                        return <a key={index} href={i.link} target="_blank" rel="noreferrer" className="marquee_element">
                          <img src={i.img} style={{height:"30px"}} />
                        </a>
                    }
                }
                )}
                </Marquee>
                    {/* <AliceCarousel
                      mouseTracking
                      items= {list1.map((i,index) => {
                        if(i.img == Bloomberg){
                           return (<a href={i.link} target="_blank" rel="noreferrer">
                              <img src={i.img} style={{width:"134px"}} />
                            </a>
                           )
                        }
                       else if(i.img == telechargementImg){
                          return (<a href={i.link} target="_blank" rel="noreferrer">
                              <img style={{width:"180px"}} id="telechargement"/>
                            </a>
                          )
                        }
                       else if(i.img == Binance){
                         return (<a href={i.link} target="_blank" rel="noreferrer">
                             <img src={i.img} style={{width:"160px"}} />
                           </a>
                         )
                       }
                       else{
                         return (
                           <a href={i.link} target="_blank" rel="noreferrer">
                               <img src={i.img} width="120px" style={{width:"120px"}}/>
                           </a>
                           );    
                       }
                     }
                   )}
                      responsive={responsive}
                      autoPlay={true}
                      infinite={false}
                    /> */}
                
            </div>
            {/* <div className="MediaMobile">
                {list1.map((m)=>{
                    return(
                        <a href={m.link} target="_blank" rel="noreferrer" style={{padding:"20px"}}>
                            <img src={m.img} width="120px" height="50px" />
                        </a>
                    )
                })}
            </div> */}
        </div>
    )
}