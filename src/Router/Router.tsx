import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import { SignIn } from "../Pages/SignIn";
import { PrivateRouter } from "./PrivateRouter";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { FreemoRegister } from "../Pages/Auth/FreemoRegister";
import { BromoRegister } from "../Pages/Auth/BromoRegister";
import { Pricing } from "../Pages/Pricing";
import { DashBoardLayout } from "../Pages/Dashboard/DashboardLayout";
import { Upgrade } from "../Pages/Upgrade";
import { Projects } from "../Pages/Dashboard/Projects";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/dark",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/freemoRegister",
    element: <FreemoRegister />,
  },
  {
    path: "/bromoRegister",
    element: <BromoRegister />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/upgrade/:plan",
    element: <Upgrade />,
  },
  {
    path: "/dashboard/:userID/:projectID",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
    ],
  },
  {
    path: "/projects",
    index: true,
    element: <Projects />,
  },
]);
