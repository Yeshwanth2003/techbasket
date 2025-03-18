import { cartRoute } from "../../../../../utilityFiles/urlMap";
import useImportFetch from "../../../../../utilityFiles/customhooks/useImportFetch";
import CheckPrdCard from "./CheckPrdCard";
import { useState, useRef, useEffect } from "react";
import formExtractor from "../../../../../utilityFiles/formExtractor";
import AlertBox from "../../../../alertbox/AlertBox";
import "../components/style/address.css";

export default function CheckoutAddress() {
  const [noOfItems, setNoOfItems] = useState(0);
  const [products, setProducts] = useState([]);

  const [tot, setTOT] = useState(0);
  const formSubmitRef = useRef();
  const [shouldRemember, setShouldRemember] = useState(false);

  const [address, setAddress] = useState({});
  const [paymentType, setPaymentType] = useState(NaN);

  // alertRef
  const alertRef = useRef();

  // get cart items
  useImportFetch(
    cartRoute,
    (err, resData) => {
      if (err) return;
      const resMData = resData.map((elem) => JSON.parse(elem));
      let no_Of_Items = 0;
      let tot_p = 0;
      resMData.forEach((elem) => {
        no_Of_Items += elem.count;
        tot_p += elem.price * elem.count;
      });
      setTOT(tot_p);
      setNoOfItems(no_Of_Items);
      resMData.reverse();
      setProducts(resMData);
    },
    "JSON",
    []
  );

  // trigger form submit

  function triggerSubmit(e) {
    formSubmitRef.current.click();
  }
  function onSubmit1(e) {
    e.preventDefault();
    formExtractor({}, e.target, alertRef, (err, fData) => {
      if (err) return;
      setAddress(fData);
      // move futher to payment
      if (isNaN(paymentType)) {
        alertRef.current.toggleAlert("Select Payment");
        return;
      }
      // on UPI Logs
      if (paymentType === PaymentOptns.UPI) {
      }
      if (shouldRemember) {
        // for future
      }
      
    });
  }
  // handle remember
  function onRemember(e) {
    if (!e.target.checked) {
      setShouldRemember(false);
      return;
    }
    setShouldRemember(true);
  }

  // handle payment method
  function handlePayment(e) {
    if (!e.target.checked) return;
    setPaymentType(e.target.getAttribute("pay-type"));
  }

  return (
    <>
      <div className="check-addr-wrapper">
        <div className="check-addr-header">
          <h2>Billing Details</h2>
        </div>
        <div className="check-addr-body-div">
          <form className="check-addr-ctns-div" onSubmit={onSubmit1.bind(this)}>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="First Name*"
                data-property="fname"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Last Name"
                data-property="lname"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Your Company"
                data-property="company"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Street*"
                data-property="street"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Country*"
                data-property="country"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="number"
                className="check-addr-input"
                placeholder="Pincode*"
                data-property="pincode"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Apartment, suite, unit etc. (optional)"
                data-property="villa"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Town/City*"
                data-property="town"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Email Address*"
                data-property="email"
              />
            </div>
            <div className="check-addr-input-wrpr">
              <input
                type="text"
                className="check-addr-input"
                placeholder="Phone Number*"
                data-property="phone"
              />
            </div>
            <input
              style={{ display: "none" }}
              ref={formSubmitRef}
              type="submit"
              value={"Submit"}
            />
          </form>
          <div className="check-addr-cnts2-div">
            <div className="chech-add-cnts2-one">
              <div className="check-add-cnts-one-cnts">
                <div className="check-addr-cnts-one-cnts-heading">
                  <h2>Your Bag</h2>
                </div>
                <div className="check-addr-cnts-one-cnts-body">
                  <div className="check-addr-cnts-one-cnts-body-rnnd">
                    <div
                      className="check-addr-cnts-one-cnts-body-rnnr"
                      style={{ width: `${products.length * 100}%` }}
                    >
                      {products.map((elem, index) => {
                        return (
                          <>
                            <CheckPrdCard
                              cat={elem.category}
                              count={elem.count}
                              name={elem.name}
                              img={elem.img}
                              price={elem.price}
                              key={`CheckPrdCard${index}`}
                              pid={elem.pid}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chech-add-cnts2-two">
              <div className="check-add-cnts2-header">
                <h3>Choose Payment Method</h3>
              </div>
              <div className="check-add-cnts2-two-cntholder">
                <div className="check-add-cnts2-two-cnt">
                  <label htmlFor="paymentUPI">
                    <div className="check-payment-styleDiv">{/* any */}</div>
                    <input
                      pay-type={PaymentOptns.UPI}
                      name="payment"
                      id="paymentUPI"
                      type="radio"
                      onChange={handlePayment.bind(this)}
                    />
                    <p>UPI</p>
                  </label>
                </div>
                <div className="check-add-cnts2-two-cnt">
                  <label htmlFor="paymentCOD">
                    <div className="check-payment-styleDiv">{/* any */}</div>
                    <input
                      pay-type={PaymentOptns.COD}
                      name="payment"
                      id="paymentCOD"
                      type="radio"
                      onChange={handlePayment.bind(this)}
                    />
                    <p>COD</p>
                  </label>
                </div>
              </div>
              <div className="check-add-cnts2-proceed">
                <button onClick={triggerSubmit.bind(this)}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
        <div className="check-addr-footer">
          <div className="check-addr-ftr-ctn">
            <input type="checkbox" onChange={onRemember.bind(this)} />
            Remember Me
          </div>
        </div>
      </div>
      <AlertBox ref={alertRef} />
    </>
  );
}

const PaymentOptns = {
  UPI: 0,
  COD: 1,
};
