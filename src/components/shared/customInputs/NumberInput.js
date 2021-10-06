import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { isNumeric } from "../../../utils/helpers";

export default function NumberInput(props) {
  const [error, setError] = useState(false);

  const onChange = (e) => {
    if (!isNumeric(e.target.value) && e.target.value.length)
      return setError(true);
    else setError(false);
    if (props.onChange) props.onChange(e);
  };

  return (
    <TextField
      disabled={props.disabled}
      required={props.required}
      error={error}
      onChange={onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      label={props.label}
      variant={props.variant}
      fullWidth
      InputLabelProps={props.InputLabelProps}
    />
  );
}
