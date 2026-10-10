import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Scrolls to the #section in the URL, or to the top when moving to a new page
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
};
