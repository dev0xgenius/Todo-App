localStorage.setItem('theme', 'dark');

const appTheme = document.querySelector('#theme');
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', handleThemeSwitch);

function handleThemeSwitch(event) {
  const themeSrc = "./src/css/";
  const themeImg = document.querySelector('.theme-mode');
  let themes = ['light-theme.css', 'dark-theme.css'];
  
  let theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    localStorage.setItem('theme', 'light');
    appTheme.href = `${themeSrc}${themes[0]}`;

    themeImg.src = "/images/icon-moon.svg";
  } else if (theme == 'light') {
    localStorage.setItem('theme', 'dark');
    appTheme.href = `${themeSrc}${themes[1]}`;

    themeImg.src = "/images/icon-sun.svg"
  }
}