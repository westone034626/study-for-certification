import React from "react";
import Helmet from "react-helmet";
import { Outlet } from "react-router-dom";
import * as tests from "../data/tests";

export async function loader() {
  return Object.values(tests);
}

export default function RootRoute() {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Outlet />
    </React.Fragment>
  );
}
