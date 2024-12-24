import React from 'react'
import TodoDashboard from './components/TodoDashboard';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app-image">
        </div>
        <main className="ui main">
          <div className="header">
            <h1>T O D O</h1>
            <button id="themeSwitch">
              <img src="/images/icon-sun.svg" alt="" className="theme-mode" />
            </button>
          </div>
          <TodoDashboard />
        </main>
      </>
    );
  }
}

export default App