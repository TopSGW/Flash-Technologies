import { Languagemodel } from "../../../../Slice/translateSlice"
import { useSelector } from "react-redux"

export default function Map1(){
    const lang = useSelector(Languagemodel)
    return(
        <div>
            <div style={{
                position:'absolute',
                top:0,
                width: "100%"
            }}>
                <p style={{
                    textAlign:'center',
                    fontWeight: 600,
                    fontSize: "20px",
                    margin:0,
                    color: "#FABE04",
                    lineHeight: 0
                }}>{lang["August 2021"]}</p>
            </div>
            <div style={{
                position:"absolute",
                top: "17px",
                width: "100%",
                height: "40px",
                margin: "auto"
            }}>
                <p style={{
                    width: "350px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "white",
                    margin: "auto",
                }}>{lang["Market study and meeting with professionals for the feasibility of the project."]}</p>
            </div>
            <div style={{
                position:"absolute",
                top: "181px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "200px",
                    margin: "0px 74% 0px 14%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'right', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["October 2021"]}
                    </p>
                    <p style={{color:"white", textAlign:'right', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Creation of the team of developers. Creation of the Flash Token Website."]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "185px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "262px",
                    margin: "0px 16% 0px 66%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'left', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["September 2021"]}
                    </p>
                    <p style={{color:"white", textAlign:'left', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Definition of the project and creation of the whitepaper."]}
                    </p>
                </div>
            </div>
            

            <div style={{
                position:"absolute",
                top: "324px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "200px",
                    margin: "0px 74% 0px 8%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'right', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["December 2021"]}
                    </p>
                    <p style={{color:"white", textAlign:'right', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Promotion of the Flash Token by influencers."]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "288px",
                width: "100%",
                height: "180px",
                margin: "auto"
            }}>
                <div style={{
                    width: "275px",
                    margin: "0px 8% 0px 73%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'left', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["November 2021"]}
                    </p>
                    <p style={{color:"white", textAlign:'left', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Implementation of the Marketing strategy. Creation of the money transfer platform website. Meeting with influencers for the promotion of Flash Token. Launch of the Flash Token on the Bsc."]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "448px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "200px",
                    margin: "0px 74% 0px 0%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'right', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["February 2022"]}
                    </p>
                    <p style={{color:"white", textAlign:'right', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Release of the beta version of the money transfer. Coming out of the Nft mint platform Deployment."]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "448px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "200px",
                    margin: "0px 0% 0px 80%",
                }}>
                    <p style={{color:"#FABE04", textAlign:'left', fontSize:"20px", margin: 0, fontWeight: 600}}>
                        {lang["January 2022"]}
                    </p>
                    <p style={{color:"white", textAlign:'left', fontSize:"13px", margin: "10px 0px 0px 0px"}}>
                        {lang["Launch of the 1st NFT collection. Launch of the Flash Token on the Bsc."]}
                    </p>
                </div>
            </div>
        </div>
    )
}