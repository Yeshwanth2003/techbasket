import { useState } from "react";
import useMyNavigate from "../../utilityFiles/RouterConfig/useMyNavigate";
import "./style/headersearchbox.css";

export default function HeaderSearchBox() {
  const [searchVal, setSearchVal] = useState("");
  const nav = useMyNavigate();

  // subscribe to search
  function onSubmit(ev) {
    ev.preventDefault();
    // fetch results
    if (searchVal.length === 0) return;
    nav(`/search?key=${searchVal}`);
  }
  return (
    <>
      <form onSubmit={onSubmit.bind(this)}>
        <div className="headersearchbox-wrapper">
          <div className="headersearchbox-input-wrapper">
            <input
              placeholder="Search for items"
              type="text"
              className="headersearchbox-input"
              onChange={(ev) => setSearchVal(ev.target.value)}
            />
          </div>
          {/* handle search */}
          <button type="submit">
            <span
              style={{ "--iconsize": "30px" }}
              className="material-symbols-outlined material-symbols-outlined-size-customized"
            >
              search
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
