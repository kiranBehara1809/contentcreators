import { Navigate, useRoutes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import PageNotFound from "./components/pageNotFound";
import Journal from "./components/journal";
import AboutCc from "./components/aboutCc";

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
          path: "journal",
          element: <Journal />,
        },
        {
          path: "about",
          element: <AboutCc />,
        },
      ],
    },
  ]);

  return routes;
}
