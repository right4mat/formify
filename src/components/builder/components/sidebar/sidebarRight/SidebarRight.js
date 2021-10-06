import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { uuidv4 } from "../../../../../utils/helpers";
import types from "../../../shared/types/models/types";
import TypeListItem from "./components/TypeListItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { findType } from "./functions/search";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    minHeight: "100%",
    backgroundColor: theme.palette.background.toolbar,
  },
  heading: {
    //backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(2),
  },
  droppableList: {
    flex: "1 1 auto",
    minHeight: "100%",
    maxHeight: "100%",
    overflowY: "auto",
    height: 0,
  },
  list: {
  },
}));

export default function SidebarRight() {
  const classes = useStyles();
  const [typeList] = React.useState(types);
  const [search, setSearch] = React.useState("");
  console.log("re render");

  return (
    <Paper className={classes.root} >
      <Box className={classes.heading}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          placeholder="Types"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box className={classes.droppableList}>
        <Box className={classes.list}>
          {Object.keys(findType(typeList, search)).map((key, index) => (
            <Droppable droppableId={key} isDropDisabled={true} key={uuidv4()}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Draggable key={key} draggableId={key} index={index}>
                    {(provided, snapshot) => (
                      <React.Fragment>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TypeListItem
                            placeholder={false}
                            id={key}
                            index={index}
                            text={typeList[key].text}
                            icon={typeList[key].icon}
                            iconColor={typeList[key].iconColor}
                            color={typeList[key].color}
                          />
                        </div>
                        {snapshot.isDragging && (
                          <TypeListItem
                            placeholder={true}
                            id={key}
                            index={index}
                            text={typeList[key].text}
                            icon={typeList[key].icon}
                            iconColor={typeList[key].iconColor}
                            color={typeList[key].color}
                          />
                        )}
                      </React.Fragment>
                    )}
                  </Draggable>

                  <span style={{ display: "none" }}>
                    {provided.placeholder}
                  </span>
                </div>
              )}
            </Droppable>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
