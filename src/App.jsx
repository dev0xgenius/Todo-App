import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import "./scss/index.scss";

export default function App () {
  return (
    <>
      <div className="background-image"></div>
      <main className="ui main">
        <Header />
        <Dashboard />
      </main>
    </>
  );
}