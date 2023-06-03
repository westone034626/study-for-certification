import { Outlet } from "react-router-dom";
import * as tests from "../data/tests";

export async function loader() {
  return Object.values(tests);
}

export default function RootRoute() {
  return <Outlet />;
}
