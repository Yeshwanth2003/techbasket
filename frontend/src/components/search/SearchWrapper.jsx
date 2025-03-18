import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import AlertBox from "../app/alertbox/AlertBox";
import HeaderPart2 from "../header/headerComponents/HeaderPart2";
import HeaderPart3 from "../header/headerComponents/HeaderPart3";
import Loading from "../utilityFiles/Loading";
import SearchBody from "./components/SearchBody";
import useImportFetch from "../utilityFiles/customhooks/useImportFetch";
import exportFetch from "../utilityFiles/exportFetch";
import {
  getSearchRoute,
  getSearchCountRoute,
  addToRecentRoute,
} from "../utilityFiles/urlMap";
import store from "../header/headerReducer/namestore";
import "./components/styles/main.css";

const SearchWrapper = forwardRef(({}, ref) => {
  const alertController = useRef();
  const [isLoading, setLoading] = useState(true);
  const [searchResult, setSearchRes] = useState([]);
  const [noOfRes, setNoOfRes] = useState(0);
  const searchData = window.location.href
    .split("?")[1]
    .split("=")[1]
    .replace("%20", " ");

  // from redux
  const name = store.getState().name.name;

  useImportFetch(
    `${getSearchCountRoute}${searchData}`,
    (err, data) => {
      if (err) return;
      setNoOfRes(data);
      // then fetch result
      exportFetch(getSearchRoute, { name: searchData, page: 1 }).then(
        (resData) => {
          setSearchRes(() => resData);
          setLoading(false);
          // add to recent search
          exportFetch(addToRecentRoute, { recomdata: searchData }).then(
            (innerResData) => {
              // nothing to do with
            }
          );
        }
      );
    },
    "JSON",
    [searchData]
  );
  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <>
            <div className="search-header-wrapper">
              <HeaderPart2 ref={{ ref, alertController }} name={name} />
              <HeaderPart3 />
            </div>
            <SearchBody
              setLoading={setLoading}
              setNoOfRes={setNoOfRes}
              setSearchRes={setSearchRes}
              searchResult={searchResult}
              noOfRes={noOfRes}
              searchData={searchData}
              ref={{ ref, alertController }}
            />
          </>
        </>
      )}
      <AlertBox ref={alertController} />
    </>
  );
});

export default SearchWrapper;
