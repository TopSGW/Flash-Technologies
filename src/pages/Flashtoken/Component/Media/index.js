import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Bloomberg from "../../../../assests/carousel_Img/Bloomberg.svg";
import Vector from "../../../../assests/carousel_Img/Vector.svg";
import YahooFinance from "../../../../assests/carousel_Img/YahooFinance.svg";
import Binance from "../../../../assests/svg/binance.svg";
import telechargementImg from '../../../../assests/carousel_Img/telechargement.svg';


import "./index.css";

export default function Media(){
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
      const list1 = [
        {
            img:Bloomberg,
            link: "https://www.bloomberg.com/press-releases/2022-08-01/flash-technologies-is-set-to-launch-a-new-non-custodial-decentralized-wallet-called-flashwallet"
        },
        {
            img:Vector,
            link: "https://www.benzinga.com/pressreleases/22/07/28281363/flash-technologies-is-set-to-launch-a-new-non-custodial-decentralized-wallet-called-flashwallet"
        },
        {
            img:YahooFinance,
            link: "https://finance.yahoo.com/news/flash-technologies-set-launch-non-002200129.html"
        },
        {
            img:Binance,
            link: "https://www.binance.com/en/feed/post/221737"
        },
        {
          img:telechargementImg,
          link: "https://fr.cointelegraph.com/press-releases/flash-technologies-is-set-to-revolutionize-the-money-transfer-market"
        },
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
                padding: "0px 0px 35px 0px",
                textAlign: "center",
                margin: 0,
                lineHeight: 0
            }}>Seen in the media</h1>
            <div className="MediaContentQuery" style={{paddingBottom: "30px",zIndex:22}}>
                <OwlCarousel
                    className="owl-theme"
                    autoplay={true}
                    loop
                    margin={40}
                    autoplaySpeed={9000}
                    // autoplayTimeout={1000}
                    nav={false}
                    dots={false}
                    items={4}
                    responsive={Option.responsive}
                    callbacks={true}
                    style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                >
                {list1.map((i,index) => {
                     if(i.img == Bloomberg){
                        return (<a href={i.link} target="_blank" rel="noreferrer">
                           <img src={i.img} style={{width:"134px"}} />
                         </a>
                        )
                     }
                    else if(i.img == telechargementImg){
                       return (<a href={i.link} target="_blank" rel="noreferrer">
                           <img src={i.img} style={{width:"180px"}}/>
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
                </OwlCarousel>
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