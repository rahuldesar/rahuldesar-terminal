import Terminal from "@/components/Terminal";
import { useTheme } from "@/hooks/useTheme";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext<((theme: string) => void) | null>(
  null
);

export default function Home() {
  const { isThemeLoaded, setTheme } = useTheme();

  const updateTheme = (theme: string) => {
    setTheme(theme);
  };

  if (!isThemeLoaded) return <></>;
  return (
    <ThemeContext.Provider value={updateTheme}>
      <Terminal />
    </ThemeContext.Provider>
  );
}
