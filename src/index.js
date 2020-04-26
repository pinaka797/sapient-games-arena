import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <AppBar title="Sapient Games Arena" showMenuIconButton={false} />
      <App />
    </div>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
