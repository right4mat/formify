import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

const setChecked = (value, num) => {
  let checked = 0;
  return num
    ? [...Array(num).keys()].map((x) => {
        checked++;
        return checked <= value ? true : false;
      })
    : [];
};

export default function StarRatingInput(props) {
  const classes = useStyles();
  const checkedArr = setChecked(props.value, props.num);
  return (
    <Box className={classes.input} variant="outlined">
      {checkedArr.map((x, index) => (
        <IconButton
          key={index + ""}
          disabled={props.disabled}
          onClick={() => {
            let retValue = 0;
            checkedArr.map((x, i) => {
              if (i > index) return false;
              else if (i <= index) {
                retValue++;
                return true;
              }
            });
            if (props.onChange) props.onChange(retValue);
          }}
          color={checkedArr[index] ? "primary" : "default"}
        >
          {checkedArr[index] ? (
            <StarIcon  />
          ) : (
            <StarBorderIcon  />
          )}
        </IconButton>
      ))}
    </Box>
  );
}
