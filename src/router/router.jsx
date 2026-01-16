import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    errorElement: <h2 className="text-4xl text-center">Route not found</h2>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"register",
            element: <Register></Register>
        },
        {
          path: "signin",
          element:<SignIn></SignIn>
        },
        {
          path: "jobs/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
        },
        {
          path: "jobApply/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        }
    ]
  },
]);
export default router;