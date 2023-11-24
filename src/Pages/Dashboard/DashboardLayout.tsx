import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sider } from "./Sider";
import { DashBoardHome } from "./DashboardHome";
import { DashBoardMessage } from "./DashboardMessage";

export const DashBoardLayout = () => {
  return (
    <div className="flex">
      <div className="w-full  flex justify-center ">
        <Sider />
        <DashBoardHome />
      </div>
      <DashBoardMessage />
    </div>
  );
};
