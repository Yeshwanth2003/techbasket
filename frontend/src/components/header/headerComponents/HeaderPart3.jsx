import HeaderSearchBox from "./HeaderSearchBox";
import MyLink from "../../utilityFiles/RouterConfig/MyLink";
import "./style/headerpart3.css";
import { useEffect, useRef } from "react";

export default function HeaderPart3({}) {
  const wrapperref = useRef();

  // bring in scroll
  useEffect(() => {
    function onScroll(ev) {
      var height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      if (window.scrollY >= 118) {
        if (height <= 999) return;
        wrapperref.current.classList.add("headerpart3-wrapper-onscroll");
        return;
      }
      try {
        wrapperref.current.classList.remove("headerpart3-wrapper-onscroll");
      } catch {}
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <>
      <div ref={wrapperref} className="headerpart3-wrapper">
        <nav className="headerpart3-navbar">
          <div className="headerpart3-mob-nav">
            {/* mobile nav symbol */}
            <input type="checkbox" id="header3MobNavInput" />
            <label htmlFor="header3MobNavInput">
              <div className="headerpart3-mob-nav-sym">
                <span
                  style={{ "--iconsize": "35px" }}
                  className="material-symbols-outlined material-symbols-outlined-size-customized"
                >
                  menu
                </span>
              </div>
            </label>
          </div>
          <div className="headerpart3-nav-links">
            <ul>
              <MyLink to={"/home"}>
                <li>
                  <span>Home</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </li>
              </MyLink>
              <span className="headerpart3-only-on-mob-nav-li">
                <MyLink to={"/profile/orders"}>
                  <li>
                    <span>Your Orders</span>
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </li>
                </MyLink>
                <MyLink to={"/profile/saveditem"}>
                  <li>
                    <span>Saved Item</span>
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </li>
                </MyLink>
              </span>
              <MyLink to={"/home/category"}>
                <li>
                  <span>Category</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </li>
              </MyLink>
              <MyLink to={"/"} noaction={true}>
                <li>
                  <span>Hot Products</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </li>
              </MyLink>
              <MyLink to={"/home/about"}>
                <li>
                  <span>About</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </li>
              </MyLink>
              <MyLink to={"/"} noaction={true}>
                <li>
                  <span>Contact</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </li>
              </MyLink>
            </ul>
          </div>
        </nav>
        <span className="headerpart3-wrapper-div-search-wrapper">
          <HeaderSearchBox />
        </span>
      </div>
    </>
  );
}
