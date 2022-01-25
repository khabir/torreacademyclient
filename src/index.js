import React from "react";
import ReactDOM from "react-dom";
// import 'styles/index.css';
import { store } from "./store/rootStore";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const basename = process.env.PUBLIC_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
