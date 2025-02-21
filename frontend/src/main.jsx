import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from './App.jsx'
//import HomePage from "./Components/Mainpage";
import Orderpage from "./Components/Orderpage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Orderpage />
  </StrictMode>
);
