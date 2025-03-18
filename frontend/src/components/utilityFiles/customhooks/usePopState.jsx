import { useEffect } from "react";

export default function usePopState(setRoute) {
  useEffect(() => {
    window.addEventListener(
      "popstate",
      (ev) => {
        if (!ev.state?.to) {
          setRoute("/");
          return;
        }
        const to = ev.state.to;
        setRoute(to);
      },
      []
    );
  });
}
