import { forwardRef, useEffect, useState } from "react";
import useMyNavigate from "../../utilityFiles/RouterConfig/useMyNavigate";
import base64ToIMGurl from "../../utilityFiles/base64ToIMGurl";
import Rating from "../../app/ProductCart/Rating";
import AddToCart from "../../app/ProductCart/AddToCart";
import LikeDislike from "./LikeDislike";
import SaveItemButtom from "../../app/ProductCart/SaveItemButton";
import CompareProduct from "../../app/ProductCart/CompareButton";
import Feedback from "./Feedback";
import HomeRack from "../../app/home/homecomponents/HomeRack";
import { getRelProductRoute } from "../../utilityFiles/urlMap";

const ProductViewBody = forwardRef(({ product }, ref) => {
  const [imgLink, setImgLink] = useState("/");
  const nav = useMyNavigate();
  useEffect(() => {
    base64ToIMGurl(product[0].img, (err, bdata) => {
      if (err) return;
      setImgLink(bdata);
    });
    return () => URL.revokeObjectURL(imgLink);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [product[0].img]);
  return (
    <>
      <div className="prd-v-b-body">
        <div className="prd-v-b-header">
          <button className="prd-v-h-home" onClick={() => nav("/home")}>
            <span class="material-symbols-outlined">home</span>
          </button>
          <span>/ {product[0].name}</span>
        </div>
        <div className="prd-v-b-cont-body">
          <div className="prd-v-b-contents">
            <div className="prd-v-b-c-div1">
              <div className="prd-v-b-c-img-div">
                <img src={imgLink} alt="" className="prd-v-b-c-img" />
              </div>
            </div>
            <div className="prd-v-b-c-div2">
              <div className="prd-v-b-c-div2-c1">
                <div className="prd-v-b-c-div2-1">
                  <p className="prd-v-b-c-name">{product[0].name}</p>
                  <p className="prd-v-b-c-cat">{product[0].category}</p>
                  <p className="prd-v-b-c-price">&#8377; {product[0].price}</p>
                  <div className="prd-v-b-c-rating">
                    <Rating />
                    <span>stars</span>
                  </div>
                  <LikeDislike />
                </div>
                <div className="prd-v-b-c-div2-2">
                  <div className="prd-v-b-c-div2-text-cnt">
                    <div>
                      <p>
                        <span class="material-symbols-outlined">
                          local_shipping
                        </span>
                        We Assure Delivery With in Next 5 Working Days From The
                        Time of Order
                      </p>
                    </div>
                    <div>
                      <p>
                        TechBasket Trusted{" "}
                        <span class="material-symbols-outlined">verified</span>
                      </p>
                    </div>
                  </div>
                  <AddToCart ref={ref} pid={product[0].pid} />
                  <div className="prd-v-b-c-div2-2-util">
                    <SaveItemButtom ref={ref} p_id={product[0].pid} />
                    <CompareProduct ref={ref} p_id={product[0].pid} />
                  </div>
                </div>
              </div>
              <div className="prd-v-b-c-div2-c2">
                <Feedback />
              </div>
            </div>
          </div>
        </div>
        <HomeRack
          pageTitle={"Related Product"}
          route={`${getRelProductRoute}?prd=${product[0].category}`}
          ref={ref}
        />
      </div>
    </>
  );
});

export default ProductViewBody;
