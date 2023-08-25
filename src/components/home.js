import { Avatar, Fab } from "@mui/material";
import BottomNav from "./bottomNav";
import AccountAvatar from "./custom/accountAvatar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ height: "100dvh", width: "100dvw", overflow: "hidden" }}>
        <AccountAvatar
          sx={{ width: 40, height: 40, position: "absolute", top: 5, right: 5 }}
        />
        <Outlet />
        <BottomNav />
      </div>
    </>
  );
};

export default Home;
