export const onDragEnd = (result, list) => {
  const { source, destination } = result;

  console.log("source", source);
  console.log("destination", destination);

  if (!destination) return list;

  if (destination.droppableId !== source.droppableId) return list;

  if (destination.droppableId === source.droppableId) {
    const listClone = [...list];
    const [removed] = listClone.splice(source.index, 1);
    listClone.splice(destination.index, 0, removed);
    return listClone;
  }
};
