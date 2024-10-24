import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Context from "./context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
    <Toaster position="top-right" reverseOrder={false} />
      <App />
    </Context>
  </BrowserRouter>
);
