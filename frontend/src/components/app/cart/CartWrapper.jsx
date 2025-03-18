import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import useImportFetch from "../../utilityFiles/customhooks/useImportFetch";
import CartBox from "./components/CartBox";
import { cartRoute } from "../../utilityFiles/urlMap";
import "./components/styles/cartwrapper.css";

const CartWrapper = forwardRef(({}, ref) => {
  // data
  const [cartItems, setCartItems] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [noOfItems, setNoOfItems] = useState(0);
  // setting number of items in cart to css
  document.documentElement.style.setProperty(
    "--items-no-in-cart",
    `'${noOfItems}'`
  );
  // exporting function to header wrapper2
  useImperativeHandle(ref, () => ({
    toggleCart,
    triggerCart,
  }));

  // fetch data
  useImportFetch(
    cartRoute,
    (err, resData) => {
      if (err) return;
      // const resMData = resData.map((elem) => JSON.parse(elem));
      // let no_Of_Items = 0;
      // resMData.forEach((elem) => (no_Of_Items += elem.count));
      // setNoOfItems(no_Of_Items);
      // resMData.reverse();
      // setCartItems(resMData);
      // Modified

      let no_Of_Items = 0;
      resData.forEach((elem) => (no_Of_Items += elem.count));
      setNoOfItems(no_Of_Items);
      resData.reverse();
      setCartItems(resData);
    },
    "JSON",
    [trigger]
  );
  //   toggler
  function toggleCart() {
    const cartWrapper = document.querySelector("#cartWrapperDiv");
    cartWrapper.classList.toggle("cartWrapper-wrapper-display");
    document.body.classList.toggle("body-never-scroll");
  }
  // trigger
  function triggerCart() {
    setTrigger((pre) => !pre);
  }

  //   createportal because to render on body
  return createPortal(
    <>
      <div id="cartWrapperDiv" className="cartWrapper-wrapper">
        <CartBox
          toggleCart={toggleCart}
          cartItems={cartItems}
          setTrigger={setTrigger}
        />
      </div>
    </>,
    document.body
  );
});

export default CartWrapper;
