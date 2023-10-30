import App from "./App";
import Home from "./pages/Home";
import SavedSongs from "./pages/SavedSongs";
import Summary from "./pages/Summary";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/saved",
        element: <SavedSongs />,
        children: [
          {
            path: "/saved/summary",
            element: <Summary />,
          },
        ],
      },
    ],
  },
];

export default routes;
