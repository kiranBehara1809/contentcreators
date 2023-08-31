import "./App.css";
import Router from "./router";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import lightTheme from "./themes/palettes/lightPalette";
import { ApiProvider } from "./components/contexts/ApiContext";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <ApiProvider>
            <HelmetProvider>
              <Router />
            </HelmetProvider>
          </ApiProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
export default App;
