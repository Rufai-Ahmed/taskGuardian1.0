import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingScreen } from "../../components/LoadingScreen";
import { useState } from "react";
import { createAccount } from "../../API/API";
import { SyncLoader } from "react-spinners";

export const Register = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const schema = yup.object({
    companyName: yup.string().required("Must input company name"),
    email: yup.string().email().required("Must input email"),
    password: yup.string().min(6).required("Must input password"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
    setToggle(true);
    const { email, companyName, password } = data;

    createAccount({ email, companyName, password }).then(() => {
      setToggle(false);
      navigate("/login");
    });

    reset();
  });

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      {/* {toggle && <LoadingScreen />} */}
      <div className="border rounded-md w-[500px] min-h-[300px] shadow-sm mx-4 pb-5 ">
        {" "}
        <form className="pl-4 mt-8  " onSubmit={onHandleSubmit}>
          <span className=" font-bold text-[20px]  ">Log in</span>
          <br />
          <br />
          <hr />
          <br />
          <br />

          {/* Input Form */}
          <div>
            <div className=" text-[12px] ">companyName</div>
            <input
              {...register("companyName")}
              placeholder="company name"
              type="text"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3  "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {errors.companyName?.message}
              </div>
            </div>
          </div>

          <div>
            <div className=" text-[12px] ">email</div>
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3  "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {errors.email?.message}
              </div>
            </div>
          </div>

          <div>
            <div className=" text-[12px] ">password</div>
            <input
              {...register("password")}
              placeholder="password"
              type="text"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3  "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {errors.password?.message}
              </div>
            </div>
          </div>
          <div>
            <div className=" text-[12px] ">Confirm password</div>
            <input
              {...register("confirm")}
              placeholder="Confirm password"
              type="text"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3  "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {errors.confirm?.message}
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="w-[95%]">
            <button
              className="w-full flex bg-purple-600 rounded-sm justify-center py-3  text-white transition-all hover:shadow-xl "
              type="submit"
            >
              {toggle ? <SyncLoader color="white" size={10} /> : "Sign up"}
            </button>
            <div className="text-[12px] mt-2 text-center  ">
              Already have an account?
              <Link to="/">
                <strong className="text-purple-900">Sign in here</strong>
              </Link>
            </div>

            <br />

            <div className="flex w-full h-4 items-center  ">
              <div className="border-b w-full " />
              <div className="mx-4 ">or</div>
              <div className="border-b w-full " />
              <hr />
            </div>
            <br />
            <div className="flex mb-4 gap-5 ">
              <Link to="/freemoRegister" className="w-full">
                <button className="w-full flex bg-red-600 rounded-sm justify-center py-3  text-white">
                  with Freemo
                </button>
              </Link>
              <Link to="/bromoRegister" className="w-full">
                <button className="w-full flex bg-blue-600 rounded-sm justify-center py-3  text-white">
                  with Bromo
                </button>
              </Link>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};
