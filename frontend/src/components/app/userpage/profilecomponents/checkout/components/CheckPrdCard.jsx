import { useEffect, useState } from "react";
import base64ToIMGurl from "../../../../../utilityFiles/base64ToIMGurl";
import MyLink from "../../../../../utilityFiles/RouterConfig/MyLink";
import Rating from "../../../../../app/ProductCart/Rating";
import "./style/checkprd.css";

export default function CheckPrdCard({ img, pid, name, cat, count, price }) {
  const [imglink, setImglink] = useState("");
  useEffect(() => {
    base64ToIMGurl(img, (err, linkData) => {
      if (err) return;
      setImglink(linkData);
    });

    return () => URL.revokeObjectURL(imglink);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  return (
    <>
      <div className="checkprd-wrapper">
        <MyLink to={`/prd-view?prd=${pid}`}>
          <div className="checkprd-img-div">
            <img src={imglink} alt="" className="checkprd-img" />
          </div>
        </MyLink>
        <div className="checkprd-content-div">
          <h2>{name}</h2>
          <h4>{cat}</h4>
          <Rating />
          <h2>&#8377; {`${price}x${count}`}</h2>
        </div>
      </div>
    </>
  );
}
