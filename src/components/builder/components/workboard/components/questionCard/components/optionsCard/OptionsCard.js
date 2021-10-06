import React, { useState, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import TextField from "@material-ui/core/TextField";
import PopoverButton from "../../../../../../../shared/customComponent/PopoverButton";
import typeOptions from "./models/typeOptions";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
  },
  info: {
    margin: theme.spacing(1),
  },
  input: {
    backgroundColor: "#fff",
  },
}));

function OptionsCard(props) {
  const classes = useStyles();
  const [showPop, setShowPop] = useState(null);
  console.log("OptionsCard re-render " + props.index);

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItem}>
        <Checkbox
          color="default"
          checked={props.hidden}
          onClick={() => props.onChange(props.index, "hidden", !props.hidden)}
        />
        <Typography className={classes.gridItem} fontSize="small">
          Hidden
        </Typography>
        <PopoverButton
          popSide="right"
          className={classes.info}
          size="small"
          onClick={(e) => setShowPop(e.currentTarget)}
          icon={<InfoOutlinedIcon fontSize="small" />}
          heading={"Hide felid"}
          body={
            "Checking this hides this field when users view/fill the form. Maybe you don't need this filled by users currently?"
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Checkbox
          color="default"
          checked={props.required}
          onClick={() =>
            props.onChange(props.index, "required", !props.required)
          }
        />
        <Typography className={classes.gridItem} fontSize="small">
          Required
        </Typography>
        <PopoverButton
          popSide="right"
          className={classes.info}
          size="small"
          onClick={(e) => setShowPop(e.currentTarget)}
          icon={<InfoOutlinedIcon fontSize="small" />}
          heading={"Required felid"}
          body={
            "Checking this will prevent the user from submitting until valid input is provided"
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Checkbox
          color="default"
          checked={props.disabled}
          onClick={() =>
            props.onChange(props.index, "disabled", !props.disabled)
          }
        />
        <Typography className={classes.gridItem} fontSize="small">
        Disabled
        </Typography>
        <PopoverButton
          popSide="right"
          className={classes.info}
          size="small"
          onClick={(e) => setShowPop(e.currentTarget)}
          icon={<InfoOutlinedIcon fontSize="small" />}
          heading={"Disable felid"}
          body={
            "Checking this will disabled the user from entering input."
          }
        />
      </Grid>
      {typeOptions[props.type].placeholder && (
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            placeholder={"Add placeholder..."}
            className={classes.input}
            label="Placeholder"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              props.onChange(props.index, "placeholder", e.target.value)
            }
            value={props.placeholder}
          />
        </Grid>
      )}
    </React.Fragment>
  );
}

export default memo(OptionsCard);
