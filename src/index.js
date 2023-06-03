import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexRoute from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    loader: async () => {},
    errorElement: <></>,
    children: [
      {
        index: true,
        element: <IndexRoute />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
