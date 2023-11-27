import { Outlet, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { LuDelete, LuWorkflow } from "react-icons/lu";
import {
  IoAddSharp,
  IoPeople,
  IoStatsChart,
  IoStatsChartOutline,
} from "react-icons/io5";
import { MdAdd, MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { viewProject } from "../../API/API";

export const DashBoardHome = () => {
  const [state, setState]: any = useState({});

  const user = JSON.parse(localStorage.getItem("user")!);

  const { userID, projectID }: any = useParams();

  useEffect(() => {
    viewProject(projectID).then((res) => {
      setState(res.data);
    });
  }, []);
  console.log(state);

  return (
    <div>
      <div className="w-[calc(100vw-300px)] flex flex-col items-center bg-zinc-100 min-h-screen">
        <div className="w-full h-[130px] flex items-center ml-7 text-[34px] font-bold text-slate-900  ">
          Dashboard
        </div>

        <div className="w-full flex flex-wrap justify-center">
          <div className="w-[300px] bg-white mr-10 flex gap-4 shadow-md justify-center items-center rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[40px] ">
              <IoPeople />
            </div>
            <div className="text-[24px] font-bold  ">
              13
              <div>Total Staffers</div>
            </div>
          </div>
          <div className="w-[300px] bg-white mr-10 flex gap-4 shadow-md items-center justify-center p-3 rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[40px] ">
              <IoStatsChart />
            </div>
            <div className="text-[24px] font-bold  ">
              50%
              <div> WorkFlow</div>
            </div>
          </div>
          <div className="w-[300px] bg-white mr-10 flex gap-4 shadow-md items-center justify-center p-3 rounded-lg">
            <div className="w-20 h-20 rounded-[50%] bg-slate-300 flex items-center justify-center text-[30px] ">
              <IoPeople />
            </div>
            <div className="text-[24px] font-bold  ">
              13
              <div>Total Staffers</div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10 ">
          <div className="w-[90%] bg-white h-[70vh] rounded-lg shadow-lg ">
            <div className="w-full flex justify-evenly text-[30px] font-bold mt-5 ">
              <div>Total Budget: 40K</div>
              <div>Cash Given Out: 40K</div>
            </div>

            <div className="w-full mt-5 flex justify-evenly ">
              <div className="w-[250px] rounded-md bg-purple-400 text-white flex flex-col items-center  ">
                <div>Todo</div>
                <div className="w-full bg-white text-black min-h-10 flex flex-col gap-4  ">
                  {state?.myTask?.todo.data.map((el: any) => (
                    <div className="w-full mt-1 min-h-[100px] bg-purple-200 relative ">
                      <div className="p-3">
                        <div className="mb-5 font-mono">
                          Task: {el.taskTitle}
                        </div>
                        <div className="mb-5 font-mono">
                          Deadline:{el.deadline}{" "}
                        </div>
                        <div className="mb-2 font-mono">Cost: {el.budget} </div>

                        <MdDeleteForever size={20} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex justify-center p-2 border-t-white border-t-4 cursor-pointer ">
                  <IoAddSharp size={18} />
                </div>
              </div>

              <div className="w-[250px] rounded-md bg-indigo-400 text-white flex flex-col items-center ">
                <div>Progress</div>
                <div className="w-full bg-white h-10 "> </div>
              </div>
              <div className="w-[250px] rounded-md bg-zinc-700 text-white flex flex-col items-center ">
                <div>Done</div>
                <div className="w-full bg-white h-10 "> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
