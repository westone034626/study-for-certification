import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootErrorElement from "./error-page";
import RootRoute, { loader as rootLoader } from "./routes/root";
import IndexRoute from "./routes/index";
import TestRoute from "./routes/test/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    loader: rootLoader,
    id: "root",
    errorElement: <RootErrorElement />,
    children: [
      {
        index: true,
        element: <IndexRoute />,
      },
      {
        path: "tests/:testId",
        element: <TestRoute />,
      },
      {
        path: "tests/:testId/questions",
        element: <></>,
      },
      {
        path: "tests/:testId/results",
        element: <></>,
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
