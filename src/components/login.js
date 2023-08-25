import {
  Avatar,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ToggleBtn from "./custom/toggleButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("pages")
    }
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
          width: "100%",
        }}
      >
        <Grid item>
          <Card
            sx={{ width: 300, height: 300, p: 1, position: "relative" }}
            className="glassCard"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Avatar
                alt="Sriman Kotaru"
                src="https://i.pravatar.cc/150?img=3"
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 2,
                fontWeight: "500",
              }}
            >
              Kiran Behara
            </Typography>

            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{
                width: "95%",
                position: "absolute",
                bottom: 20,
                left: 0,
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Login with Google
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
