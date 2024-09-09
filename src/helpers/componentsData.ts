import { Variants } from "framer-motion";
import { IInputAuth } from "./interfeceData";
import illustration_regist_1x_Mobail from "../images/mobile/illustration_regist_@1x.webp";
import illustration_regist_2x_Mobail from "../images/mobile/illustration_regist_@2x.webp";
import illustration_regist_1x_Desktop from "../images/desktop/illustration_desktop_@1x.webp";
import illustration_regist_2x_Desktop from "../images/desktop/illustration_desktop_@2x.webp";

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.8 },
  },
};

export const inputSignUp: IInputAuth[] = [
  { name: "name", placeholder: "Name" },
  { name: "email", placeholder: "Email" },
  { name: "password", placeholder: "Password" },
];

export const inputSignIn: IInputAuth[] = [
  { name: "email", placeholder: "Email" },
  { name: "password", placeholder: "Password" },
];

export const imgRegistersAndLogins = [
  {
    query: "(max-width: 767px)",
    imgData: {
      srcSet: `${illustration_regist_1x_Mobail} 1x, ${illustration_regist_2x_Mobail} 2x`,
      src: illustration_regist_1x_Mobail,
      alt: "illustration_regist_mobile",
    },
  },
  {
    query: "(min-width: 1440px)",
    imgData: {
      srcSet: `${illustration_regist_1x_Desktop} 1x, ${illustration_regist_2x_Desktop} 2x`,
      src: illustration_regist_1x_Desktop,
      alt: "illustration_regist_desktop",
    },
  },
];
