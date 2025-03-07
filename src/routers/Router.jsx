import { Routes, Route } from "react-router-dom";
import App from "../App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}

export default Router;
