import { useState } from "react";

import { useSelector } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
export default function Menu( props ){
    const handleChange = (id)=>{
        props.SetmenuStatus(false);
        document.getElementById(id).scrollIntoView();
        setTimeout(()=>{window.scrollBy(0,-71)},50);
    }
    const Navs = [
        {
          name: "Our Services",
          color: "#85898F",
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
    const lang = useSelector(Languagemodel)    
    return(
        <div style={{
            position: "absolute",
            minWidth: "300px",
            width: "80%",
            maxWidth: "500px",
            backgroundColor: "black",
            top : 0,
            zIndex: 9999999999999,
            paddingBottom: "20px",
            left: `${props.status ? 0 : '-100%'}`,
            transition: "left 1s",
            marginTop: "71px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column" 
            }}>
                {Navs.map((m) =>{
                    return <div style={{
                        paddingLeft: "20px",
                        marginTop:"10px"
                    }}>
                        <div className="menu-link"
                            style={{
                            color: `${m.color}`,
                            fontFamily: "Manrope !important",
                            fontSize: "12px !important",
                            fontWeight: "400 !important",
                            lineHeight: "16.4px !important",
                        }} 
                        onClick={()=>handleChange(m.link)}>
                            {lang[m.name]}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}