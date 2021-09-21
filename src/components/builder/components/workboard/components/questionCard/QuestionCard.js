import { useState, useEffect, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EditCard from "./components/editCard/EditCard";
import OptionsCard from "./components/optionsCard/OptionsCard";
import DisplayCard from "./components/displayCard/DisplayCard";
import CardHeader from "./components/cardHeader/CardHeader";
import Grid from "@material-ui/core/Grid";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    cursor: "grab",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.questionCard,

    boxSizing: "border-box",
  },
  display: {
    backgroundColor: "rgba(255,255,255,0)",
  },
}));

function QuestionCard(props) {
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);
  const [mode, setMode] = useState(props.data.mode || "edit");
  const [hover, setHover] = useState(false);
  console.log("QuestionCard re-render " + props.index);
  // useEffect(() => {
  //   setMode(props.data.mode);
  // }, [props.data.mode, setMode]);
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={() => {
        setMode("display");
        setIsSelected(false);
      }}
    >
      <Card
        onClick={() => {
          isSelected || setMode("edit");
          isSelected || setIsSelected(true);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.root + " " + (classes[mode] || "")}
        variant={mode === "display" && !hover ? "elevation" : "elevation"}
        elevation={mode === "display" && !hover ? 0 : 1}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          direction="row"
        >
          {mode !== "display" && (
            <CardHeader
              mode={mode}
              setMode={setMode}
              data={props.data}
              onDeletePressed={props.onDelete}
              index={props.index}
              onChange={props.onChange}
            />
          )}
          {mode === "edit" && (
            <EditCard
              index={props.index}
              question={props.data.question}
              id={props.data.id}
              detail={props.data.detail}
              type={props.data.type}
              inputs={props.data.inputs}
              onChange={props.onChange}
            />
          )}
          {mode === "options" && (
            <OptionsCard
              index={props.index}
              id={props.data.id}
              type={props.data.type}
              hidden={props.data.hidden}
              required={props.data.required}
              disabled={props.data.disabled}
              placeholder={props.data.placeholder}
              onChange={props.onChange}
            />
          )}
          {mode === "display" && (
            <DisplayCard
              index={props.index}
              question={props.data.question}
              placeholder={props.data.placeholder}
              required={props.data.required}
              hidden={props.data.hidden}
              disabled={props.data.disabled}
              id={props.data.id}
              detail={props.data.detail}
              type={props.data.type}
              inputs={props.data.inputs}
              //onChange={props.onChange}
              showEditIcon={hover}
            />
          )}
        </Grid>
      </Card>
    </ClickAwayListener>
  );
}

export default memo(QuestionCard);
