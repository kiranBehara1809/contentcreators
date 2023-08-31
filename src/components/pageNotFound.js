import { Button } from "@mui/material";
import IconDisplayer from "./custom/iconDisplayer";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/pages/about")
  }
    return (
      <>
        <div
          style={{
            height: "100dvh",
            width: "100dvw",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconDisplayer
            src={"/icons/404.svg"}
            alt="PAGE NOT FOUND"
            style={{ width: 300, height: 300 }}
          />
          <p>
            <h2>Oops...! Page not found</h2>
          </p>
            <Button variant="contained" onClick={handleHomeClick}>Go to Home Page</Button>
        </div>
      </>
    );
}


export default PageNotFound;