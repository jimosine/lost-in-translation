// Import required modules and dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContext from "./context/AppContext";
import ImageProvider from "./context/ImageProvider";

// Create a root to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app wrapped in context providers and in strict mode
root.render(
  <React.StrictMode>
    <AppContext>
      <ImageProvider>
        <App />
      </ImageProvider>
    </AppContext>
  </React.StrictMode>
);

// Report web vitals (optional)
reportWebVitals();