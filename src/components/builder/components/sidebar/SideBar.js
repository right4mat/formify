import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SidebarRight from "./sidebarRight/SidebarRight";

const useStyles = makeStyles((theme) => ({

}));

function Sidebar() {
  const classes = useStyles();
  console.log("side bar render");
  return <SidebarRight />;
}

export default memo(Sidebar);
