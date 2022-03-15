import PhoneInput from "../../shared/customInputs/PhoneInput";
import React, { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { setValue } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  FormLabel: {
    fontSize: "large",
    textAlign: "left",
  },
  FormLabelHelp: {
    marginBottom: theme.spacing(1),
  },
  FormControlLabel: {
    paddingLeft: 10,
  },
}));

function Phone(props) {
  const classes = useStyles();
  const [focused, setFocused] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setFocused(false)}>
      <FormControl
       error={props.error}
        required={props.required}
        hidden={props.hidden}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
        onClick={() => setFocused(true)}
        focused={focused}
      >
        <FormLabel className={classes.FormLabel} component="label">
          {props.question}
        </FormLabel>
        <FormHelperText className={classes.FormLabelHelp}>
          {props.detail}
        </FormHelperText>

        <PhoneInput
          className={classes.input}
          InputLabelProps={props.InputLabelProps}
          variant="outlined"
          value={props.inputs[0].value}
          onChange={(x) =>
            typeof props.onChange === "function" &&
            props.onChange(props.index, "inputs", [
              ...setValue(props.inputs, 0, x),
            ])
          }
        />
      </FormControl>
    </ClickAwayListener>
  );
}

export default Phone;
