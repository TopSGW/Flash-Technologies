import { useSelector } from "react-redux";
import { Languagemodel } from "../../../../Slice/translateSlice";
export default function Map4() {
  const lang = useSelector(Languagemodel);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "40px",
            margin: 0,
            color: "#FABE04",
            lineHeight: 0,
          }}
        >
          2023
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "17px",
          width: "100%",
          height: "40px",
          paddingTop: "20px",
        }}
      >
        <p
          style={{
            width: "350px",
            textAlign: "center",
            fontSize: "13px",
            color: "white",
            margin: "auto",
          }}
        >
          Auditing Flash Transfer & Flash Wallet apps
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "215px",
          width: "100%",
          height: "99px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "200px",
            margin: "0px 74% 0px 14%",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "right",
              fontSize: "13px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Flash x Orange Money
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "230px",
          width: "100%",
          height: "99px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "262px",
            margin: "0px 16% 0px 65%",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "12px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Flash x MTN
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "354px",
          width: "100%",
          height: "99px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "280px",
            margin: "0px 74% 0px 0%",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "right",
              fontSize: "13px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Launch of Flash Payment
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "348px",
          width: "100%",
          height: "180px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "275px",
            margin: "0px 8% 0px 73%",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "13px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Launch of Dead Wallet
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "480px",
          width: "100%",
          height: "99px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "245px",
            margin: "0px 0px 0px -3%",
          }}
        >
          <p
            style={{
              color: "#a19898",
              textAlign: "right",
              fontSize: "13px",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Waiting for PSAN registration in France
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "489px",
          width: "100%",
          height: "99px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "219px",
            margin: "0px 0% 0px 80%",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "13px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Waiting for VASP registration in UAE
          </p>
        </div>
      </div>
    </div>
  );
}
