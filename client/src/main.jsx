import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorker from './serviceWorker.js';


import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {},
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/profiles/:username",
        element: <Profile />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);


serviceWorker.unregister();

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
