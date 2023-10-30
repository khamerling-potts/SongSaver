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
            path: "/summary",
            element: <Summary />,
          },
        ],
      },
    ],
  },
];

export default routes;
