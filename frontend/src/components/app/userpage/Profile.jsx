import React, { forwardRef, lazy, Suspense, useContext } from "react";
import namestore from "../../header/headerReducer/namestore";
import HeaderPart2 from "../../header/headerComponents/HeaderPart2";
import HeaderPart3 from "../../header/headerComponents/HeaderPart3";
import useMyNavigate from "../../utilityFiles/RouterConfig/useMyNavigate";
import ContextTag from "../../utilityFiles/ContextTag";
import Loading from "../../utilityFiles/Loading";
import FooterWrapper from "../../footer/FooterWrapper";
import "./profilecomponents/styles/profile.css";

const Profile = forwardRef(({}, ref) => {
  const name = namestore.getState().name.name;
  const customNav = useMyNavigate();
  // if no name or null or false the redirect to home
  if (!name) customNav("/home");

  const { route } = useContext(ContextTag);

  return (
    <>
      <div className="profile-wrapper">
        <header className="profile-header">
          <HeaderPart2 name={name} ref={ref} />
          <HeaderPart3 />
        </header>
        <Suspense fallback={<Loading />}>
          {(() => {
            if (route === "/profile/createseller") {
              const Page = lazy(() => import("./profilecomponents/Seller"));
              return (
                <>
                  <Page name={name} />
                </>
              );
            } else if (route === "/profile/checkout") {
              const Page = lazy(() =>
                import("./profilecomponents/checkout/CheckoutWrapper")
              );
              return (
                <>
                  <Page />
                </>
              );
            } else {
              const Page = lazy(() =>
                import("./profilecomponents/ProfileBody")
              );
              return (
                <>
                  <Page name={name} />
                </>
              );
            }
          })()}
        </Suspense>
        <FooterWrapper />
      </div>
    </>
  );
});

export default Profile;
