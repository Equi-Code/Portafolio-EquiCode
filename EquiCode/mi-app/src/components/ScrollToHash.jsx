import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Pequeño timeout para permitir que React renderice la vista
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Si no hay #hash en la URL, sube arriba de todo
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}