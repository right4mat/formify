import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PhoneInput from "../../../../../../../../../shared/customInputs/PhoneInput";
import { setValue } from "../../../../../../../../../../utils/utils";

const useStyles = makeStyles((theme) => ({

  gridItemFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
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

export default function Phone(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <PhoneInput
          className={classes.input}
          areaLabel="Ctry code"
          phoneLabel="Phone number"
          InputLabelProps={{
              shrink: true,
            }}
          variant="outlined"
          value={props.data[0]}
          onChange={(x) =>
            props.onChange(props.index, "inputs", [
              ...setValue(props.data, 0, x),
            ])
          }
        />
      </Grid>
    </>
  );
}
