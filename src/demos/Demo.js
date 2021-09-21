import { useLayoutEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Main from "../components/builder/Main";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Viewer from "../components/viewer/Viewer";
import SidebarDemo from "./components/sidebarDemo/SidebarDemo";
import EditStyle from "./components/editStyle/EditStyle";
import { dummy, form } from "../components/builder/models/formModel";
import {
  createTheme,
  ThemeProvider,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  demo: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
  },
  builder: {
    maxHeight: "95vh",
    margin: "2.5%",
  },
  sidebar: {
    maxHeight: "100vh",
  },
  viewer: {
    boxSizing: "border-boxing",
    maxHeight: "95vh",
    margin: "2.5%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  viewerInner: {
    display: "block",
    maxHeight: "100%",
    maxWidth: 600,
    padding: theme.spacing(10),

    overflowY: "auto",
  },
}));

const themeDemo = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#f4f6f8",
      toolbar: "#f4f6f8",
      workboard: "#fff",
      questionCard: "#f4f6f8",
      typeCard: "#ffff"
    },
    primary: {
      contrastText: "#ffffff",
      main: "#5664d2",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
  },
  shadows: [
    "none",
    "0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
  ],
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: "-0.24px",
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: "-0.24px",
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "-0.06px",
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "-0.05px",
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "-0.05px",
    },
    overline: {
      fontWeight: 500,
    },
  },
});

export default function App() {
  const classes = useStyles();
  const [formAPI, setFormAPI] = useState(dummy);
  const [mode, setMode] = useState("build");
  const [openStyles, setOpenStyles] = useState(false);
  const [theme, setTheme] = useState(themeDemo);

  return (
    <ThemeProvider>
      <div className={classes.demo}>
        {mode === "build" && (
          <Paper className={classes.builder} elevation={3}>
            <Main
              theme={theme}
              toolBarPosition="left"
              form={formAPI}
              onChange={(e) => setFormAPI({ ...e })}
              toolbarSpace={300} //pixels
            />
          </Paper>
        )}
        {mode === "view" && (
          <Box className={classes.viewer}>
            <Paper elevation={3} className={classes.viewerInner}>
              <Viewer theme={theme} form={formAPI} />
            </Paper>
          </Box>
        )}
        <Paper elevation={3} className={classes.sidebar}>
          <SidebarDemo
            mode={mode}
            setMode={setMode}
            setStyles={setOpenStyles}
          />
        </Paper>
        <EditStyle
          theme={theme}
          setTheme={setTheme}
          open={openStyles}
          setOpen={setOpenStyles}
        />
      </div>
    </ThemeProvider>
  );
}
