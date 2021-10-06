import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import fileDownload from "js-file-download";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function FileDownload(props) {
  const [error, setError] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.input}>
      <Button
        //onClick={() => fileDownload(atob(props.file.file), props.file.name)}
        onClick={() =>
          fetch(props.file.file)
            .then((res) => res.blob())
            .then((res) => fileDownload(res, props.file.name+'.'+props.file.type))
        }
        disabled={props.disabledDownload}
        className={classes.button}
        aria-label="Logic"
        startIcon={<CloudDownloadOutlinedIcon />}
        variant="outlined"
      >
        File
      </Button>
      <TextField
        disabled={props.disabledName}
        size="small"
        error={error}
        onChange={props.onChange}
        value={props.file.name}
        placeholder={props.placeholder}
        className={props.className}
        label={props.label}
        variant={props.variant}
        fullWidth
        InputLabelProps={props.InputLabelProps}
      />
    </Box>
  );
}
