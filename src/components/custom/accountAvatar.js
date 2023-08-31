import { Avatar, Typography, Popover, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { auth } from "../../firebase";
import { useState } from "react";
import { useApi } from "../contexts/ApiContext";

const AccountAvatar = (props) => {
  const api = useApi()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {
      try{
        api.logout();
      }catch(e){
        console.error(e)
      }
    }

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <>
        <Avatar
          alt={auth?.currentUser?.displayName}
          title={auth?.currentUser?.displayName}
          src={auth?.currentUser?.photoURL}
          sx={props.sx}
          onClick={handleClick}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box>
            <List>
              <ListItem
                disablePadding
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt={auth?.currentUser?.displayName}
                  title={auth?.currentUser?.displayName}
                  src={auth?.currentUser?.photoURL}
                  sx={{ height: 100, width: 100 }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={auth?.currentUser?.displayName} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={auth?.currentUser?.email} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      auth?.currentUser?.emailVerified
                        ? "Email Verified"
                        : "Not Verified"
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"Logout"}
                    onClick={() => handleLogout()}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Popover>
      </>
    );
}

export default AccountAvatar;