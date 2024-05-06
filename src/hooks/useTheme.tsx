import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

const DEFAULT_THEME = "default";

export const useTheme = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const localThemeName = getLocalStorage("theme");
    localThemeName ? setTheme(localThemeName) : setTheme(DEFAULT_THEME);
    document.body.classList.add(
      localThemeName ? localThemeName : DEFAULT_THEME
    );
    setIsThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (theme == DEFAULT_THEME) {
      let bodyClassList = document.body.classList;
      bodyClassList.add(theme);
    } else {
      setLocalStorage("theme", theme);
      let localThemeName = getLocalStorage("theme");
      localThemeName ? setTheme(localThemeName) : setTheme(DEFAULT_THEME);
      let bodyClassList = document.body.classList;
      let bodyClassArray = Array.from(document.body.classList);
      const olderThemeClass = bodyClassArray.pop() as string;
      bodyClassList.remove(olderThemeClass);
      bodyClassList.add(theme);
    }
  }, [theme]);

  return { theme, isThemeLoaded, setTheme };
};
