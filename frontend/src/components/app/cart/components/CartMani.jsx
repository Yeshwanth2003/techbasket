import exportFetch from "../../../utilityFiles/exportFetch";
import {
  addToCartRoute,
  deleteFromCartOneRoute,
} from "../../../utilityFiles/urlMap";

export default function CartMani({ count, pid, setTrigger }) {
  function triggerCart() {
    setTrigger((pre) => !pre);
  }

  function onDeleteOne(pid) {
    exportFetch(deleteFromCartOneRoute, { pid }, "DELETE").then((data) => {
      if (data) triggerCart();
    });
  }
  function onAdd(pid) {
    exportFetch(addToCartRoute, { pid }).then((data) => {
      if (data) triggerCart();
    });
  }
  return (
    <div className="crtcrd-prd-optns">
      <div className="crtcrd-prd-optn-div">
        <button className="crtcrd-prd-optn-btn" onClick={onAdd.bind(this, pid)}>
          <span class="material-symbols-outlined">add</span>
        </button>
        <div>{count}</div>
        <button
          className="crtcrd-prd-optn-btn"
          onClick={onDeleteOne.bind(this, pid)}
        >
          <span class="material-symbols-outlined">remove</span>
        </button>
      </div>
    </div>
  );
}
