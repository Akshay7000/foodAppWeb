import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./index.css";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { theme } from "./theme/theme.config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ScrollToTop />
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();
