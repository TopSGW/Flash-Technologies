import { useSelector } from "react-redux"
import { Languagemodel } from "../../../../Slice/translateSlice"
export default function Map2(){
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
                    fontSize: "40px",
                    margin:0,
                    color: "#FABE04",
                    lineHeight: 0,
                }}>2022</p>
            </div>
            <div style={{
                position:"absolute",
                top: "17px",
                width: "100%",
                height: "40px",
                paddingTop: "20px"
            }}>
                <p style={{
                    width: "350px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "white",
                    margin: "auto",
                }}>{lang["Launch of Flash Technologies website"]}</p>
            </div>
            <div style={{
                position:"absolute",
                top: "230px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "200px",
                    margin: "0px 74% 0px 14%",
                }}>
                    <p style={{color:"white", textAlign:'right', fontSize:"13px", margin: 0, fontWeight: 500}}>
                        {lang["Launch of Flash Audit"]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "235px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "262px",
                    margin: "0px 16% 0px 65%",
                }}>
                    <p style={{color:'white', textAlign:'left', fontSize:"12px", margin: 0, fontWeight: 500}}>
                        {lang["Unveiling of the first Flash Transfer partners"]}
                    </p>
                </div>
            </div>
            

            <div style={{
                position:"absolute",
                top: "350px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "280px",
                    margin: "0px 74% 0px 0%",
                }}>
                    <p style={{color: "white", textAlign:'right', fontSize:"13px", margin: 0, fontWeight: 500}}>
                        {lang["Launch of the advertising campaign with influencers + new ambassadors"]}   
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "358px",
                width: "100%",
                height: "180px",
                margin: "auto"
            }}>
                <div style={{
                    width: "275px",
                    margin: "0px 8% 0px 73%",
                }}>
                    <p style={{color:"white", textAlign:'left', fontSize:"13px", margin: 0, fontWeight: 500}}>
                        {lang["Vip Club Launch (only for the 200 Nft)"]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "490px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "218px",
                    margin: "0px 0px 0px -1%",
                }}>
                    <p style={{color:'white', textAlign:'right', fontSize:"13px", margin: 0, fontWeight: 400}}>
                        {lang["Development of the Staking platform"]}
                    </p>
                </div>
            </div>

            <div style={{
                position:"absolute",
                top: "492px",
                width: "100%",
                height: "99px",
                margin: "auto"
            }}>
                <div style={{
                    width: "210px",
                    margin: "0px 0% 0px 80%",
                }}>
                    <p style={{color:"white", textAlign:'left', fontSize:"13px", margin: 0, fontWeight: 500}}>
                        {lang["Development of the Audit platform"]}
                    </p>
                </div>
            </div>
        </div>    
    )
}