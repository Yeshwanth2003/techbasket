import { forwardRef, useEffect, useState } from "react";
import useImportFetch from "../../utilityFiles/customhooks/useImportFetch";
import { getProductRoute, getSpecificRoute } from "../../utilityFiles/urlMap";
import ComparePrd from "./ComparePrd";
import exportFetch from "../../utilityFiles/exportFetch";
import "./styles/comparebody.css";

const CompareBody = forwardRef(({ p_id }, ref) => {
  const [comparer, setComparer] = useState([]);
  const [comparator, setComparator] = useState([]);
  const [cSearchQuery, setSQ] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let value = e.target[0].value.trim();
    if (value.length === 0) return;
    setSQ(value);
  }

  useImportFetch(
    `${getProductRoute}?pid=${p_id}`,
    (err, resData) => {
      if (err) return;
      setComparer(resData);
    },
    "JSON",
    [p_id]
  );

  //   handle search

  useEffect(() => {
    if (cSearchQuery.length === 0) return;
    exportFetch(getSpecificRoute, { name: cSearchQuery }).then((resData) => {
      if (!resData || resData.length === 0)
        ref.current.toggleAlert("No Match Found");

      setComparator(resData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cSearchQuery]);

  return (
    <>
      <div className="comparebody-wrapper">
        <div className="comparebody-header">
          <div className="comparebody-searchWrapper">
            <form onSubmit={onSubmit.bind(this)}>
              <div className="comparebody-imput-div">
                <input type="text" placeholder="Search" />
              </div>
              <button className="comparebody-sub" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="comparebody-body">
          <div className="comparebody-one">
            <ComparePrd
              //   logic for getting percent
              prd_details={comparer}
              is_prefered={
                parseInt(comparer[0]?.price) < parseInt(comparator[0]?.price)
              }
              percent={(() => {
                let tot =
                  parseInt(comparer[0]?.price) + parseInt(comparator[0]?.price);

                let percent = Math.round(
                  (parseInt(comparer[0]?.price) / tot) * 100
                );
                return 100 - percent;
              })()}
            />
          </div>
          <div className="comparebody-two">
            <ComparePrd
              //   logic for getting percent
              prd_details={comparator}
              is_prefered={
                parseInt(comparer[0]?.price) > parseInt(comparator[0]?.price)
              }
              percent={(() => {
                let tot =
                  parseInt(comparer[0]?.price) + parseInt(comparator[0]?.price);

                let percent = Math.round(
                  (parseInt(comparator[0]?.price) / tot) * 100
                );
                return 100 - percent;
              })()}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default CompareBody;
