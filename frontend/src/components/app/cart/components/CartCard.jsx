import { useEffect, useState } from "react";
import base64ToIMGurl from "../../../utilityFiles/base64ToIMGurl";
import CartMani from "./CartMani";
import { deleteFromCartRoute } from "../../../utilityFiles/urlMap";
import exportFetch from "../../../utilityFiles/exportFetch";
import "./styles/cartcard.css";

export default function CartCard({
  name,
  img,
  category,
  price,
  pid,
  count,
  setTrigger,
}) {
  const [imgLink, setImgLink] = useState("");
  // action
  useEffect(() => {
    base64ToIMGurl(img, (err, data) => {
      if (err) return;
      setImgLink(data);
    });
    return () => URL.revokeObjectURL(imgLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  function triggerCart() {
    setTrigger((pre) => !pre);
  }

  function onDelete(pid) {
    exportFetch(deleteFromCartRoute, { pid }, "DELETE").then((data) => {
      if (data) triggerCart();
    });
  }

  return (
    <>
      <div className="crtcrd-wrapper">
        <div className="crtcrd-img-div">
          <img src={imgLink} alt="" className="crtcrd-img" />
        </div>
        <div className="crtcrd-content-div">
          <p>{name}</p>
          <p>{category}</p>
          <p>
            &#8377; {price} x {count}
          </p>
          <CartMani count={count} pid={pid} setTrigger={setTrigger} />
        </div>
        <div className="crtcrd-lst-div" onClick={onDelete.bind(this, pid)}>
          <span
            style={{ "--iconsize": "20px", "--customColor": "red" }}
            className="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
          >
            close
          </span>
        </div>
      </div>
    </>
  );
}
