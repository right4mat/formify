import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import StartRatingInput from "../../../../../../../../../shared/customInputs/StartRatingInput";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 72,
    minHeight: 2,
    padding: theme.spacing(2),
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
    marginRight: theme.spacing(2),
  },

  input: {
    padding: theme.spacing(1),
  },
}));

export default function StarRating(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />{" "}
        <IconButton>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <StartRatingInput
          className={classes.input}
          value={props.data[0].value}
          num={5}
          onChange={(v) => {
            props.data[0].value = v;
            props.onChange(props.index, "inputs", [...props.data]);
          }}
        />
      </Grid>
    </>
  );
}
