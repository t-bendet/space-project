import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

// TODO add keyboard nav
// TODO go over each page and adjust fonts sizes ,gaps and sizes

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
    ],
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
