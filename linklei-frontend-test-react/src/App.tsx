import React from "react";
import { Header } from "./components/header/header";
import logo from "./logo.svg";
import { AppStyled } from "./styles/App.style";

function App() {
  let version = React.version;

  return (
    <AppStyled className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>React Version: {version}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppStyled>
  );
}

export default App;
