import CrerateTheme from "@/page/Create/Page";
import IndexTheme from "@/page/Index/Page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/create",
    element: (
      <>
        <CrerateTheme />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <IndexTheme />
      </>
    ),
  },
]);
