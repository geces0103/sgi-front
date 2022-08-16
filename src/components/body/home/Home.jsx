import React from "react";
import logo from '../../../logo.svg';

export default props => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              SGI
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </header>
        </div>
      );
}
