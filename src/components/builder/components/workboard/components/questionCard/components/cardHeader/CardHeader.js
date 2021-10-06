import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CallSplitOutlinedIcon from "@material-ui/icons/CallSplitOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { toolsDefaultState } from "./models/tools";
import PopoverButton from "../../../../../../../shared/customComponent/PopoverButton";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    maxHeight: 72,
  },
  gridItemFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    maxHeight: 70,
  },
  popover: {
    padding: theme.spacing(1),
    maxWidth: "200px",
    fontSize: "small",
  },
}));

export default function CardHeader(props) {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      maxWidth: 800,
    })
  );
  const [selected, setSelected] = useState({
    ...toolsDefaultState,
    [props.mode]: true,
  });

  const onPress = (type) => {
    setSelected({ ...toolsDefaultState, [type]: true });
    props.setMode(type);
  };

  return (
    <React.Fragment>
      <Grid item xs={matches ? 12 : 6} className={classes.gridItem}>
        <IconButton
          onClick={() => onPress("edit")}
          color={selected["edit"] ? "primary" : "default"}
          aria-label="edit"
        >
          {" "}
          <EditOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => onPress("options")}
          color={selected["options"] ? "primary" : "default"}
          aria-label="options"
        >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton
          disabled
          onClick={() => onPress("logic")}
          color={selected["logic"] ? "primary" : "default"}
          aria-label="logic"
        >
          {" "}
          <CallSplitOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            onPress("delete");
            props.onDeletePressed(props.index);
          }}
          color={selected["delete"] ? "primary" : "default"}
          aria-label="delete"
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={matches ? 12 : 6} className={classes.gridItemFlexEnd}>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel size="small" htmlFor="outlined-adornment-amount">
            Key
          </InputLabel>
          <OutlinedInput
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={props.data.key}
            onChange={(e) => props.onChange(props.index, "key", e.target.value)}
            variant="outlined"
            style={{ width: "100%", backgroundColor: "#fff" }}
            endAdornment={
              <InputAdornment position="end">
                <PopoverButton
                  size="small"
                  icon={<VpnKeyOutlinedIcon fontSize="small" />}
                  heading={"Felid key"}
                  body={
                    "This is the administrative key for this this field. These keys to aid in the building of reports which could reference submission data across multiple forms. Keys should be unique within a single form. Changing a key will not update previous submissions with the new key."
                  }
                />
              </InputAdornment>
            }
            label="key"
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
