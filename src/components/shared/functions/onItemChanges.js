import { input } from "../../builder/models/formModel";

export const onItemChange = (index, key, value, setWorkboard, onChange) => {
  setWorkboard((old) => {
    //check type change if diff clear inputs

    if (key === "type" && value !== old["items"][index]["type"]) {
      old["items"][index]["inputs"] = [input()];
    }
    old["items"][index][key] = value;
    //console.log(old)
    if (onChange) onChange(old);
    return { ...old };
  });
};

