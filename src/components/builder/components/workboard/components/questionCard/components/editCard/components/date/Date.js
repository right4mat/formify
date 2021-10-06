import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
    padding: theme.spacing(1),
  },
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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Number(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
          // inputProps={{
          //   step: 300, // 5 min
          // }}
          onChange={(e) => {
            props.data[0].value = e.target.value;
            props.onChange(props.index, "inputs", [...props.data]);
          }}
          value={props.data[0].value}
        />
      </Grid>
    </React.Fragment>
  );
}
