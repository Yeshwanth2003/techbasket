import "./components/styles/main.css";
import useImportFetch from "../../utilityFiles/customhooks/useImportFetch";
import { getCatRoute } from "../../utilityFiles/urlMap";
import { useState } from "react";
import CatBox from "./components/CatBox";

export default function CatWrapper() {
  const [catData, setCatData] = useState([]);

  useImportFetch(
    getCatRoute,
    (err, resData) => {
      if (err) return;
      // since object is returened from backend
      setCatData(resData);
    },
    "JSON",
    []
  );

  return (
    <>
      <div className="cat-wrapper">
        {catData.map((elem, index) => {
          return (
            <>
              <CatBox cat={elem.cat} img={elem.img} key={`catbox${index}`} />
            </>
          );
        })}
      </div>
    </>
  );
}

// class temp

class DataTemp {
  constructor(cat, img) {
    this.cat = cat;
    this.img = img;
  }
}
