import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingScreen } from "../../components/LoadingScreen";
import { useState } from "react";
import { createAccount, loginAccount } from "../../API/API";
import { SyncLoader } from "react-spinners";

export const Login = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().email().required("Must input email"),
    password: yup.string().min(6).required("Must input password"),
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
    const { email, password } = data;

    loginAccount({ email, password }).then((res: any) => {
      console.log(res);

      if (res?.response?.status === 404) {
        setToggle(false);
        return "Wrong data";
      }
      if (res?.data) {
        localStorage.setItem("user", JSON.stringify(res));

        navigate("/");
      }

      setToggle(false);
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

          <div className="mb-5">
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

          <br />
          <br />

          <div className="w-[95%]">
            <button
              className="w-full flex bg-purple-600 rounded-sm justify-center py-3  text-white transition-all hover:shadow-xl "
              type="submit"
            >
              {toggle ? <SyncLoader color="white" size={10} /> : "Sign in"}
            </button>
            <div className="text-[12px] mt-2 text-center  ">
              Don't have an account?
              <Link to="/register">
                <strong className="text-purple-900">Sign up here</strong>
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
              <button className="w-full flex bg-red-600 rounded-sm justify-center py-3  text-white">
                with Google
              </button>
              <button className="w-full flex bg-blue-600 rounded-sm justify-center py-3  text-white">
                with Facebook
              </button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};
