import { useEffect } from "react";

export default function useThemeSwitch (switchState) {
  useEffect(() => {
    const themeStylesheet = document.querySelector("#themeStylesheet");
    let stylesheetHref = themeStylesheet.href;
    
    if (switchState.mode == "light") stylesheetHref = "src/css/light-theme.css"; 
    else if (switchState.mode == "dark") stylesheetHref = "src/css/dark-theme.css";
    themeStylesheet.href = stylesheetHref;
    
  }, [switchState]);
}