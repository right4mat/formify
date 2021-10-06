import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FileUploadInput from "../../../../../../../../../shared/customInputs/fileUploadInput/FileUploadInput";
import { upload } from "../../../../../../../../../../utils/utils";
const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
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
  },
}));

export default function Number(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        {" "}
        <FileUploadInput
          disabled={false}
          placeholder={"File name..."}
          className={classes.input}
          label="File"
          variant="outlined"
          fullWidth
          file={props.data[0].value}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={async (e) =>
            props.onChange(props.index, "inputs", [
              ...(await upload(props.data, 0, e.target.files[0])),
            ])}
        />
      </Grid>
    </React.Fragment>
  );
}
