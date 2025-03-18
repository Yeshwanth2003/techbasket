import { useContext } from "react";
import ContextTag from "../ContextTag";

// act similar to link tag in react router dom

export default function MyLink({
  to,
  noaction,
  children,
  optionalExecute = null,
}) {
  const { setRoute } = useContext(ContextTag);

  function onNavigate(event) {
    event.preventDefault();
    if (noaction) return;
    setRoute(to);
    window.history.pushState({ to }, null, to);
    if (optionalExecute) optionalExecute();
  }

  return (
    <>
      <a href={to} className="custom-link" onClick={onNavigate.bind(this)}>
        {children}
      </a>
    </>
  );
}
