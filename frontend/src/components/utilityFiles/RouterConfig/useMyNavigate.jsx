import { useContext } from "react";
import ContextTag from "../ContextTag";

export default function useMyNavigate() {
  const { setRoute } = useContext(ContextTag);
  return (to) => {
    setRoute(to);
    window.history.pushState({ to }, null, to);
  };
}
