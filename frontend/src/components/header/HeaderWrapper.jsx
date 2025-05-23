import namestore from "./headerReducer/namestore";
import "./headerComponents/style/headerwrapper.css";
import HeaderPart1 from "./headerComponents/HeaderPart1";
import HeaderPart2 from "./headerComponents/HeaderPart2";
import HeaderPart3 from "./headerComponents/HeaderPart3";
import { forwardRef } from "react";

const HeaderWrapper = forwardRef(({}, ref) => {
  const name = namestore.getState().name.name;
  return (
    <>
      <header className="header-wrapper">
        <HeaderPart1 />
        <HeaderPart2 ref={ref} name={name} />
        <HeaderPart3 />
      </header>
    </>
  );
});

export default HeaderWrapper;
