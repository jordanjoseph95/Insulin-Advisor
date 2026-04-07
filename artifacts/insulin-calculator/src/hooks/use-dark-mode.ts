import { useEffect, useState } from "react";

function getInitialDark(): boolean {
  try {
    const stored = localStorage.getItem("dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(getInitialDark);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("dark-mode", String(dark));
    } catch {}
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
