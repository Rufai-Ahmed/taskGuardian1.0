import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div className="flex flex-col justify-end w-full min-h-screen ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
