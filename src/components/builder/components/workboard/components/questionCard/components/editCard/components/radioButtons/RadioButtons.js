import React, { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { onDragEnd } from "../../functions/dragDrop";
import { uuidv4 } from "../../../../../../../../../../utils/helpers";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RadioButton from "./components/radioButton/RadioButton";
import { input } from "../../../../../../../../models/formModel";
import {
  findSelected,
  addListItem,
  setSelected,
} from "../../../../../../../../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
  },
  gridItemFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
  },
  radioGroup: {
    width: "100%",
    overflow: "hidden",
  },
  formControl: {
    width: "100%",
    overflow: "hidden",
    padding: theme.spacing(2),
  },
  break: {
    borderTop: "1px solid #d3d3d3",
    width: "100%",
    height: 0,
    marginRight: theme.spacing(2),
  },
  input: {
    backgroundColor: "#fff",
  },
}));

function RadioButtons(props) {
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        name="controlled-radio-buttons-group"
        className={classes.radioGroup}
        value={findSelected(props.data)}
        // onChange={(e) => {
        //   props.onChange(props.index, "inputs", [
        //     ...setSelected(props.data, e.target.value),
        //   ]);
        // }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          direction="row"
          style={{ overflow: "hidden" }}
        >
          <Grid item xs={12} className={classes.gridItemFlexEnd}>
            <hr className={classes.break} />
            <IconButton
              disabled={props.data.length >= 10}
              onClick={(e) => {
                props.onChange(props.index, "inputs", [
                  ...addListItem(props.data, input()),
                ]);
              }}
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </Grid>
          <DragDropContext
            onDragEnd={(result) =>
              props.onChange(
                props.index,
                "inputs",
                onDragEnd(result, props.data)
              )
            }
          >
            <Droppable
              droppableId={"radioButtons"}
              style={{ overflow: "hidden" }}
            >
              {(provided, snapshot) => (
                <Grid
                  ref={provided.innerRef}
                  item
                  xs={12}
                  {...provided.droppableProps}
                >
                  {props.data.map((x, index) => (
                    <Draggable draggableId={x.id} index={index} key={x.id}>
                      {(provided, snapshot) => (
                        <Grid
                          container
                          spacing={0}
                          alignItems="center"
                          justifyContent="flex-start"
                          direction="row"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <RadioButton
                            id={x.id}
                            index={index}
                            data={[...props.data]}
                            itemIndex={props.index}
                            onChange={props.onChange}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons;
