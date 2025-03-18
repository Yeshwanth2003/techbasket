import { useEffect, useRef, useState } from "react";
import AddSellerProduct from "./AddSellerProduct";
import SellerSignup from "./SellerSignup";
import {
  thisSellerProductsRoute,
  thisSellerProductsCountRoute,
} from "../../../utilityFiles/urlMap";
import "./styles/seller.css";
import exportFetch from "../../../utilityFiles/exportFetch";
import useImportFetch from "../../../utilityFiles/customhooks/useImportFetch";
import SellerPaginGen from "./SellerPaginGen";
import SellerPrdTable from "./SellerPrdTable";

export default function Seller() {
  const [isSeller, setIsSeller] = useState(false);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [tot, setTot] = useState(0);
  const addProductRef = useRef();

  // helps in more
  function prdsFetcher(page = 1) {
    exportFetch(thisSellerProductsRoute, { page: page }).then((resData) => {
      setSellerProducts(resData);
    });
  }
  //get all prds
  useImportFetch(
    thisSellerProductsCountRoute,
    (err, data) => {
      if (err) return;
      setTot(data);
    },
    "JSON",
    []
  );

  // fetch sellerProducts on if they are seller
  useEffect(() => {
    if (!isSeller) return;
    // fetch seller prds
    prdsFetcher(1);
  }, [isSeller]);

  function onRefresh() {
    if (!isSeller) return;
    prdsFetcher(1);
  }

  return (
    <>
      <div className="p-seller-wrapper">
        <div className="p-seller-header">
          <div>Seller Dashboard</div>
          <div>
            <button onClick={addProductRef.current?.bringMeIn.bind(this)}>
              Add Product +
            </button>
          </div>
        </div>
        <div className="p-seller-body">
          <div>
            <em>
              Your Products <span>&#8702;</span>
            </em>
            <div onClick={onRefresh.bind(this)}>
              <span class="material-symbols-outlined">refresh</span>
            </div>
          </div>
          <div className="p-seller-contents">
            <table className="p-seller-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Likes</th>
                  <th>Dislike</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <SellerPrdTable
                sellerProducts={sellerProducts}
                key={`sllrPr${sellerProducts[0]?.pid}`}
                prdsFetcher={prdsFetcher}
              />
            </table>
          </div>
          <div className="p-seller-pagina-div">
            <SellerPaginGen tot={tot} prdsFetcher={prdsFetcher} />
          </div>
        </div>
        <AddSellerProduct ref={addProductRef} />
      </div>
      {!isSeller && <SellerSignup setIsSeller={setIsSeller} />}
    </>
  );
}
