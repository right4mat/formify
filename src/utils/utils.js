import { toBase64 } from "./helpers";

export function findSelected(arr) {
  if (!arr) return "";
  const selected = arr.find((x) => x.selected);
  return selected ? selected.id : "";
}

export function addListItem(arr, item) {
  if (!arr) arr = [];
  arr.splice(arr.length, 0, item);
  return arr;
}

export function setSelectedRadio(arr, selected) {
  return arr.map((x) => {
    if (x.id === selected) x.selected = !x.selected;
    else x.selected = false;
    return x;
  });
}

export function setSelected(arr, index) {
  arr[index].selected = !arr[index].selected;
  return arr;
}

export function setValue(arr, index, value) {
  arr[index].value = value;
  return arr;
}

export async function upload(file) {
  try {
    const data= {
      file: await toBase64(file),
      name: file.name.split(".")[0],
      type: file.name.split(".").pop(),
    };
    console.log(data)
    return data;
  } catch (e) {
    console.error(e);
  }
}
