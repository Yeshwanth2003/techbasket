import MyLink from "../../utilityFiles/RouterConfig/MyLink";
import HeaderDropDown from "./subcomponent/HeaderDropDown";
import "./style/headerpart1.css";

export default function HeaderPart1() {
  return (
    <>
      <div className="hd-p1-wrapper">
        <div className="hd-p1-div1">
          <div className="hd-p1-content">
            <MyLink to={"/profile/orders"}>
              <span className="material-symbols-outlined material-symbols-outlined-color">
                package_2
              </span>
              <span>Your Orders</span>
            </MyLink>
          </div>
          <div className="hd-p1-content">
            <MyLink to={"/profile/saveditem"}>
              <span className="material-symbols-outlined material-symbols-outlined-color">
                favorite
              </span>
              <span>Saved Item</span>
            </MyLink>
          </div>
        </div>
        <div className="hd-p2-div2">
          <div className="hd-p2-content">
            <MyLink to={"/home/about"}>
              <span className="material-symbols-outlined material-symbols-outlined-color">
                info
              </span>
              <span>About Us</span>
            </MyLink>
          </div>
          <div className="h2-p2-content">
            <HeaderDropDown
              currentValue={{ value: "USD", id: 3 }}
              values={[
                { value: "INR", id: 1 },
                { value: "Euro", id: 2 },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
