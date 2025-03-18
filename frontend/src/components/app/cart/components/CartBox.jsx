import { useEffect, useState } from "react";
import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import CartCard from "./CartCard";
import "./styles/cartbox.css";

export default function CartBox({ toggleCart, cartItems, setTrigger }) {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    cartItems.forEach((elem) => (tot += elem.price * elem.count));
    setTotal(tot);
  }, [cartItems]);

  return (
    <>
      <div className="cartbox-wrapper">
        <div className="cartbox-header">
          <div>
            <h3>This is your bag</h3>
          </div>
          <div onClick={toggleCart.bind(this)}>
            <span
              style={{ "--iconsize": "22px" }}
              className="material-symbols-outlined material-symbols-outlined-size-customized"
            >
              close
            </span>
          </div>
        </div>
        <div className="cartbox-body">
          <div className="cartbox-prds">
            <div className="cartbox-lister">
              {cartItems.map((elem, index) => {
                return (
                  <>
                    <CartCard
                      img={elem.img}
                      category={elem.category}
                      name={elem.name}
                      pid={elem.pid}
                      price={elem.price}
                      key={`${index}crdcrd`}
                      count={elem.count}
                      setTrigger={setTrigger}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="cartbox-access-div">
            <div className="cartbox-a-div-contents">
              <span>Total</span>
              <span>&#8377; {Total}</span>
            </div>
            <MyLink
              to={"/profile/checkout"}
              noaction={cartItems.length > 0 ? false : true}
            >
              <button
                className="cartbox-check-btn"
                onClick={toggleCart.bind(this)}
              >
                Checkout
              </button>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
}
