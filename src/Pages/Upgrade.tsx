import { useEffect, useState } from "react";
import { toBromo, toPremo } from "../API/API";
import { useNavigate, useParams } from "react-router-dom";

export const Upgrade = () => {
  const [state, setState] = useState("");

  const { plan } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full items-center justify-center flex h-screen">
        <div className="w-[400px] p-4 h-[300px] rounded-lg flex flex-col justify-center bg-zinc-600 text-white ">
          Input your company's unique code here
          <input
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setState(e.target.value);
            }}
            type="text"
            className="w-full outline-none text-black h-10 "
          />
          <div
            className="mt-10 w-full bg-zinc-300 text-black font-bold flex justify-center p-4 hover:bg-zinc-600 duration-500 transition-all cursor-pointer "
            onClick={() => {
              plan === "bromo"
                ? toBromo({ uniqueCode: state }).then((res) => {
                    console.log(res);
                    localStorage.setItem("user", JSON.stringify(res));
                    navigate(`/dashboard/${res.data?._id}`);
                  })
                : toPremo({ uniqueCode: state }).then((res) => {
                    console.log(res);
                    localStorage.setItem("user", JSON.stringify(res));
                    navigate(`/dashboard/${res.data?._id}`);
                  });
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
