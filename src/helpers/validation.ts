import * as yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const passwordRegexp = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

const enRegexp = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;

const enIrregularVerbRegexp =
  /^[A-Za-z'-]+\s*-\s*[A-Za-z'-]+\s*-\s*[A-Za-z'-]+$/;

const uaRegexp = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

export const schemaSignUp = yup.object().shape({
  name: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .matches(passwordRegexp, "Enter a correct password"),
});

export const schemaSignIn = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .matches(passwordRegexp, "Enter a correct password"),
});

// export const schemaAddWord = yup.object().shape({
//   ua: yup
//     .string()
//     .required("Field is required")
//     .matches(uaRegexp, "Enter a correct word"),
//   en: yup
//     .string()
//     .required("Field is required")
//     .matches(enRegexp, "Enter a correct word"),
//   category: yup.string().required("Field is required"),
//   isIrregular: yup.boolean().when("category", {
//     is: (category: string) => category === "verb",
//     then: yup.boolean().required("Field is required for verbs"),
//     otherwise: yup.boolean().notRequired(),
//   }),
// });

export const schemaAddWord = yup.object({
  ua: yup
    .string()
    .required("Field is required")
    .matches(uaRegexp, "Enter a correct word"),
  en: yup
    .string()
    .required("Field is required")
    .matches(enRegexp, "Enter a correct word")
    .when("isIrregular", {
      is: true,
      then: (schema) =>
        schema.test(
          "irregular-verb-format",
          "Such data must be entered in the format I form-II form-III form",
          (value) => enIrregularVerbRegexp.test(value || "")
        ),
      otherwise: (schema) => schema,
    }),
  category: yup.string().required("Field is required"),
  isIrregular: yup.boolean().when("category", {
    is: "verb",
    then: (shema) => shema.required("Field is required for verbs"),
    otherwise: (shema) => shema.notRequired(),
  }),
});

export const schemaEditWord = yup.object({
  id: yup.string().required(),
  ua: yup
    .string()
    .required("Field is required")
    .matches(uaRegexp, "Enter a correct word"),
  en: yup
    .string()
    .required("Field is required")
    .matches(enRegexp, "Enter a correct word"),
  category: yup.string().required("Field is required"),
  isIrregular: yup.boolean().when("category", {
    is: "verb",
    then: (shema) => shema.required("Field is required for verbs"),
    otherwise: (shema) => shema.notRequired(),
  }),
});
