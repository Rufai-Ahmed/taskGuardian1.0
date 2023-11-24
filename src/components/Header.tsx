import { IoDesktopOutline, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../Assets/logo.svg";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const user = JSON.parse(localStorage.getItem("user")!);

  return (
    <div>
      <div className=" z-10 fixed bg-white flex w-full h-[70px] border-b items-center justify-center py-[40px] ">
        <div className="flex justify-between w-[96%] ">
          <div>
            <img src={logo} className="w-[100px] " />
          </div>
          <div className="flex items-center  ">
            {user ? (
              ""
            ) : (
              <div className="flex items-center bg-purple-500 text-white text-[20px] min-w-10 px-5 mx-3 cursor-pointer py-1 border rounded-md ">
                Log in
              </div>
            )}
            {user ? (
              <div
                onClick={onToggle}
                className="w-12 rounded-full h-12  flex justify-center items-center cursor-pointer bg-orange-600 text-white font-bold text-[20px] mx-3 "
              >
                A
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center bg-gray-200 px-2 py-1 border rounded-md ">
              <NavLink
                to="/dark"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-2 text-[35px] shadow-sm bg-white text-[#565656] py-1 px-2 rounded-[4px]"
                    : "mx-2 text-[35px]  py-1 px-2 rounded-[4px]"
                }
              >
                <IoSunnyOutline size={25} />
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-2 text-[35px] shadow-sm text-[#565656]  bg-white py-1 px-2 rounded-[4px]"
                    : "mx-2 text-[35px]  py-1 px-2 rounded-[4px]"
                }
              >
                <MdOutlineNightsStay size={25} />
              </NavLink>

              <IoDesktopOutline className="mx-1 text-[35px]  py-1 px-2 rounded-[4px] " />
            </div>
          </div>
        </div>
      </div>

      {toggle && toggle ? (
        <div className="w-[400px] h-[200px] bg-white shadow-md border rounded-md absolute right-[13%] top-[10%]  ">
          <div className="flex mt-6 ">
            <div className="w-16 rounded-full h-16  flex justify-center items-center bg-red-500 text-white font-bold text-[20px] mx-3 ">
              A
            </div>

            <div className="text-[20px] font-bold  ">
              <div className="text-[20px] font-bold  ">Name</div>
              <div className="leading-3 font-normal ">sub</div>
            </div>
          </div>

          <div
            onClick={() => {
              localStorage.removeItem("user");
              setToggle(false);
            }}
            className="mt-6 pl-4 py-3  flex items-center gap-6 text-[gray] hover:bg-[lightgray] cursor-pointer transition-all duration-300 "
          >
            <LuLogOut />
            <span>Log Out</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
