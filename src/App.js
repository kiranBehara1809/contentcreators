import "./App.css";
import Router from "./router";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import lightTheme from "./themes/palettes/lightPalette";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
export default App;
