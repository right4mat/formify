import { memo, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./components/questionCard/QuestionCard";
import Title from "./components/title/Title";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    maxHeight: "100%",
    backgroundColor: theme.palette.background.workboard
  },
  paddingLarge: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  paddingSmall: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  workboard: {
    minWidth: "70%",
    minHeight: "100%",
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
  },
  workItem: {
    paddingBottom: theme.spacing(2),
  },
}));

function Workboard(props) {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      maxWidth: 800,
    })
  );
  console.log("Workboard re-render");

  return (
    <Box
      className={[
        classes.root,
        matches ? classes.paddingSmall : classes.paddingLarge,
      ].join(" ")}
    >
      <Droppable droppableId={"workboard"}>
        {(provided, snapshot) => (
          <Box ref={provided.innerRef} className={classes.workboard}>
            <Box className={classes.workItem}>
              {" "}
              <Title onChange={props.onTitleChange} title={props.data["title"]} />
            </Box>

            {props.data["items"].map((boardItem, index) => (
              <Draggable
                key={boardItem.id}
                draggableId={boardItem.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <Box
                    className={classes.workItem}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <QuestionCard
                      index={index}
                      data={{ ...boardItem }}
                      onDelete={props.onItemDelete}
                      onChange={props.onItemChange}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
}

export default Workboard;
