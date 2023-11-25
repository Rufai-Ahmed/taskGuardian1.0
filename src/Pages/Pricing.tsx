import { IoArrowDown, IoCheckmark, IoPeople } from "react-icons/io5";
import { Header } from "../components/Header";
import { LuArrowRight, LuSettings2 } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdCancel,
  MdOutlineDeveloperBoard,
  MdQuestionMark,
  MdSettings,
} from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Pricing = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const storage = JSON.parse(localStorage.getItem("user")!);

  const [change, setChange] = useState(false);

  const changer = () => {
    setChange(!change);
  };
  return (
    <div>
      <Header />

      <div className="w-full min-h-screen py-6  ">
        <div className="w-full text-center mt-16 mb-8 font-bold flex justify-center items-center text-[40px]  ">
          Task Guardian task management Platform plans and pricing
        </div>
        <div className="w-full mb-16 flex justify-center items-center  ">
          <div className="font-light text-lg "> Monthly</div>
          {toggle && toggle ? (
            <div
              onClick={onToggle}
              className="w-[60px] cursor-pointer rounded-[30px] bg-zinc-800 flex h-[30px] items-center justify-end mx-2 "
            >
              <div className="w-[20px] h-[20px] rounded-[50%] bg-white mx-2 " />
            </div>
          ) : (
            <div
              onClick={onToggle}
              className="w-[60px] cursor-pointer rounded-[30px] bg-zinc-800 flex h-[30px] items-center  mx-2 "
            >
              <div className="w-[20px] h-[20px] rounded-[50%] bg-white mx-2 " />
            </div>
          )}

          <div>
            Annually{" "}
            <span className="text-green-500 font-light">
              (More than 25% off)
            </span>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center ">
          {storage && storage?.data?.plan === "freemo" ? (
            <>
              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Bromo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$24" : "$45"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/bromo" : "/bromoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>

              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Premo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$34" : "$50"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/premo" : "/premoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>
            </>
          ) : storage?.data?.plan === "bromo" ? (
            <>
              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Premo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$34" : "$50"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/premo" : "/premoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Freemo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$14" : "$40"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/bromo" : "/freemoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>

              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Bromo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$24" : "$45"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/bromo" : "/bromoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>

              <div className="border p-8 h-[750px] w-[430px] ">
                <div className="font-bold text-[30px] mb-3 mt-3 ">Premo</div>
                <div className="w-full text-md  ">
                  Team up with your colleagues around your APIs.
                </div>

                <div className="mt-[25px]  ">
                  <div className="text-[28px] font-bold ">
                    {toggle ? "$34" : "$50"}
                  </div>
                  <div>Per user/month, billed annually</div>
                </div>

                <Link to={storage ? "/upgrade/bromo" : "/premoRegister"}>
                  <button className="p-3 text-white bg-orange-600 font-bold my-10 w-full text-[20px] rounded-lg ">
                    {storage ? "Upgrade Now" : "Register Now"}
                  </button>
                </Link>

                <div>
                  <div>Highlights of plan features:</div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                  <div className="flex gap-5 items-center mt-1 ">
                    <IoCheckmark className="text-green-800 text-xl font-bold " />
                    Unlimited collaboration for plan members
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-full py-10 flex items-center justify-center flex-col ">
          <div className=" text-[30px]  ">
            Check out our Free plan to start designing, developing, and testing
            APIs.
          </div>
          <div className="p-3 text-[20px] font-bold border rounded-md my-10 ">
            Sign Up
          </div>

          <hr className="w-[75%]" />
        </div>
        <div className="w-full my-10 flex justify-center text-[30px] font-bold ">
          Enterprise solutions
        </div>
        <div className="w-full flex justify-center gap-5 ">
          <div className="w-[70%] justify-between border rounded-md flex ">
            <div className="p-7 w-[350px]">
              <IoPeople className="text-[50px] mb-4 " />

              <div className="text-[30px] mb-32 ">Enterprise Essentials</div>
              <div>
                <div>Key features:</div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Integrate with Enterprise SSO providers
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>

                <div className="mt-[15px]  ">
                  <div className="text-[28px] font-bold ">$49</div>
                  <div>Per user/month, billed annually</div>
                </div>

                <div className="flex w-full gap-5 items-center ">
                  <div className=" w-[120px] flex items-center justify-center rounded-md h-12 text-[18px] my-8 text-white  bg-orange-600  ">
                    Buy Now
                  </div>
                  <div className="text-blue-700 text-[24px] flex items-center gap-2 w-[70%]   ">
                    Learn More <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7 w-[350px]">
              <MdOutlineDeveloperBoard className="text-[50px] mb-4 " />

              <div className="text-[30px] mb-32 ">
                Postman for Internal API Management
              </div>
              <div>
                <div>Key features:</div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Integrate with Enterprise SSO providers
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>

                <div className="mt-[15px]  ">
                  <div className="text-[28px] font-bold ">$49</div>
                  <div>Per user/month, billed annually</div>
                </div>

                <div className="flex w-full gap-5 items-center ">
                  <div className=" w-[120px] flex items-center justify-center rounded-md h-12 text-[18px] my-8 text-white  bg-orange-600  ">
                    Buy Now
                  </div>
                  <div className="text-blue-700 text-[24px] flex items-center gap-2 w-[70%] ">
                    Learn More <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7 w-[350px]">
              <MdSettings className="text-[50px] mb-4 " />

              <div className="text-[30px] mb-32 ">Enterprise Essentials</div>
              <div>
                <div>Key features:</div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Integrate with Enterprise SSO providers
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>

                <div className="mt-[15px]  ">
                  <div className="text-[28px] font-bold ">$49</div>
                  <div>Per user/month, billed annually</div>
                </div>

                <div className="flex w-full gap-5 items-center ">
                  <div className=" w-[120px] flex items-center justify-center rounded-md h-12 text-[18px] my-8 text-white  bg-orange-600  ">
                    Buy Now
                  </div>
                  <div className="text-blue-700 text-[24px] flex items-center gap-2 w-[70%] ">
                    Learn More <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="p-7 w-[350px]">
              <IoPeople className="text-[30px] mb-4 " />

              <div className="text-[30px] mb-32 ">Enterprise Essentials</div>
              <div>
                <div>Key features:</div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Integrate with Enterprise SSO providers
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>
                <div className="flex gap-5 items-center mt-1 ">
                  <IoCheckmark className="text-green-800 text-xl font-bold " />
                  Unlimited collaboration for plan members
                </div>

                <div className="mt-[15px]  ">
                  <div className="text-[28px] font-bold ">$49</div>
                  <div>Per user/month, billed annually</div>
                </div>

                <div className="flex w-full gap-5 items-center ">
                  <div className=" w-[120px] flex items-center justify-center rounded-md h-12 text-[18px] my-8 text-white  bg-orange-600  ">
                    Buy Now
                  </div>
                  <div className="text-blue-700 text-[24px] flex items-center gap-2 w-[70%] ">
                    Learn More <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6 ">
          Enterprise Solutions are billed annually.
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="w-full mt-[70px] mb-10 flex justify-center text-[30px] font-bold ">
            Plan comparison
          </div>
          <hr className="w-[75%] " />
          <div className="w-full sticky top-[40px] flex gap-5 justify-center py-11 bg-white ">
            <div className="w-[240px]">
              <div className="text-[25px] mb-10 ">Basic</div>

              <div>
                <span className="text-[25px] font-bold ">
                  {toggle ? "$14" : "$40"}
                </span>
                <div>Per user/month</div>
              </div>
              <div className="w-full py-3 rounded-lg text-white bg-orange-600 font-bold flex items-center justify-center ">
                Buy Now
              </div>
            </div>
            <div className="w-[240px]">
              <div className="text-[25px] mb-10 ">Professional</div>

              <div>
                <span className="text-[25px] font-bold ">
                  {toggle ? "$14" : "$40"}
                </span>
                <div>Per user/month</div>
              </div>
              <div className="w-full py-3 rounded-lg text-white bg-orange-600 font-bold flex items-center justify-center ">
                Buy Now
              </div>
            </div>
            <div className="w-[240px]">
              <div className="text-[25px] mb-10 ">Entreprise Ultimate</div>

              <div>
                <span className="text-[25px] font-bold ">
                  {toggle ? "$14" : "$40"}
                </span>
                <div>Per user/month</div>
              </div>
              <div className="w-full py-3 rounded-lg text-white bg-orange-600 font-bold flex items-center justify-center ">
                Buy Now
              </div>
            </div>
            <div className="w-[240px]">
              <div className="text-[23px] mb-10 ">Entreprise Ultimate</div>

              <div>
                <span className="text-[25px] font-bold ">$14</span>
                <div>Per user/month</div>
              </div>
              <div className="w-full py-3 rounded-lg border-[2px] border-zinc-500 font-bold flex items-center justify-center ">
                Buy Now
              </div>
            </div>
          </div>
          <hr className="w-[75%] " />
          <div className="w-full  flex gap-5 justify-center py-2">
            <div className="w-[240px] text-[15px] ">
              Team up with your colleagues around your APIs.
            </div>
            <div className="w-[240px] text-[15px] ">
              Team up with your colleagues around your APIs.
            </div>
            <div className="w-[240px] text-[15px] ">
              Team up with your colleagues around your APIs.
            </div>
            <div className="w-[240px] text-[15px] ">
              Team up with your colleagues around your APIs.
            </div>
          </div>
          <div className="w-full flex items-center flex-col mt-10 ">
            <div className="border-t-[1px] w-[75%] h-16 bg-zinc-100 text-[18px] px-2 font-bold flex items-center ">
              API Tooling
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
            <div className="border-t-[1px] w-[75%] h-16 bg-[#fdfdfe] text-[18px] px-2 font-bold flex items-center ">
              <div className="w-[270px]  ">API Client</div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
              <div className="w-[270px] text-green-600 text-[30px] ">
                <IoCheckmark />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen bg-[#f2f2f2] py-16 ">
          <div className="w-full flex justify-center py-11 text-[30px] font-bold  ">
            Add-ons
          </div>

          <div className="w-full flex flex-wrap justify-center gap-5  ">
            <div className="w-[630px] h-[300px] bg-zinc-300 rounded-xl   ">
              <div className="w-full p-4 h-[15%] flex justify-between ">
                <div>Monitoring</div>
                <div className="flex items-center gap-2 text-blue-500 ">
                  Learn more <LuArrowRight />
                </div>
              </div>

              <div className="h-[85%] flex flex-col justify-center rounded-b-xl p-4 bg-white ">
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
                <hr className="my-[30px] " />
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[630px] h-[300px] bg-zinc-300 rounded-xl   ">
              <div className="w-full p-4 h-[15%] flex justify-between ">
                <div>Monitoring</div>
                <div className="flex items-center gap-2 text-blue-500 ">
                  Learn more <LuArrowRight />
                </div>
              </div>

              <div className="h-[85%] flex flex-col justify-center rounded-b-xl p-4 bg-white ">
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
                <hr className="my-[30px] " />
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[630px] h-[300px] bg-zinc-300 rounded-xl   ">
              <div className="w-full p-4 h-[15%] flex justify-between ">
                <div>Monitoring</div>
                <div className="flex items-center gap-2 text-blue-500 ">
                  Learn more <LuArrowRight />
                </div>
              </div>

              <div className="h-[85%] flex flex-col justify-center rounded-b-xl p-4 bg-white ">
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
                <hr className="my-[30px] " />
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[630px] h-[300px] bg-zinc-300 rounded-xl   ">
              <div className="w-full p-4 h-[15%] flex justify-between ">
                <div>Monitoring</div>
                <div className="flex items-center gap-2 text-blue-500 ">
                  Learn more <LuArrowRight />
                </div>
              </div>

              <div className="h-[85%] flex flex-col justify-center rounded-b-xl p-4 bg-white ">
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
                <hr className="my-[30px] " />
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[630px] h-[300px] bg-zinc-300 rounded-xl   ">
              <div className="w-full p-4 h-[15%] flex justify-between ">
                <div>Monitoring</div>
                <div className="flex items-center gap-2 text-blue-500 ">
                  Learn more <LuArrowRight />
                </div>
              </div>

              <div className="h-[85%] flex flex-col justify-center rounded-b-xl p-4 bg-white ">
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
                <hr className="my-[30px] " />
                <div className="w-full flex justify-between">
                  <div>
                    <div className="text-[20px] font-bold ">Pay-as-you-go</div>
                    <div className="flex gap-2  ">
                      <IoCheckmark size={25} className="text-green-600" /> 1,000
                      calls
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[20px] ">$0.75</div>
                    <div>one-time payment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full justify-center  flex ">
              Must be on Postman Basic plan or higher to purchase add-ons.
              Monitoring and mock server add-ons may be selected when purchasing
              a plan.
            </div>
          </div>
        </div>
        <div className="w-full h-screen py-10  ">
          <div className="w-full text-[40px] font-bold flex items-center flex-col  ">
            Postman Flows add-on pricing
            <hr className="w-[75%] mt-8 " />
            <div className="w-[75%] grid grid-cols-3 text-[25px] font-normal  ">
              <div className=" py-8 "></div>
              <div className=" py-8 ">Basic</div>
              <div className=" py-8 ">Professional</div>

              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Cost per Postman Flows user/month on <br /> annual plans{" "}
                <MdQuestionMark className="mr-10 mt-1  text-[20px]" />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                $12 per user/month, billed annually
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                $12 per user/month, billed annually
              </div>

              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Flow Steps per month
                <MdQuestionMark className="mr-10 mt-1  text-[20px]" />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                25,000
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                100,000
              </div>
              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Pay as you go Flows Steps Overage
                <MdQuestionMark className="mr-10 mt-1  text-[20px]" />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                <MdCancel />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                <IoCheckmark />
              </div>
              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Cost per Postman Flows user/month on <br /> annual plans{" "}
                <MdQuestionMark className="mr-10 mt-1  text-[20px]" />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                $12 per user/month, billed annually
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                $12 per user/month, billed annually
              </div>

              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Payload Size
                <MdQuestionMark className="mr-10 mt-1  text-[20px]" />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                1 MB/call
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                5 MB/call
              </div>

              <div className=" border-t bg-[#fdfdfe] items-start py-5 text-[17px] flex  gap-2 justify-between  ">
                Flows Role Management
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                <IoCheckmark />
              </div>
              <div className=" border-t bg-[#fdfdfe] py-5 items-center text-[17px] ">
                <IoCheckmark />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-center flex flex-col ">
          <div className="w-[70%] border-b pb-[30px] text-[40px] font-bold ">
            {" "}
            Frequently asked questions{" "}
          </div>
          <div
            onClick={changer}
            className="w-[70%]   items-center cursor-pointer "
          >
            <div className="flex justify-between py-[30px] w-full ">
              {" "}
              What is the top tier of customer support offered by Postman?{" "}
              {change ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
            </div>

            {change ? (
              <div className="w-[80%] text-[18px] ">
                The Postman Enterprise Ultimate plan offers our top-tier support
                package, with access to our support specialists and a one-day
                response time. Customers on the Enterprise Ultimate plan are
                also assigned a dedicated Customer Success Manager.
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={changer}
            className="w-[70%]   items-center cursor-pointer "
          >
            <div className="flex justify-between py-[30px] w-full ">
              {" "}
              What is the top tier of customer support offered by Postman?{" "}
              {change ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
            </div>

            {change ? (
              <div className="w-[80%] text-[18px] ">
                The Postman Enterprise Ultimate plan offers our top-tier support
                package, with access to our support specialists and a one-day
                response time. Customers on the Enterprise Ultimate plan are
                also assigned a dedicated Customer Success Manager.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full h-full py-20  ">
          <div className="w-full flex items-center text-[40px] font-bold mt-10 flex-col ">
            500,000 companies use Postman{" "}
            <div className="w-[60%] flex justify-center text-[24px] text-center font-normal  mt-5 ">
              Many of the world's top organizations, including 98% of the
              Fortune 500, are using the Postman API Platform today. 500,000
              companies use Postman{" "}
            </div>
          </div>

          <div className="w-full mt-20 flex justify-evenly flex-wrap  ">
            <div className="bg-red-200 w-[100px] h-[40px] "></div>
            <div className="bg-red-200 w-[100px] h-[40px] "></div>
            <div className="bg-red-200 w-[100px] h-[40px] "></div>
            <div className="bg-red-200 w-[100px] h-[40px] "></div>
            <div className="bg-red-200 w-[100px] h-[40px] "></div>
          </div>

          <div className="w-full mt-20  flex justify-center gap-5 ">
            <div className=" bg-orange-600  h-[50px] flex items-center justify-center w-[100px] text-[18px] font-bold text-white rounded-md ">
              Buy Now
            </div>
            <div className=" h-[50px] flex items-center justify-center w-[140px] text-[18px] font-bold text-zinc-700 border rounded-md ">
              Contact Sales
            </div>
          </div>
        </div>
        <div
          className="w-full  flex flex-col items-center
          "
        >
          <div className="w-[70%] py-10 border-t text-[30px] font-bold  ">
            Case studies
            <div className=" w-[60%] text-[18px] font-normal  ">
              See a wide selection of detailed use cases from nearly every
              industry on the Postman case studies page.
            </div>
            <div className="w-full flex gap-5 flex-wrap ">
              <div className="w-[360px] h-[350px] rounded-md border hover:shadow-lg cursor-pointer hover:mb-10 hover:mt-5 mt-10 transition-all duration-300 ">
                <div className="w-full h-[60%] bg-gray-300 flex items-center justify-center "></div>
                <div className="text-[15px] font-normal w-full px-3 mt-5 ">
                  WhatsApp prioritizes quality developer experiences with
                  Postman
                  <div className="mt-10 text-blue-600">Learn more →</div>
                </div>
              </div>
              <div className="w-[360px] h-[350px] rounded-md border hover:shadow-lg cursor-pointer hover:mb-10 hover:mt-5 mt-10 transition-all duration-300 ">
                <div className="w-full h-[60%] bg-gray-300 flex items-center justify-center "></div>
                <div className="text-[15px] font-normal w-full px-3 mt-5 ">
                  WhatsApp prioritizes quality developer experiences with
                  Postman
                  <div className="mt-10 text-blue-600">Learn more →</div>
                </div>
              </div>
              <div className="w-[360px] h-[350px] rounded-md border hover:shadow-lg cursor-pointer hover:mb-10 hover:mt-5 mt-10 transition-all duration-300 ">
                <div className="w-full h-[60%] bg-gray-300 flex items-center justify-center "></div>
                <div className="text-[15px] font-normal w-full px-3 mt-5 ">
                  WhatsApp prioritizes quality developer experiences with
                  Postman
                  <div className="mt-10 text-blue-600">Learn more →</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[70vh] border-t  "></div>
      </div>
    </div>
  );
};
