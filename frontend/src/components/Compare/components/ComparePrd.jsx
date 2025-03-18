import { useState, useEffect } from "react";
import base64ToIMGurl from "../../utilityFiles/base64ToIMGurl";
import Rating from "../../app/ProductCart/Rating";
import "./styles/compareprd.css";

export default function ComparePrd({ prd_details, is_prefered, percent }) {
  const [imgLink, setImgLink] = useState("");

  // prd_details may not have relaied value
  useEffect(() => {
    base64ToIMGurl(prd_details[0]?.img, (err, bdata) => {
      if (err) return;
      setImgLink(bdata);
    });
    return () => URL.revokeObjectURL(imgLink);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [prd_details[0]?.img]);

  if (!prd_details || prd_details.length === 0) return;

  return (
    <>
      <div className="compareprd-wrapper">
        <div className="compareprd-d1">
          <div className="com-prd-img-div">
            <img src={imgLink} alt="" />
          </div>
          <div className="com-prd-desc">
            <p>{prd_details[0]?.name}</p>
            <p>{prd_details[0]?.category}</p>
            <p>&#8377; {prd_details[0]?.price}</p>
            <Rating />
          </div>
        </div>
        <div className="compareprd-d2">
          {(() => {
            if (is_prefered) {
              return (
                <>
                  <div className="com-prd-prederd">
                    <p>
                      Prefered
                      <span class="material-symbols-outlined">
                        check_circle
                      </span>
                    </p>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="com-prd-prederd com-prd-prederd-not">
                    <p>
                      Not Prefered
                      <span class="material-symbols-outlined">close</span>
                    </p>
                  </div>
                </>
              );
            }
          })()}
          <div className="com-prd-percent">
            <span>Based on Price</span>
            <p>{percent}%</p>
            <div
              style={{
                "--percent": `${percent}%`,
                "--barcolor": `${is_prefered ? "green" : "red"}`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
