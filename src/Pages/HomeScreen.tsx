import { Link } from "react-router-dom";

export const HomeScreen = () => {
  const user = JSON.parse(localStorage.getItem("user")!);

  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] bg-white ">
        <Link to={`/dashboard/${user?.data?._id}`}>Get Started</Link>
      </div>  
    </div>
  );
};
