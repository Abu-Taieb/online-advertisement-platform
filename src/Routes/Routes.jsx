import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import CardDetails from "../pages/Home/Advertisement/CardDetails";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllCompany from "../pages/Home/AllCompany/AllCompany";
import AddPost from "../pages/AddPost/AddPost";

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
        path: "/cardDetails/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allCompany",
        element: <AllCompany></AllCompany>,
      },
      {
        path: "/postAdd",
        element: <AddPost></AddPost>
      }
    ],
  },
]);
