import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    // Usamos requestAnimationFrame para sincronizar con el renderizado
    const animationFrameId = requestAnimationFrame(() => {
      if (hash) {
        const id = getHashId(hash);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });

    return () => cancelAnimationFrame(animationFrameId);
  }, [pathname, hash, navigationType]);

  return null;
}