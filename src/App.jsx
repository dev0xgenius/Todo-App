import React from 'react';
import useThemeSwitch from '../utils/hooks/useThemeSwitch.js';
import { useState } from "react";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import "./scss/index.scss";

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
      <div className="background-image"></div>
      <main className="ui main">
        <div className="header">
          <h1>T O D O</h1>
          <button onClick={toggleTheme}>
            <img src={theme.indicatorImg} alt="" className="themeIndicator"/>
          </button>
        </div>
        <Dashboard />
      </main>
    </>
  );
}