import React from 'react'
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  popover: {
    padding: theme.spacing(2),
    maxWidth: "200px",
  },
  body: {
    paddingTop: theme.spacing(1),
    fontSize: "small",
  },
  heading: {
    fontWeight: 550,
  },
}));

export default function PopoverCustom(props) {
  const classes = useStyles();
  return (
    <Popover
      classes={{
        paper: classes.popover,
      }}
      disableRestoreFocus={props.disableRestoreFocus}
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={props.anchorOrigin}
      transformOrigin={props.transformOrigin}
      onClose={props.onClose}
    >
      <Typography className={classes.heading}>{props.heading}</Typography>
      <Typography className={classes.body}>{props.body}</Typography>
    </Popover>
  );
}
