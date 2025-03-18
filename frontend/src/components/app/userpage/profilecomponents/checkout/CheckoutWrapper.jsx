import { useLayoutEffect } from "react";
import namestore from "../../../../header/headerReducer/namestore";
import useMyNavigate from "../../../../utilityFiles/RouterConfig/useMyNavigate";
import CheckoutAddress from "./components/CheckoutAddress";
import MyLink from "../../../../utilityFiles/RouterConfig/MyLink";
import "./components/style/main.css";

export default function CheckoutWrapper() {
  const username = namestore.getState().name.name;
  const nav = useMyNavigate();

  useLayoutEffect(() => {
    if (!username || username === null || username === undefined) {
      nav("/home");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="checkout-wrapper-div">
        <div className="checkout-header-div">
          <div className="checkout-header-cntns">
            <p>
              <MyLink to={"/home"}>
                <span class="material-symbols-outlined">home</span>
              </MyLink>{" "}
              / Checkout
            </p>
          </div>
        </div>
        <CheckoutAddress />
      </div>
    </>
  );
}
