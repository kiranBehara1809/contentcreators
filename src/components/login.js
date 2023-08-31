import {
  Alert,
  Avatar,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ToggleBtn from "./custom/toggleButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApi } from "./contexts/ApiContext";

const Login = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handleGoogleSignin = async () => {
    setError("");
    setDisableBtn(true);
    try {
      await api
        ?.signInWithGoogle()
        .then((res) => {
          navigate("/pages");
          setError("");
          setDisableBtn(false);
          sessionStorage.setItem("LOGIN_STATUS", "true");
        })
        .catch((e) => {
          setDisableBtn(false);
          console.log("Error while Logging in with Gmail ----->  " + e);
          setError("Error while Logging in with Gmail");
        });
    } catch (e) {
      setDisableBtn(false);
      console.log(`Error While Login with Google Account ----> `, e);
      sessionStorage.setItem("LOGIN_STATUS", "false");
    }
  };

  // const changeTheme = () => {
  //   document.body.style.background = "var(--bgsvg1)";
  //   document.body.style.height = "100%";
  //   document.body.style.backgroundPosition = "center";
  //   document.body.style.backgroundRepeat = "no-repeat";
  //   document.body.style.backgroundSize = "cover";
  // }
  const handleSocialMedia = (url) => {
    window.open(url);
  };
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
            sx={{ width: 300, height: 340, p: 1, position: "relative" }}
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
                alt="Bayya Sunny Yadav"
                src="./bsy.jpeg"
                sx={{ width: 150, height: 150, mt: 2, cursor: "pointer" }}
              />
            </div>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 2,
                fontWeight: "600",
              }}
            >
              Bayya Sunny Yadav
            </Typography>

            <Button
              onClick={handleGoogleSignin}
              variant="contained"
              disabled={disableBtn}
              sx={{
                width: "95%",
                position: "absolute",
                bottom: 20,
                left: 0,
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              <img
                src="./icons/google.svg"
                width={15}
                height={15}
                style={{ marginRight: 10 }}
              />
              Login with Google
            </Button>
            {error === "" ? (
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Avatar
                  alt="Instagram"
                  src="./icons/instagram.svg"
                  onClick={() =>
                    handleSocialMedia(
                      "https://www.instagram.com/bayyasunnyyadav/"
                    )
                  }
                  sx={{ width: 30, height: 30, mt: 2, cursor: "pointer" }}
                />
                <Avatar
                  alt="YouTube"
                  src="./icons/youtube1.svg"
                  onClick={() =>
                    handleSocialMedia(
                      "https://youtube.com/@bayyasunnyyadav?sub_confirmation=1"
                    )
                  }
                  sx={{ width: 30, height: 30, mt: 2, cursor: "pointer" }}
                />
                <Avatar
                  alt="Twitter"
                  src="./icons/twitter.svg"
                  onClick={() =>
                    handleSocialMedia("https://twitter.com/bayyasunnyyadav")
                  }
                  sx={{ width: 30, height: 30, mt: 2, cursor: "pointer" }}
                />
                <Avatar
                  alt="Facebook"
                  src="./icons/facebook.svg"
                  onClick={() =>
                    handleSocialMedia("https://facebook.com/bayyasunnyyadav")
                  }
                  sx={{ width: 30, height: 30, mt: 2, cursor: "pointer" }}
                />
                <Avatar
                  alt="Telegram"
                  src="./icons/telegram.svg"
                  onClick={() =>
                    handleSocialMedia("https://t.me/bayyasunnyyadavyoutuber")
                  }
                  sx={{ width: 30, height: 30, mt: 2, cursor: "pointer" }}
                />
              </Stack>
            ) : (
              <Alert
                variant="standard"
                severity="error"
                sx={{ mb: 1, mt: 2, cursor: "pointer" }}
              >
                {error}
              </Alert>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
