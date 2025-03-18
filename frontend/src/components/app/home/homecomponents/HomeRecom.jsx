import React, { forwardRef, useState } from "react";
import useImportFetch from "../../../utilityFiles/customhooks/useImportFetch";
import { getByRecentRoute } from "../../../utilityFiles/urlMap";
import HomeRack from "./HomeRack";

const HomeRecom = forwardRef(({}, ref) => {
  const [recomData, setRecomData] = useState([]);

  useImportFetch(
    getByRecentRoute,
    (err, resData) => {
      if (err) return;
      setRecomData(resData);
    },
    "JSON",
    []
  );

  return (
    <>
      {recomData.length <= 0 ? (
        <></>
      ) : (
        <HomeRack
          ref={ref}
          pageTitle={"Based on Your Recent Search"}
          route={getByRecentRoute}
        />
      )}
    </>
  );
});

export default HomeRecom;
