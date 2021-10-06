import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "@material-ui/core/Link";
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

function LinkInput(props) {
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
        <Link href={props.inputs[0].value}>{props.inputs[0].value}</Link>
      </FormControl>
    </ClickAwayListener>
  );
}

export default LinkInput;
