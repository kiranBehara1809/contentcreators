import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};
const ls_fs = localStorage.getItem("FONT_SIZE");
const ls_ff = localStorage.getItem("FONT_FAMILY");
const fontSize =
  ls_fs != null ? +ls_fs : defaultGeneralSettings.fontSize;
const fontFamily =
  ls_ff != null ? ls_ff : defaultGeneralSettings.fontFamily;

const greenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0e6f5d",
    },
    secondary: {
      main: "#eaa342",
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
    MuiTable: {
      styleOverrides: {
        root: {
          ".MuiTableHead-root": {
            ".MuiTableRow-root": {
              ".MuiTableCell-root": {
                backgroundColor: "rgb(231, 251, 231) !important",
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
          backgroundColor: "#d7f8d7c7",
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
            backgroundColor: "#42af9c",
            color: "black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            marginRight: "5px",
            marginLeft: "5px",
          },
          "&.Mui-disabled": {
            backgroundColor: "#adc1ad",
            color: "black",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: "capitalize",
          height: "30px",
        },
      },
    },
  },
});
export default greenTheme;
