"use client";

import { useEffect, useRef } from "react";

// const SCRIPT_ID = "05056b670cb2329a740b429c10c24237443072ca";
// const WIDGET_ID = "1618186";

const SCRIPT_ID = "7eccf9a80d8562842b77ed1b0e262a4c48456876";
const WIDGET_ID = "1620521";


const WIDGET_SRC = `https://novaya-planeta-academy.ru/pl/lite/widget/script?id=${WIDGET_ID}`;

export default function GetCourseWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = WIDGET_SRC;
    script.async = true;

    script.onload = () => {
      if (document.readyState !== "loading") {
        document.dispatchEvent(new Event(`StartWidget${SCRIPT_ID}`));
      }
    };

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="widget-shell">
      <div ref={containerRef} className="widget-shell__frame" />
      <noscript>Для записи на вебинар включите JavaScript в браузере.</noscript>
    </div>
  );
}
