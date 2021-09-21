import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  gridItemFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
    padding: theme.spacing(1),
  },
  break: {
    borderTop: "1px solid #d3d3d3",
    width: "100%",
    height: 0,
  },

  input: {
    backgroundColor: "#fff",
  },
}));

export default function SliderInput(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4} className={classes.gridItemFlexEnd}>
        <Slider
          onChange={(e, v) => {
            props.data[0].value = v;
            props.onChange(props.index, "inputs", [...props.data]);
          }}
          value={props.data[0].value}
        />
      </Grid>
      <Grid xs={4}></Grid>
    </>
  );
}
