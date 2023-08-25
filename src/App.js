import "./App.css";
import Router from "./router";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <BrowserRouter>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}
export default App;
