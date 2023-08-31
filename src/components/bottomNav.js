import { BottomNavigation, Paper, BottomNavigationAction, Avatar } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import AccountAvatar from "./custom/accountAvatar";
import IconDisplayer from "./custom/iconDisplayer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HEADER_TEXT_ACTIONS } from "../store/slices/headerText";


const BottomNav = () => {
    const [ value, setValue ] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <>
      <Paper className="bottomNav" elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{ background: "rgba(255,255,255,0.23) !important" }}
          onChange={(event, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0: {
                navigate("journal");
                dispatch(HEADER_TEXT_ACTIONS.setHeaderText("Journal"))
                break;
              }
              case 1: {
                navigate("journal");
                dispatch(HEADER_TEXT_ACTIONS.setHeaderText("Announcements"));
                break;
              }
              case 2: {
                navigate("about");
                dispatch(HEADER_TEXT_ACTIONS.setHeaderText("About BSY"));
                break;
              }
              default: {
                navigate("about");
                dispatch(HEADER_TEXT_ACTIONS.setHeaderText("About BSY"));
              }
            }
          }}
        >
          {/* <BottomNavigationAction
            label="Journal"
            icon={
              <IconDisplayer
                src={"/icons/dairy.svg"}
                alt={"Journal"}
                style={{ width: 30, height: 30 }}
              />
            }
          /> */}
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
            icon={
              <Avatar
                alt="Bayya Sunny Yadav"
                src="../bsy.jpeg"
                sx={{ width: 30, height: 30, cursor: "pointer" }}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomNav;
