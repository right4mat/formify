import { uuidv4 } from "../../../utils/helpers";

export const details = () => ({
  id: uuidv4(),
  key: uuidv4(),
  mode: "edit",
  question: "",
  detail: "",
  placeholder: "",
  hidden: false,
  required: false,
  disabled: false,
  type: "",
});

export const input = () => ({
  id: uuidv4(),
  value: "",
  selected: false,
});

export const form = (items) => ({
  id: uuidv4(),
  title: "",
  items: items,
});

export const dummy = {
  id: uuidv4(),
  title: "Lorem Ipsum",
  items: [
    {
      id: "f753bcf5-4d40-4c3f-9127-6b1faa0a5cfc",
      key: "b7c48963-ef9b-4aa7-90bf-043b530a7c35",
      question: "What is Lorem Ipsum?",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      placeholder: "",
      hidden: false,
      required: false,
      disabled: false,
      mode: "display",
      type: "RAB",
      inputs: [
        {
          id: "f71fb121-ed85-41e4-b212-a1f8deabc218",
          value: "Lorem ipsum dolor sit amet?",
          selected: false,
        },
        {
          id: "3ac51e7d-0d18-44c9-8bb7-f9f8588f28b9",
          value: "Consectetur adipiscing elit?",
          selected: false,
        },
        {
          id: "76cfafd7-ce71-4856-80c1-7cf5b2d85540",
          value: "Sed do eiusmod tempor incididunt?",
          selected: false,
        },
      ],
    },
    {
      id: "a52d7bda-cfd1-4d47-8e9c-bcaacd7e664b",
      key: "094c4806-a269-4b44-ae63-3019c130f79d",
      question: "Why do we use it?",
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      placeholder: "",
      hidden: false,
      required: false,
      disabled: false,
      mode: "display",
      type: "SHT",
      inputs: [
        {
          id: "66fe1da8-c317-4adb-b7a0-2301475e6a18",
          value: "",
          selected: false,
        },
      ],
    },
    {
      id: "cf8a0812-78e8-4b3b-a32d-52de3408253c",
      key: "14a7ae46-cf4a-4c3b-8249-1d632791ddb4",
      question: "Where does it come from?",
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      placeholder: "",
      hidden: false,
      required: false,
      disabled: false,
      mode: "display",
      type: "STR",
      inputs: [
        {
          id: "32fb711c-7f72-4c58-aecf-0333b89ba0a3",
          value: "",
          selected: false,
        },
      ],
    },
    {
      id: "7a46b7ba-973f-4368-8a0f-0d6b58407266",
      key: "356e2f3a-0e85-4a73-8530-779176d6a707",
      question: "Where can I get some?",
      detail:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      placeholder: "",
      hidden: false,
      required: false,
      disabled: false,
      mode: "display",
      type: "TIM",
      inputs: [
        {
          id: "55093493-cb58-451c-a118-c69ed4fa1cae",
          value: "",
          selected: false,
        },
      ],
    },
  ],
};
