import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CompareBody from "./components/CompareBody";
import "./components/styles/comparewrapper.css";
import AlertBox from "../app/alertbox/AlertBox";

const CompareWrapper = forwardRef(({}, ref) => {
  const compareDivRef = useRef();
  const alertRef = useRef();
  const [p_id, setPid] = useState(0);

  function openComparision(pid) {
    setPid(pid);
    compareDivRef.current.classList.toggle("comparewrapper-wrapper-open");
  }

  useImperativeHandle(ref, () => ({
    openComparision,
  }));

  return createPortal(
    <>
      <div ref={compareDivRef} className="comparewrapper-wrapper">
        <div
          className="comparewrapper-close"
          onClick={openComparision.bind(this, 0)}
        >
          <span
            style={{ "--iconsize": "30px" }}
            class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-color"
          >
            cancel
          </span>
        </div>
        <CompareBody p_id={p_id} ref={alertRef} />
      </div>
      <AlertBox ref={alertRef} />
    </>,
    document.body
  );
});

export default CompareWrapper;
