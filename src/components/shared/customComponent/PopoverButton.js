import Popover from "./Popover";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({}));

export default function PopoverCustom(props) {
  const [showPop, setShowPop] = useState(null);
  return (
    <React.Fragment>
      <IconButton
        className={props.className}
        size={props.size}
        onClick={(e) => {
          props.onClick && props.onClick(e);
          setShowPop(e.currentTarget);
        }}
      >
        {props.icon}
      </IconButton>
      <Popover
        disableRestoreFocus
        open={Boolean(showPop)}
        anchorEl={showPop}
        anchorOrigin={{
          vertical: "center",
          horizontal: props.popSide,
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={() => setShowPop(null)}
        heading={props.heading}
        body={props.body}
      />
    </React.Fragment>
  );
}
