import { Avatar } from "@mui/material";

const AccountAvatar = (props) => {
    return (
      <>
        <Avatar
          alt="Sriman Kotaru"
          src="https://i.pravatar.cc/150?img=3"
          sx={props.sx}
        />
      </>
    );
}

export default AccountAvatar;