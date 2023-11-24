import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAccount, createBromoAccount } from "../../API/API";
import { SyncLoader } from "react-spinners";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const BromoRegister = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);

  const schema = yup.object({
    companyName: yup
      .string()
      .required("Your company's name is required to proceed"),
    email: yup.string().email().required("Email is required to proceed"),
    password: yup.string().required("Password is required to proceed"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
    setToggle(true);

    const { companyName, email, password } = data;

    createBromoAccount({ companyName, email, password }).then((res) => {
      setToggle(false);

      if (res?.response?.status) {
        return "Email already exists";
      } else {
        localStorage.setItem("user", JSON.stringify(res));
        navigate("/");
      }
    });
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
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3 mb-3 "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {" "}
                {errors.companyName?.message}{" "}
              </div>
            </div>
          </div>

          <div>
            <div className=" text-[12px] ">email</div>
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3 mb-3 "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {" "}
                {errors.email?.message}{" "}
              </div>
            </div>
          </div>

          <div>
            <div className=" text-[12px] ">password</div>
            <input
              {...register("password")}
              placeholder="password"
              type="text"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3 mb-3 "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {" "}
                {errors.password?.message}{" "}
              </div>
            </div>
          </div>
          <div>
            <div className=" text-[12px] ">Confirm password</div>
            <input
              {...register("confirm")}
              placeholder="Confirm password"
              type="text"
              className="border h-[40px] w-[95%] rounded-sm outline-none pl-3 mb-3 "
            />
            <div className="w-[95%] justify-end flex  ">
              <div className="text-[12px] text-red-600   ">
                {" "}
                {errors.confirm?.message}{" "}
              </div>
            </div>
          </div>

          <div className="w-[95%] mt-5">
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
              <button className="w-full flex bg-red-600 rounded-sm justify-center py-3  text-white font-sans hover:bg-red-800 transition-all duration-300 ">
                With Premo
              </button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};
