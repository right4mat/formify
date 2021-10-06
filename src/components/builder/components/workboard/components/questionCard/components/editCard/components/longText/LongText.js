import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: 2,
    padding: theme.spacing(1),
  },
  gridItemFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
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

export default function LongText(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        {" "}
        <TextField
          placeholder={"Add defualt value..."}
          className={classes.input}
          multiline
          variant="outlined"
          label="Long Text"
          rows={4}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
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
