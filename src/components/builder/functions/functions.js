import { uuidv4 } from "../../../utils/helpers";
import { details, input } from "../models/formModel";

export const onDragEnd = (result, setWorkboard, onChange) => {
  const { source, destination } = result;

  if (!destination) return;

  if (destination.droppableId === source.droppableId) {
    return setWorkboard((old) => {
      const listClone = { ...old };
      const [removed] = listClone["items"].splice(source.index, 1);
      listClone["items"].splice(destination.index, 0, removed);
      if (onChange) onChange(listClone);
      return listClone;
    });
  }

  if (destination.droppableId === "workboard") {
    return setWorkboard((old) => {
      old["items"].splice(
        destination.index,
        0,
        ...[
          {
            ...details(),
            type: source.droppableId,
            inputs: [input()],
          },
        ]
      );
      if (onChange) onChange(old);
      return old;
    });
  } else {
    return;
  }
};


export const onTitleChange = (title, setWorkboard, onChange) => {
  setWorkboard((old) => {
    old["title"] = title;
    if (onChange) onChange(old);
    return { ...old };
  });
};

export const onDeleteItem = (index, setWorkboard, onChange) => {
  setWorkboard((old) => {
    old["items"].splice(index, 1);
    if (onChange) onChange(old);
    return { ...old };
  });
};
