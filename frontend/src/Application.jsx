import { lazy, Suspense, useState, useRef } from "react";
import ContextTag from "./components/utilityFiles/ContextTag";
import usePopState from "./components/utilityFiles/customhooks/usePopState";
import Loading from "./components/utilityFiles/Loading";
import CartWrapper from "./components/app/cart/CartWrapper";
import CompareWrapper from "./components/Compare/CompareWrapper";

export default function Application() {
  // router config
  const [route, setRoute] = useState(window.location.pathname);
  // forward backward trigger
  usePopState(setRoute);
  // route configs
  const allHomeMatch = /\/home.*/;
  const allProfileMatch = /\/profile.*/;
  const allSearchMatch = /\/search.*/;
  const allPrdViewMatch = /\/prd-view/;

  // carttoogler
  const cartHolderRef = useRef();
  const compareRef = useRef();

  return (
    <>
      <ContextTag.Provider value={{ setRoute, route }}>
        <Suspense fallback={<Loading />}>
          {(() => {
            if (route.match(allHomeMatch)) {
              const Page = lazy(() => import("./components/app/AppWrapper"));
              return (
                <>
                  <Page ref={{ cartHolderRef, compareRef }} />
                  <CartWrapper ref={cartHolderRef} />
                  <CompareWrapper ref={compareRef} />
                </>
              );
            } else if (route.match(allProfileMatch)) {
              const Page = lazy(() =>
                import("./components/app/userpage/Profile")
              );
              return (
                <>
                  <Page ref={cartHolderRef} />
                  <CartWrapper ref={cartHolderRef} />
                </>
              );
            } else if (route.match(allSearchMatch)) {
              const Page = lazy(() =>
                import("./components/search/SearchWrapper")
              );
              return (
                <>
                  <Page ref={{ cartHolderRef, compareRef }} />
                  <CartWrapper ref={cartHolderRef} />
                  <CompareWrapper ref={compareRef} />
                </>
              );
            } else if (route.match(allPrdViewMatch)) {
              const Page = lazy(() =>
                import("./components/productView/ProductViewWrapper")
              );
              return (
                <>
                  <Page ref={{ cartHolderRef, compareRef }} />
                  <CartWrapper ref={cartHolderRef} />
                  <CompareWrapper ref={compareRef} />
                </>
              );
            } else {
              const Page = lazy(() =>
                import("./components/loginsignup/LoginSignup")
              );
              return (
                <>
                  <Page />
                </>
              );
            }
          })()}
        </Suspense>
      </ContextTag.Provider>
    </>
  );
}
