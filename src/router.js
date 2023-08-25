import { Navigate, useRoutes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import VehicleHome from "./components/vehicles/v_home";
import PageNotFound from "./components/pageNotFound";

export default function Router() {
  const routes = useRoutes([
    { path: "", element: <Login /> },
    { path: "login", element: <Login /> },
    { path: "*", element: <PageNotFound /> },
    {
      path: "pages",
      element: <Home />,
      children: [
        {
          path: "random",
          element: <h1>random</h1>,
        },
        {
          path: "vehicles",
          element: <VehicleHome />,
        },
        {
          path: "ads",
          element: <VehicleHome />,
        },
        {
          path: "trips",
          element: <VehicleHome />,
        },
        {
          path: "about",
          element: <VehicleHome />,
        },
        {
          path: "gallery",
          element: <VehicleHome />,
        },
      ],
    },
  ]);

  return routes;
}
