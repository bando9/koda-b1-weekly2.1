import { createRoot } from "react-dom/client";
import App from "./app";
import "./app.css";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/scroll-to-top";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
