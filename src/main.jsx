import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./design/css/style.css";
import App from "./pages/App.jsx";
import Weather from "./pages/Weather.jsx";
import Calculator from "./pages/Calculator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
