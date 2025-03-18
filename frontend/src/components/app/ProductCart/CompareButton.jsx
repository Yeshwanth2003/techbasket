import { forwardRef } from "react";

const CompareButton = forwardRef(({ p_id }, ref) => {
  function compareIt(pid) {
    try {
      ref.ref.compareRef.current.openComparision(p_id);
    } catch {}
  }

  return (
    <>
      <button className="sav-btn" onClick={compareIt.bind(this, p_id)}>
        <span class="material-symbols-outlined">content_copy</span>
      </button>
    </>
  );
});
export default CompareButton;
