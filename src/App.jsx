import React from 'react'
import useThemeSwitch from '../utils/hooks/useThemeSwitch.js'
import { useState } from "react";
import TodoDashboard from './components/TodoDashboard';
import "/css/index.css";

export default function App () {
  const [theme, setTheme] = useState({
    mode: "dark",
    indicatorImg: "/images/icon-sun.svg",
  });
  
  const toggleTheme = (evt) => {
    const imgSrc = (theme.mode == "dark") ? 
      "/images/icon-moon.svg" : "/images/icon-sun.svg";

    setTheme(currentTheme => (
      {...currentTheme, 
        mode: (currentTheme.mode == "light") ? "dark" : "light",
        indicatorImg: imgSrc,
      }
    ));
  };
  
  useThemeSwitch(theme);
  
  return (
    <>
      <div className="app-image">
      </div>
      <main className="ui main">
        <div className="header">
          <h1>T O D O</h1>
          <button onClick={toggleTheme}>
            <img src={theme.indicatorImg} alt="" className="themeIndicator"/>
          </button>
        </div>
        <TodoDashboard />
      </main>
    </>
  );
}