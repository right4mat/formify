
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";
import {
  findSelected,
  addListItem,
  setSelectedRadio,
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
  },
}));

function RadioButton(props) {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={1} className={classes.gridItem}>
        <IconButton>
          <DragIndicatorOutlinedIcon fontSize="small"  />
        </IconButton>
      </Grid>
      <Grid item xs={1} className={classes.gridItem}>
        <Radio onClick={(e) => {
          props.onChange(props.itemIndex, "inputs", [
            ...setSelectedRadio(props.data, e.target.value),
          ]);
        }} value={props.id} color="default"/>
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
    </>
  );
}

export default RadioButton;
