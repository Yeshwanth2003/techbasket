import MyLink from "../../utilityFiles/RouterConfig/MyLink";
import LOGOIMG from "../../../asserts/logo.png";
import "./styles/footer1.css";

export default function Footer1() {
  return (
    <>
      <div className="footer1-wrapper">
        <div className="f1-p1-div">
          <div className="f1-logo-w">
            <img src={LOGOIMG} alt="" />
          </div>
        </div>
        <div className="f1-p2-div">
          <ul>
            <MyLink to={"/"} noaction={true}>
              <li>Tearms of Use</li>
            </MyLink>
            <MyLink to={"/"} noaction={true}>
              <li>Privacy Policy</li>
            </MyLink>
            <MyLink to={"/"} noaction={true}>
              <li>Accessibility</li>
            </MyLink>
          </ul>
        </div>
      </div>
      <div className="f1-w-esc">
        COPYRIGHT 2023 © Magic_mart. ALL RIGHTS RESERVED.
      </div>
    </>
  );
}
