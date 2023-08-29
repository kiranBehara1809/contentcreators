import { BottomNavigation, Paper, BottomNavigationAction } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import AccountAvatar from "./custom/accountAvatar";
import IconDisplayer from "./custom/iconDisplayer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BottomNav = () => {
    const [ value, setValue ] = useState(0)
    const navigate = useNavigate()

  return (
    <>
      <Paper
        className="bottomNav"
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          sx={{ background: "rgba(255,255,255,0.4) !important" }}
          onChange={(event, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0: {
                navigate("journal");
                break;
              }
              case 1: {
                navigate("journal");
                break;
              }
              case 2: {
                navigate("journal");
                break;
              }
              case 3: {
                navigate("journal");
                break;
              }
              default: {
                navigate("journal");
              }
            }
          }}
        >
          <BottomNavigationAction
            label="Journal"
            icon={
              <IconDisplayer
                src={"/icons/dairy.svg"}
                alt={"Journal"}
                style={{ width: 30, height: 30 }}
              />
            }
          />
          <BottomNavigationAction
            label="Meet"
            icon={
              <IconDisplayer
                src={"/icons/gmeet.svg"}
                alt={"Meet"}
                style={{ width: 30, height: 30 }}
              />
            }
          />
          <BottomNavigationAction
            label="Announcement"
            icon={
              <IconDisplayer
                src={"/icons/announcement.svg"}
                alt={"announcement"}
                style={{ width: 30, height: 30 }}
              />
            }
          />
          <BottomNavigationAction
            label="About"
            icon={<AccountAvatar sx={{ width: 30, height: 30 }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomNav;
