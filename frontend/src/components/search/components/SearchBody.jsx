import { forwardRef, useEffect, useState } from "react";
import Footer from "../../footer/FooterWrapper";
import SearchCard from "../../app/ProductCart/SearchCard";
import GenPagination from "./GenPagination";
import "./styles/searchbody.css";

const SearchBody = forwardRef(
  ({ setLoading, searchResult, searchData, noOfRes, setSearchRes }, ref) => {
    const [resFilter, setResFilter] = useState("");
    const [thisResult, setThisResult] = useState([]);

    // most likely act only on initial
    useEffect(() => {
      setThisResult(searchResult);
    }, [searchResult]);

    // just handle filter
    useEffect(() => {
      if (resFilter.length === 0) return;
      if (resFilter === FILTER_KEY.H_to_L) setThisResult((pre) => sort(pre, 1));
      else setThisResult((pre) => sort(pre, 0));
    }, [resFilter]);

    return (
      <>
        <div className="searchbody-wrapper">
          <div className="searchbody-header">
            <span
              style={{ "--iconsize": "25px", fontWeight: "bolder" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized "
            >
              keyboard_arrow_right
            </span>
            <h3>Search results for {searchData}</h3>
          </div>
          <div className="searchbody-util-div-wrapper">
            <div className="searchbody-util-container">
              <div> Showing {thisResult.length} products</div>
              <select
                name="searchFilter"
                id="searchFilter"
                onChange={(ev) => {
                  setResFilter(ev.target.value);
                }}
              >
                <option value="none" selected disabled hidden>
                  Select Filter
                </option>
                <option value={FILTER_KEY.H_to_L}>Price high to low</option>
                <option value={FILTER_KEY.L_to_H}>Price low to high</option>
              </select>
            </div>
          </div>
          <div className="searchbody-body-div">
            <div className="searchbody-body-content">
              {thisResult.map((elem, index) => {
                return (
                  <>
                    <SearchCard elem={elem} index={index} ref={ref} />
                  </>
                );
              })}
            </div>
          </div>
          {noOfRes > 10 && (
            <div className="searchbody-body-page-div">
              <div className="searchbody-body-page-div-content">
                <GenPagination
                  noOfRes={noOfRes}
                  setSearchRes={setSearchRes}
                  setLoading={setLoading}
                  searchData={searchData}
                />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
);

const FILTER_KEY = {
  H_to_L: "0",
  L_to_H: "1",
};
// product filter sorter
function sort(data, mode) {
  const arr = [...data];
  if (mode === 1) {
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length; j++)
        if (parseInt(arr[i].price) > parseInt(arr[j].price)) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
    return arr;
  }
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (parseInt(arr[i].price) < parseInt(arr[j].price)) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
  return arr;
}

export default SearchBody;
