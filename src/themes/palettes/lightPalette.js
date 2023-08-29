import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};
const ls_fs = localStorage.getItem("FONT_SIZE");
const ls_ff = localStorage.getItem("FONT_FAMILY");
const fontSize = ls_fs != null ? +ls_fs : defaultGeneralSettings.fontSize;
const fontFamily = ls_ff != null ? ls_ff : defaultGeneralSettings.fontFamily;

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0081C9",
    },
    secondary: {
      main: "#dc8849",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#FFFBF5",
      paper: "#FFFBF5",
    },
  },
  typography: {
    fontFamily: `${fontFamily}`,
    fontSize: fontSize,
  },
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          height: "30px",
          minHeight: "30px",
          maxHeight: "30px",
          ".Mui-selected": {
            backgroundColor: "#0081C9",
            color: "black",
          },
          ".MuiButtonBase-root:hover": {
            backgroundColor: "#0081C9",
            color: "black",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          ".MuiTableHead-root": {
            ".MuiTableRow-root": {
              ".MuiTableCell-root": {
                backgroundColor: "rgb(229, 244, 250) !important",
                fontWeight: 600,
              },
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: "30px",
          minHeight: "30px",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          backgroundColor: "#5BC0F833",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          marginRight: "5px",
          marginLeft: "5px",
          color: "black",
          textTransform: "capitalize",
          fontSize: "14px",
          height: "30px",
          minHeight: "30px",
          maxHeight: "30px",
        },
      },
      styleOverrides: {
        root: {
          height: "30px",
          minHeight: "30px",
          maxHeight: "30px",
          "&.Mui-selected": {
            backgroundColor: "#5BC0F8",
            color: "black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            marginRight: "5px",
            marginLeft: "5px",
          },
          "&.Mui-disabled": {
            backgroundColor: "#a1bbc9",
            color: "black",
            cursor: "none",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
export default lightTheme;
