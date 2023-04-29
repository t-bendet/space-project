import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Design from "./pages/Design";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

// TODO remove design page,route and scss

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
      {
        path: "design",
        element: <Design />,
      },
    ],
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
