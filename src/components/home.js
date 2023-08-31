import { Avatar, Fab, Typography } from "@mui/material";
import BottomNav from "./bottomNav";
import AccountAvatar from "./custom/accountAvatar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const Home = () => {
  const { headerText } = useSelector((state) => state.headerText);
  return (
    <>
      <div style={{ height: "100dvh", width: "100dvw", overflow: "hidden" }}>
        <div
          style={{
            width: "100dvw",
            display: "flex",
            height: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ left: 5, top: 5, p: 1 }}>
            {headerText  || 'welcome '+ auth?.currentUser?.displayName}
          </Typography>
          <AccountAvatar
            sx={{
              width: 40,
              height: 40,
              position: "absolute",
              top: 5,
              right: 5,
            }}
          />
        </div>
        <div
          style={{
            marginTop: 5,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Home;
