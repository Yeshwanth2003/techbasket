import { useEffect, useState } from "react";
import base64ToIMGurl from "../../../utilityFiles/base64ToIMGurl";
import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import "./styles/main.css";

export default function CatBox({ img, cat }) {
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    base64ToIMGurl(img, (err, linkData) => {
      if (err) return;
      setImgLink(linkData);
    });
  }, [img]);

  return (
    <>
      <div className="catbox-wrapper">
        <MyLink to={`/search?key=${cat}`}>
          <div className="catbox-img">
            <img src={imgLink} alt="" />
          </div>
          <div className="catbox-index">
            <p>{cat}</p>
          </div>
        </MyLink>
      </div>
    </>
  );
}
