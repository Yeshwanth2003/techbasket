import React, { forwardRef, useEffect, useRef, useState } from "react";
import AlertBox from "../app/alertbox/AlertBox";
import HeaderPart2 from "../header/headerComponents/HeaderPart2";
import HeaderPart3 from "../header/headerComponents/HeaderPart3";
import namestore from "../header/headerReducer/namestore";
import Loading from "../utilityFiles/Loading";
import useImportFetch from "../utilityFiles/customhooks/useImportFetch";
import { getProductRoute } from "../utilityFiles/urlMap";
import "./components/style/prdVwrapper.css";
import ProductViewBody from "./components/ProductViewBody";
import useMyNavigate from "../utilityFiles/RouterConfig/useMyNavigate";
import Footer from "../footer/FooterWrapper";

const ProductView = forwardRef(({}, ref) => {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const alertController = useRef();
  const name = namestore.getState().name.name;
  const nav = useMyNavigate();
  let pid;
  try {
    pid = window.location.href.split("?")[1].split("=")[1].replace("%20", " ");
  } catch {
    nav("/err");
  }

  // simply to loading on reload
  useEffect(() => {
    setLoading(true);
  }, [pid]);

  useImportFetch(
    `${getProductRoute}?pid=${pid}`,
    (err, resData) => {
      if (err) return;
      setProduct(resData);
      setLoading(false);
    },
    "JSON",
    [pid]
  );

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="prd-v-w-header">
            <HeaderPart2 ref={{ ref, alertController }} name={name} />
            <HeaderPart3 />
          </div>
          <ProductViewBody product={product} ref={{ ref, alertController }} />
          <Footer />
          <AlertBox ref={alertController} />
        </>
      )}
    </>
  );
});

export default ProductView;
