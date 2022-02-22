import React, { useState, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Inputs } from "./models/inputs";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "column",
    padding: theme.spacing(2),
    minHeight: "100%",
    height: "100%",
  },

  edit:{
    minHeight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "column",

  },

  hidden: {
    opacity: 0.5,
  },
}));

const InputToRender = memo((props) => {
  const Input = Inputs[props.type].input;
  console.log("Inputs re-render " + props.index);

  if (Input) {
    return (
      <Input
        index={props.index}
        question={props.question}
        placeholder={props.placeholder}
        required={props.required}
        hidden={false}
        disabled={props.disabled}
        id={props.id}
        detail={props.detail}
        type={props.type}
        inputs={props.inputs}
        onChange={props.onChange}
        fullWidth={props.fullWidth}
      />
    );
  }
});

function DisplayCards(props) {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      minWidth: 800,
    })
  );

  return (
    <React.Fragment>
      <Grid
        item
        xs={11}
        className={classes.gridItem + " " + (props.hidden && classes.hidden)}
      >
        <InputToRender
          index={props.index}
          question={props.question || "Your question..."}
          placeholder={props.placeholder}
          required={props.required}
          hidden={props.hidden}
          disabled={props.disabled}
          id={props.id}
          detail={props.detail || "Extra details..."}
          type={props.type}
          inputs={props.inputs}
          onChange={props.onChange}
          fullWidth={true}
        />
      </Grid>
      <Grid
        item
        xs={1}
        className={classes.gridItem + " " + (props.hidden && classes.hidden)}
      >
        <Box minHeight={"100%"} className={classes.edit}>
          {props.showEditIcon && (
            <IconButton aria-label="edit">
              <EditIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default memo(DisplayCards);
