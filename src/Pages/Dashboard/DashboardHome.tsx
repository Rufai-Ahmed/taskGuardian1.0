import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LuWorkflow } from "react-icons/lu";
import { IoPeople, IoStatsChart, IoStatsChartOutline } from "react-icons/io5";

export const DashBoardHome = () => {
  return (
    <div>
      <div className="w-[calc(100vw-600px)] bg-zinc-100 min-h-screen">
        <div className="w-full h-[140px] flex items-center ml-7 text-[34px] font-bold text-slate-900  ">
          Dashboard
        </div>

        <div className="w-full flex px-2 gap-10 justify-center">
          <div className="w-[300px] bg-white flex gap-4 shadow-md p-5 rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[40px] ">
              <IoPeople />
            </div>
            <div className="text-[24px] font-bold  ">
              13
              <div>Total Staffers</div>
            </div>
          </div>
          <div className="w-[300px] bg-white flex gap-4 shadow-md p-5 rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[40px] ">
              <IoStatsChart />
            </div>
            <div className="text-[24px] font-bold  ">
              50%
              <div> WorkFlow</div>
            </div>
          </div>
          <div className="w-[300px] bg-white flex gap-4 shadow-md p-5 rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[30px] ">
              <IoPeople />
            </div>
            <div className="text-[24px] font-bold  ">
              13
              <div>Total Staffers</div>
            </div>
          </div>
        </div>

        <div className="w-full px-5 ">
          <div className="w-95% bg-white"></div>
        </div>
      </div>
    </div>
  );
};
