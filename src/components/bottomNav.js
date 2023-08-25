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
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.4) !important",
          backdropFilter: "blur(50px)",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          sx={{ background: "rgba(255,255,255,0.4) !important" }}
          onChange={(event, newValue) => {
            setValue(newValue);
            switch (newValue) {
                case 0 : {
                    navigate("vehicles")
                    break;
                }
                case 1 : {
                    navigate("ads");
                    break;
                }
                case 2 : {
                    navigate("gallery");
                    break;
                }
                case 3 : {
                    navigate("trips");
                    break;
                }
                case 4 : {
                    navigate("about");
                    break;
                }
                default : {
                   navigate("vehicles"); 
                }
            }
          }}
        >
          <BottomNavigationAction
            label="Vehicles"
            icon={
              <IconDisplayer
                src={"./icons/bmw.svg"}
                style={{ width: 20, height: 20 }}
              />
            }
          />
          <BottomNavigationAction
            label="Ads"
            icon={
              <IconDisplayer
                src={"./icons/ads.svg"}
                style={{ width: 20, height: 20 }}
              />
            }
          />
          <BottomNavigationAction
            label="Gallery"
            icon={
              <IconDisplayer
                src={"./icons/gallery.svg"}
                style={{ width: 20, height: 20 }}
              />
            }
          />
          <BottomNavigationAction
            label="Trips"
            icon={
              <IconDisplayer
                src={"./icons/trips.svg"}
                style={{ width: 20, height: 20 }}
              />
            }
          />
          <BottomNavigationAction
            label="About"
            icon={<AccountAvatar sx={{ width: 20, height: 20 }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomNav;
