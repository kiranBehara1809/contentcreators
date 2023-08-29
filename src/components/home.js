import { Avatar, Fab, Typography } from "@mui/material";
import BottomNav from "./bottomNav";
import AccountAvatar from "./custom/accountAvatar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ height: "100dvh", width: "100dvw", overflow: "hidden" }}>
        <div
          style={{
            width: "100dvw",
            display: "flex",
            height : "auto",
            justifyContent: "space-between",
            alignItems : "center"
          }}
        >
          <Typography variant="h6" sx={{left : 5, top : 5, p : 1}}>
            KB
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
            marginTop : 10,
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
