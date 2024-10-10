import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "../Pages/MainPage/MainPage";
import { DetailPage } from "../Pages/DetailPage/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/detail",
    element: <DetailPage></DetailPage>,
  },
])