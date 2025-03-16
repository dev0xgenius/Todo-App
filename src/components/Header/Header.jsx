import { useState } from 'react';
import useThemeSwitch from '../../../utils/hooks/useThemeSwitch.js';

export default function Header() {
  const [theme, setTheme] = useState({
    mode: "dark",
    indicatorImg: "/images/icon-sun.svg",
  });
  
  const imgSource = {
    "dark" : "/images/icon-sun.svg",
    "light" : "/images/icon-moon.svg"
  };
  
  const switchThemeMode = () => (theme.mode == "light") ? "dark" : "light";
  
  const switchTheme = () => {
    const switchedMode = switchThemeMode(theme.mode);
    setTheme(() => (
      {
        mode: switchedMode,
        indicatorImg: imgSource[switchedMode],
      }
    ));
  };
  
  useThemeSwitch(theme);
  
  return (
    <div className="header">
      <h1>T O D O</h1>
      <button onClick={switchTheme}>
        <img src={theme.indicatorImg} alt="" className="themeIndicator"/>
      </button>
    </div>
  )
}