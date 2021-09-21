import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    maxWidth: 700,
  },
  titleText: {
    fontSize: "x-large",
    lineHeight: 1,
    padding: theme.spacing(2),
  },
}));

export default function Phone(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.title}>
      <TextField
        multiline
        fontSize="large"
        placeholder="Form Title..."
        fullWidth
        InputProps={{
          classes: {
            input: classes.titleText,
          },
        }}
        value={props.title}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </Grid>
  );
}
