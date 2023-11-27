import {
  IoAddCircle,
  IoAnalytics,
  IoSettings,
  IoStarHalfSharp,
} from "react-icons/io5";
import { LuGroup } from "react-icons/lu";
import {
  MdDashboard,
  MdDeveloperBoard,
  MdGroup,
  MdOutlineStars,
  MdReport,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewUser, viewUserProject } from "../../API/API";
import { FaAngleDown, FaProjectDiagram } from "react-icons/fa";

export const Sider = () => {
  const [state, setState]: any = useState();

  const storage = JSON.parse(localStorage.getItem("user")!);

  const { userID }: any = useParams();
  useEffect(() => {
    viewUserProject(userID).then((res) => {
      console.log("res", res);

      setState(res);
    });
  }, []);

  return (
    <div>
      <div className="w-[300px] min-h-screen left-0 fixed flex items-start justify-center top-0 pr-4 ">
        <div className="w-[90%] h-[100%] flex flex-col   ">
          <div className="w-full flex items-center gap-3 font-bold text-[25px] my-10 ">
            <div className="w-7 h-7 rounded-[50%] bg-orange-900 " />
            {state?.data.companyName}
          </div>
          <div className="w-full    ">
            <div className=" rounded-lg bg-orange-400 p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer  ">
              <MdDashboard className="ml-10" size={25} /> Dashboard
            </div>
            <Link to="/projects">
              <div className="w-full rounded-lg p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-orange-300 duration-300 transition-all ">
                <FaProjectDiagram className="ml-10" size={25} /> Projects{" "}
                <FaAngleDown />
              </div>
              {state &&
                state?.data?.project.map((el: any) => (
                  <>
                    <div className="w-full justify-center text-bold flex ">
                      <Link to={`/dashboard/${userID}/${el._id}`}>
                        {el.projectName}
                      </Link>
                    </div>
                    <div className="w-full flex items-center gap-2 text-orange-600 justify-center ">
                      Add Project <IoAddCircle />
                    </div>
                  </>
                ))}
            </Link>
            <div className="w-full rounded-lg p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-orange-300 duration-300 transition-all ">
              <MdReport className="ml-10" size={25} /> Report
            </div>
            <div className="w-full rounded-lg p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-orange-300 duration-300 transition-all ">
              <MdDeveloperBoard className="ml-10" size={25} /> Board
            </div>
            <div className="w-full rounded-lg p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-orange-300 duration-300 transition-all ">
              <MdGroup className="ml-10" size={25} /> Teams
            </div>
            <div className="w-full rounded-lg p-3 flex items-center  text-orange-900 text-[18px] gap-4 font-bold my-3 cursor-pointer hover:bg-orange-300 duration-300 transition-all ">
              <IoSettings className="ml-10" size={25} /> Settings
            </div>
          </div>

          <Link to="/pricing">
            <div className="w- flex gap-3 justify-center p-2 px-[70px] bg-orange-600 animate-bounce shadow-lg items-center rounded-md cursor-pointer hover:bg-orange-400 transition-all duration-300 text-white text-[20px] absolute bottom-[40px]  ">
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
