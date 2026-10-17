import './index.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingApp from "./LandingApp.jsx";

// Keep the CSS imports from your existing main.jsx above.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingApp />
  </StrictMode>
);