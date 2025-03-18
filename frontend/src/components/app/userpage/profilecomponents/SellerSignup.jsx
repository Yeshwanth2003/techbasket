import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Loading from "../../../utilityFiles/Loading";
import AlertBox from "../../alertbox/AlertBox";
import formExtractor from "../../../utilityFiles/formExtractor";
import useImportFetch from "../../../utilityFiles/customhooks/useImportFetch";
import exportFetch from "../../../utilityFiles/exportFetch";
import {
  verifySellerRoute,
  addSellerRoute,
} from "../../../utilityFiles/urlMap";
import "./styles/sellersignup.css";

export default function SellerSignup({ setIsSeller }) {
  return createPortal(
    <SellerSignupPage setIsSeller={setIsSeller} />,
    document.body
  );
}

function SellerSignupPage({ setIsSeller }) {
  const alertRef = useRef();
  // load until verifying if seller
  const [toDisplayLoad, setToDisplayLoad] = useState(true);

  //verfy if seller
  useImportFetch(
    verifySellerRoute,
    (err, data) => {
      if (err) return;
      if (data) {
        setIsSeller(true);
      }
      setToDisplayLoad(false);
    },
    "JSON"
  );

  // data
  const data = { country: "" };
  // onFormSubmit
  function onSubmit(ev) {
    ev.preventDefault();
    // onformsuccess
    function onFormSuccess(err, fdata) {
      if (err) return;
      // do exportFetch here
      exportFetch(addSellerRoute, fdata).then((res) => {
        if (!res) return;
        if (res) setIsSeller(true);
      });
    }
    formExtractor(data, ev.target, alertRef, onFormSuccess);
  }

  return (
    <>
      <div className="p-seller-s-wrapper">
        <div className="p-seller-s-form">
          <form onSubmit={onSubmit.bind(this)}>
            <label htmlFor="sellerCountry">
              Enter Your Country <span>{"(to become our seller)"}</span>
              <div className="p-seller-s-input-wrapper">
                <input
                  id="sellerCountry"
                  type="text"
                  className="p-seller-s-input"
                  placeholder="Country"
                  data-property="country"
                />
              </div>
            </label>
            <button type="submit" className="p-seller-button">
              Submit
            </button>
          </form>
        </div>
        {toDisplayLoad && (
          <>
            <div className="p-seller-check-div">
              <Loading />
            </div>
          </>
        )}
      </div>
      <AlertBox ref={alertRef} />
    </>
  );
}
