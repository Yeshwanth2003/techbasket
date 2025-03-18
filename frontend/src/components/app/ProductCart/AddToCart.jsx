import { forwardRef } from "react";
import namestore from "../../header/headerReducer/namestore.js";
import { addToCartRoute } from "../../utilityFiles/urlMap";
import exportFetch from "../../utilityFiles/exportFetch";
import "./styles/addtocart.css";

const AddToCart = forwardRef(({ pid }, ref) => {
  const name = namestore.getState().name.name;

  function addToCart(pid) {
    // simple validation whether to add
    if (!name) {
      try {
        ref.alertController.current.toggleAlert("Login to use");
      } catch {
        ref.current.toggleAlert("Login to use");
      }
      return;
    }
    // on passing
    exportFetch(addToCartRoute, { pid }).then((data) => {
      if (data) ref.ref.cartHolderRef.current.triggerCart();
    });
  }
  return (
    <button className="add-to-cart-button" onClick={addToCart.bind(this, pid)}>
      Add To Cart
    </button>
  );
});
export default AddToCart;
