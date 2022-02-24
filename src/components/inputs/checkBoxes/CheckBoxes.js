import React, { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { setSelected } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    maxHeight: 72,
    minHeight: 2,
    width: "100%",
  },
  FormLabel: {
    fontSize: "large",
    textAlign: "left",
  },
}));

function Checkboxes(props) {
  const classes = useStyles();
  return (
    <FormControl
      
      component="fieldset"
      required={props.required}
      hidden={props.hidden}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
    >
      <FormLabel className={classes.FormLabel} component="label">
        {props.question}
      </FormLabel>
      <FormHelperText>{props.detail}</FormHelperText>
      <FormGroup>
        {props.inputs.map((x, i) => (
          <FormControlLabel
            className={classes.FormControlLabel}
            key={x.id}
            control={
              <Checkbox
                color="primary"
                checked={x.selected}
                onClick={() =>
                  typeof props.onChange === "function" &&
                  props.onChange(props.index, "inputs", [
                    ...setSelected(props.inputs, i),
                  ])
                }
                name={x.id}
              />
            }
            label={x.value}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default Checkboxes;
