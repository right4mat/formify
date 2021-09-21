import { useState, useLayoutEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SideBar from "./components/sidebar/SideBar";
import Workboard from "./components/workboard/Workboard";
import { DragDropContext } from "react-beautiful-dnd";
import { onDragEnd, onDeleteItem, onTitleChange } from "./functions/functions";
import { onItemChange } from "../shared/functions/onItemChanges";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { form } from "./models/formModel";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "flex",
    overflowY: "hidden",
  },
  top: {
    flexDirection: "column",
  },
  left: {
    flexDirection: "row",
  },
  right: {
    flexDirection: "row-reverse",
  },
  bottom: {
    flexDirection: "column-reverse",
  },
}));


export default function Main(props) {
  const classes = useStyles();

  const [workboard, setWorkboard] = useState(props.form || form([]));

  const onItemDeleteCB = useCallback(
    (index) => onDeleteItem(index, setWorkboard, props.onChange),
    [setWorkboard, props.onChange]
  );
  const onItemChangeCB = useCallback(
    (index, key, value) =>
      onItemChange(index, key, value, setWorkboard, props.onChange),
    [setWorkboard, props.onChange]
  );
  const onDragEndCB = useCallback(
    (result) => onDragEnd(result, setWorkboard, props.onChange),
    [setWorkboard, props.onChange]
  );
  const onTitleChangeCB = useCallback(
    (result) => onTitleChange(result, setWorkboard, props.onChange),
    [setWorkboard, props.onChange]
  );

  return (
    //<Box width={"100%"} height={"100%"}>
    <ThemeProvider theme={props.theme}>
      <DragDropContext onDragEnd={onDragEndCB}>
        <Box
          className={[classes[props.toolBarPosition], classes.container].join(
            " "
          )}
        >
          <Box
            minHeight={
              ["top", "bottom"].indexOf(props.toolBarPosition) < 0
                ? "100%"
                : props.toolbarSpace
            }
            width={
              ["left", "right"].indexOf(props.toolBarPosition) < 0
                ? "100%"
                : props.toolbarSpace
            }
          >
            <SideBar />
          </Box>
          <Box style={{ flex: 1, overflowY: "scroll" }}>
            <Workboard
              data={workboard}
              onItemDelete={onItemDeleteCB}
              onItemChange={onItemChangeCB}
              onTitleChange={onTitleChangeCB}
            />
          </Box>
        </Box>
      </DragDropContext>
    </ThemeProvider>
    //</Box>
  );
}
