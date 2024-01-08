import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Home />,
    errorElement: <Error />,
  },
]);