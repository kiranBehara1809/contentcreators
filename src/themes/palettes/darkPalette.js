import { createTheme, responsiveFontSizes } from "@mui/material";


const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily : 'sans-serif'
};
const ls_fs = localStorage.getItem("FONT_SIZE")
const ls_ff = localStorage.getItem("FONT_FAMILY")
const fontSize = ls_fs !=null ? +ls_fs : defaultGeneralSettings.fontSize;
const fontFamily = ls_ff !=null ? ls_ff : defaultGeneralSettings.fontFamily;

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b9efe5",
    },
    secondary: {
      main: "#dc8849",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#333333",
      paper: "#191919",
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
                backgroundColor: "rgb(97 95 94) !important",
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
          backgroundColor: "#ddeeebfa",
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
            backgroundColor: "#61cdcdeb",
            color: "black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            marginRight: "5px",
            marginLeft: "5px",
          },
          "&.Mui-disabled": {
            backgroundColor: "#a4bab6",
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
export default darkTheme