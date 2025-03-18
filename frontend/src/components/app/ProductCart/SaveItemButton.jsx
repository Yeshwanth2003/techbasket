import { forwardRef } from "react";
import namestore from "../../header/headerReducer/namestore.js";

const SaveItemButton = forwardRef(({ p_id }, ref) => {
  const name = namestore.getState().name.name;

  function addToSaved(pid) {
    if (!name) {
      try {
        ref.alertController.current.toggleAlert("Login to use");
      } catch {
        console.log("Error in save button");
      }
      return;
    }
    console.log(pid);
  }

  return (
    <button className="sav-btn" onClick={addToSaved.bind(this, p_id)}>
      <span class="material-symbols-outlined">favorite</span>
    </button>
  );
});
export default SaveItemButton;
