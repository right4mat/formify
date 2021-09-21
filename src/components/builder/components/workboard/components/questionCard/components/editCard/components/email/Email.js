import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EmailInput from "../../../../../../../../../shared/customInputs/EmailInput";

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

export default function Email(props) {
  const classes = useStyles();
  const [valid, setVaild] = React.useState(true);

  return (
    <>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        {" "}
        <EmailInput
          placeholder={"Add defualt value..."}
          className={classes.input}
          variant="outlined"
          label="Email"
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
    </>
  );
}
