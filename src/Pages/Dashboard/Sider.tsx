import { IoAnalytics, IoSettings, IoStarHalfSharp } from "react-icons/io5";
import { LuGroup } from "react-icons/lu";
import {
  MdDashboard,
  MdDeveloperBoard,
  MdGroup,
  MdOutlineStars,
  MdReport,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewUser } from "../../API/API";

export const Sider = () => {
  const [state, setState] = useState();

  const storage = JSON.parse(localStorage.getItem("user")!);
  useEffect(() => {
    // viewUser(storage?.data?._id).then((res)=>{
    // })
  }, []);

  return (
    <div>
      <div className="w-[300px] h-screen left-0 fixed flex items-center justify-center  ">
        <div className="w-[90%] h-[90%]  ">
          <div className="w-full flex items-center gap-3 font-bold text-[25px] ">
            <div className="w-7 h-7 rounded-[50%] bg-slate-900 " />
            Project Name
          </div>
          <div className="w-full mt-20 mb-[180px]  ">
            <div className="w-full rounded-lg bg-slate-400 p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer  ">
              <MdDashboard size={25} /> Dashboard
            </div>
            <div className="w-full rounded-lg p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-slate-300 duration-300 transition-all ">
              <IoAnalytics size={25} /> Performance
            </div>
            <div className="w-full rounded-lg p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-slate-300 duration-300 transition-all ">
              <MdReport size={25} /> Report
            </div>
            <div className="w-full rounded-lg p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-slate-300 duration-300 transition-all ">
              <MdDeveloperBoard size={25} /> Board
            </div>
            <div className="w-full rounded-lg p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-slate-300 duration-300 transition-all ">
              <MdGroup size={25} /> Teams
            </div>
            <div className="w-full rounded-lg p-3 flex items-center justify-center text-slate-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-slate-300 duration-300 transition-all ">
              <IoSettings size={25} /> Settings
            </div>
          </div>

          <Link to="/pricing">
            <div className="w- full flex gap-3 justify-center p-2 bg-slate-600 animate-bounce shadow-lg items-center rounded-md cursor-pointer hover:bg-slate-400 transition-all duration-300 text-white text-[20px]  ">
              Upgrade <IoStarHalfSharp />
            </div>
          </Link>

          <div className="w-full absolute bottom-3 flex justify-center capitalize ">
            Current Plan: {storage?.data?.plan}
          </div>
        </div>
      </div>
    </div>
  );
};
