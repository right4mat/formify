import CheckBoxes from "../../../../../../../../inputs/checkBoxes/CheckBoxes";
import Date from "../../../../../../../../inputs/date/Date";
import DropDown from "../../../../../../../../inputs/dropDown/DropDown";
import Email from "../../../../../../../../inputs/email/Email";
import Link from "../../../../../../../../inputs/link/Link";
import FileDownload from "../../../../../../../../inputs/fileDownload/FileDownload";
import FileUpload from "../../../../../../../../inputs/fileUpload/FileUpload";
import LongText from "../../../../../../../../inputs/longText/LongText";
import ShortText from "../../../../../../../../inputs/shortText/ShortText";
import Number from "../../../../../../../../inputs/number/Number";
import Phone from "../../../../../../../../inputs/phone/Phone";
import RadioButtons from "../../../../../../../../inputs/radioButtons/RadioButtons";
import Time from "../../../../../../../../inputs/time/Time";
import Slider from "../../../../../../../../inputs/slider/Slider";
import StarRating from "../../../../../../../../inputs/starRating/StarRating";
import Switch from "../../../../../../../../inputs/switch/Switch";

export const Inputs = {
  RAB: { input: RadioButtons },
  CHB: { input: CheckBoxes },
  SHT: { input: ShortText },
  LOT: { input: LongText },
  EMA: { input: Email },
  LIN: { input: Link },
  YEN: { input: Switch },
  STR: { input: StarRating },
  PHN: { input: Phone },
  DRD: { input: DropDown },
  NUM: { input: Number },
  TIM: { input: Time },
  DAT: { input: Date },
  SLI: { input: Slider },
  FIU: { input: FileUpload },
  FID: { input: FileDownload },
};
