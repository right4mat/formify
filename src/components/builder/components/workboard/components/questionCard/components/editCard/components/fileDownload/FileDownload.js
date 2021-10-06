import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FileDownloadInput from "../../../../../../../../../shared/customInputs/fileDownloadInput/FileDownloadInput";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
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
        <IconButton component="label">
          <CloudUploadOutlinedIcon />
          <input
            type="file"
            hidden
            onChange={async (e) =>
              props.onChange(props.index, "inputs", [
                ...(await upload(props.data, 0, e.target.files[0])),
              ])
            }
          />
        </IconButton>
      </Grid>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        {" "}
        <FileDownloadInput
          disabledDownload={!props.data[0].value}
          disabledName={!props.data[0].value}
          placeholder={"File name..."}
          className={classes.input}
          file={props.data[0].value}
          onChange={(e) => {
            props.data[0].value.name = e.target.value;
            props.onChange(props.index, "inputs", [...props.data]);
          }}
          label="File name"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </React.Fragment>
  );
}
