import { IoCheckmark, IoPeople } from "react-icons/io5";
import { Header } from "../components/Header";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const storage = JSON.parse(localStorage.getItem("user")!);

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
                    {storage ? "Upgrade Now" : "Register Now"}
                  </div>
                  <div className="text-blue-700 text-[24px] flex items-center gap-2 w-[70%]   ">
                    Learn More <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
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
              <div className="text-[25px] mb-10 ">Basic</div>

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
          </div>
        </div>
      </div>
    </div>
  );
};
