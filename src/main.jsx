import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { ROUTES } from "./routers/constants";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={ROUTES.BASE_NAME}>
    <Router />
  </BrowserRouter>
);
