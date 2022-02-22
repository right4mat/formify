import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";
import {
  setSelected,
} from "../../../../../../../../../../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
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
    marginRight: theme.spacing(2),
  },
  input: {
    backgroundColor: "#fff",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

function RadioButton(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={1} className={classes.gridItem}>
        <IconButton>
          <DragIndicatorOutlinedIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={1} className={classes.gridItem}>
        <Checkbox
          onClick={(e) =>
            props.onChange(props.itemIndex, "inputs", [
              ...setSelected(props.data, props.index),
            ])
          }
          //value={props.id}
          color="default"
          checked={props.data[props.index].selected}
        />
      </Grid>
      <Grid item xs={9} className={classes.gridItem}>
        <TextField
          size="small"
          required
          className={classes.input}
          label="Answer"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          value={props.data[props.index].value}
          onChange={(e) => {
            props.data[props.index].value = e.target.value;
            props.onChange(props.itemIndex, "inputs", props.data);
          }}
        />
      </Grid>
      <Grid item xs={1} className={classes.gridItemFlexEnd}>
        <IconButton
          disabled={props.data.length === 1}
          onClick={(e) => {
            props.data.splice(props.index, 1);
            props.onChange(props.itemIndex, "inputs", props.data);
          }}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}

export default RadioButton;
