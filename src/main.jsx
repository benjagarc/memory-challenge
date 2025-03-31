import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AttempsProvider } from "./store/Attemps";
import { ErrorsProvider } from "./store/Errors/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AttempsProvider>
      <ErrorsProvider>
        <App />
      </ErrorsProvider>
    </AttempsProvider>
  </StrictMode>
);
