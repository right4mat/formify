import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginLeft: 15,
  },
}));

export default function Type(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root} elevation={3}>
      <IconButton
        size="small"
        className={classes.icon}
        style={{ backgroundColor: props.color }}
      >
        <props.icon style={{ color: props.iconColor }} />
      </IconButton>
      <Typography className={classes.text}>{props.text}</Typography>
    </Box>
  );
}
