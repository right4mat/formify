export const findType = (types, search) => {
  if (!search) return types;
  const typesFilter = {};
  Object.keys(types).forEach((key) => {
    if (types[key].text.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
      typesFilter[key] = types[key];
    }
  });

  return typesFilter;
};
