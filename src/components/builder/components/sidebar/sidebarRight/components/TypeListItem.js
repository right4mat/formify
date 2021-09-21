import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Type from "../../../../shared/types/Type";

import Box from "@material-ui/core/Box";
import { uuidv4 } from "../../../../../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  type: {
    backgroundColor: theme.palette.background.typeCard,
    padding: theme.spacing(2),
    cursor: "grab",
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  placeholder: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    opacity: 0.5,
  },
}));

export default function TypeListItem(props) {
  const classes = useStyles();

  return (
    <Card
      className={!props.placeholder ? classes.type : classes.placeholder}
      elevation={!props.placeholder ? 1 : 0}
     
    >
      <Type
        text={props.text}
        icon={props.icon}
        iconColor={props.iconColor}
        color={props.color}
      />
    </Card>
  );
}
