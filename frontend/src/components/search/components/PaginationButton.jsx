import exportFetch from "../../utilityFiles/exportFetch";
import { getSearchRoute } from "../../utilityFiles/urlMap";

export default function PaginationButton({
  number,
  setSearchRes,
  searchData,
  setLoading,
}) {
  function paginate() {
    setLoading(true);
    exportFetch(getSearchRoute, { name: searchData, page: number }).then(
      (resData) => {
        console.log(resData);
        setSearchRes(resData);
        setLoading(false);
      }
    );
  }

  return (
    <button onClick={paginate.bind(this)} className="pagin-btn">
      {number}
    </button>
  );
}
