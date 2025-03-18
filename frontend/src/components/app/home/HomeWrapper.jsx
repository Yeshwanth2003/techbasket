import { forwardRef } from "react";
import HomeRunner from "./homecomponents/HomeRunner";
import HomeRack from "./homecomponents/HomeRack";
import {
  getMostWantedRoute,
  getMostRecentRoute,
} from "../../utilityFiles/urlMap";
import "./homecomponents/styles/homewrapper.css";
import HomeRecom from "./homecomponents/HomeRecom";

const HomeWrapper = forwardRef(({}, ref) => {
  return (
    <>
      <div className="h-w-wrapper">
        <HomeRunner />
        <HomeRecom ref={ref} />
        <HomeRack
          ref={ref}
          pageTitle={"Hot Selling Products"}
          route={getMostWantedRoute}
        />
        <HomeRack
          ref={ref}
          pageTitle={"Most Recent"}
          route={getMostRecentRoute}
        />
      </div>
    </>
  );
});

export default HomeWrapper;
