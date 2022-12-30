import React from "react";
import { useRef, useEffect } from "react";

export const useOutClick = (callback: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    function modalOutClick(event: { target: any }) {
      const target = event.target;
      const element = ref.current;

      if (
        (element.contains(target) && target.name != "password") ||
        target.tagName == "BUTTON"
      ) {
        callback();
      } else {
      }
    }

    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);
  return ref;
};
