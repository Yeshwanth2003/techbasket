import HeaderSearchBox from "./HeaderSearchBox";
import LOGO from "../../../asserts/logo.png";
import "./style/headerlogodiv.css";

export default function HeaderLogoDiv() {
  return (
    <>
      <div className="headerlogodiv-wrapper">
        <div className="headerlogo-holder-div">
          <img className="headerlogo-img" src={LOGO} alt="" />
        </div>
        <span className="headerlogo-div-search-wrapper">
          <HeaderSearchBox />
        </span>
      </div>
    </>
  );
}
