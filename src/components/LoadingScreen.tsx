import { SyncLoader } from "react-spinners";

export const LoadingScreen = () => {
  return (
    <div
      style={{
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 4px )",
        // -webkit-backdrop-filter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SyncLoader color="blue" />
    </div>
  );
};
