import { forwardRef, useState } from "react";
import useImportFetch from "../../../utilityFiles/customhooks/useImportFetch";
import BasicCard from "../../ProductCart/BasicCard";
import "./styles/homerack.css";

const HomeRack = forwardRef(({ pageTitle, route }, ref) => {
  const [msData, setMSData] = useState([]);
  useImportFetch(
    route,
    (err, rdata) => {
      if (err) return;
      setMSData(rdata);
    },
    "JSON"
  );
  return (
    <>
      <div className="h-HomeRack-wrapper">
        <div className="h-HomeRack-hol">
          <div className="h-HomeRack-header">
            <h2>{pageTitle}</h2>
          </div>
          <div className="h-HomeRack-content">
            <div className="h-HomeRack-runner">
              {msData.map((elem, index) => {
                return (
                  <>
                    <BasicCard
                      cat={elem.category}
                      dislikes={elem.dislike}
                      img={elem.img}
                      name={elem.name}
                      likes={elem.likes}
                      price={elem.price}
                      key={`${index}basiccard`}
                      pid={elem.pid}
                      ref={ref}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HomeRack;
