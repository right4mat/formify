import { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { findSelected, setSelectedRadio } from "../../../utils/utils";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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

function DropDown(props) {
  const classes = useStyles();
  const [focused, setFocused] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setFocused(false)}>
      <FormControl
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

        <Select
          value={findSelected(props.inputs)}
          onChange={(e) =>
            typeof props.onChange === "function" &&
            props.onChange(props.index, "inputs", [
              ...setSelectedRadio(props.inputs, e.target.value),
            ])
          }
          variant="outlined"
        >
          {props.inputs.map((x) => (
            <MenuItem value={x.id}>{x.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ClickAwayListener>
  );
}

export default DropDown;
