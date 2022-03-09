import FileDownloadInput from "../../shared/customInputs/fileDownloadInput/FileDownloadInput";
import React, { useState, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
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

function Email(props) {
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
        <FileDownloadInput
          disabledDownload={!props.inputs[0].value}
          disabledName={true}
          placeholder={"File name..."}
          file={props.inputs[0].value}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </ClickAwayListener>
  );
}

export default Email;
