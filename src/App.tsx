import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";
import Routes from "./routes";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
