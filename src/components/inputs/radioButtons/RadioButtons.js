import { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import { setSelectedRadio, findSelected } from "../../../utils/utils";

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

function RadioButtons(props) {
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
      <RadioGroup value={findSelected(props.inputs)}>
        {props.inputs.map((x, i) => (
          <FormControlLabel
            className={classes.FormControlLabel}
            key={x.id}
            control={
              <Radio
                color="primary"
                checked={x.selected}
                onClick={(e) =>
                  typeof props.onChange === "function" &&
                  props.onChange(props.index, "inputs", [
                    ...setSelectedRadio(props.inputs, e.target.value),
                  ])
                }
                name={x.id}
                value={x.id}
              />
            }
            label={x.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons;
