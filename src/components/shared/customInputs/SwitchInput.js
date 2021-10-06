import React from 'react';
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default function SwitchInput(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <FormLabel>{props.answerA}</FormLabel>
      <Switch
        disabled={props.disabled}
        required={props.required}
        name="checkedB"
        color="primary"
        onChange={(x) =>
          props.onChange(x.target.checked ? props.answerB : props.answerA)
        }
        checked={props.answerB === props.value ? true : false}
      />
      <FormLabel>{props.answerB}</FormLabel>
    </Box>
  );
}
