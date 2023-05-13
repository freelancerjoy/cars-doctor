import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home.jsx";
import Main from "../Layout/Main.jsx";
import Login from "../Pages/Login/Login.jsx";
import Signup from "../Pages/Signup/Signup.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
