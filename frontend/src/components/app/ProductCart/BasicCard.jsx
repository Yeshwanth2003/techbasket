import { forwardRef, useEffect, useState } from "react";
import MyLink from "../../utilityFiles/RouterConfig/MyLink";
import Rating from "./Rating";
import base64ToIMGurl from "../../utilityFiles/base64ToIMGurl";
import SaveItemButton from "./SaveItemButton";
import "./styles/basiccard.css";
import CompareButton from "./CompareButton";

const BasicCard = forwardRef(
  ({ img, name, price, cat, likes, dislikes, pid }, ref) => {
    const [imgLink, setImgLink] = useState("");

    useEffect(() => {
      base64ToIMGurl(img, (err, data) => {
        if (err) return;
        setImgLink(data);
      });
      return () => URL.revokeObjectURL(imgLink);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [img]);

    return (
      <>
        <div className="basi-prd-crd-outer">
          <MyLink to={`/prd-view?prd=${pid}`}>
            <div className="basi-prd-crd-wrapper">
              <div className="basi-prd-crd-img-wrp">
                <img src={imgLink} alt="" />
              </div>
              <div className="basi-prd-crd-det-div">
                <p>{name}</p>
                <p>{cat}</p>
                <div className="basi-prd-lks-div">
                  <Rating likes={likes} dislikes={dislikes} />
                </div>
                <p>
                  &#8377; {price}{" "}
                  <del>
                    &#8377; {parseInt(price) + (parseInt(price) * 20) / 100}
                  </del>
                </p>
              </div>
            </div>
          </MyLink>
          <div className="basi-prd-crd-optns-div">
            <SaveItemButton ref={ref} p_id={pid} />
            <CompareButton ref={ref} p_id={pid} />
          </div>
        </div>
      </>
    );
  }
);

export default BasicCard;
