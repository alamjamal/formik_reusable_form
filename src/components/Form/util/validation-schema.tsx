import * as Yup from "yup";
import { FormValues } from "./initial-values";

const emailAddresses = [
    'test@gmail.com',
    'test2@gmail.com',
    'test3@gmail.com'
  ];
  
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  
  export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!"),
      // .required("Required"),
    email: Yup.string()
      .lowercase()
      .email('Must be a valid email!')
      .notOneOf(emailAddresses, 'Email already taken!'),
      // .required('Required!'),
    password: Yup.string()
      .matches(lowercaseRegex, 'one lowercase required!')
      .matches(uppercaseRegex, 'one uppercase required!')
      .matches(numericRegex, 'one number required!')
      .min(8, 'Minimum 8 characters required!'),
      // .required('Required!'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must be the same!'),
      // .required('Required!'),
    position: Yup.string().required("Required"),
    agree: Yup.bool().oneOf([true], 'Accept Terms & Conditions'),
    radio: Yup.bool().oneOf([true], 'Radio is Required'),
    // mydate: Yup.date().required().typeError("please enter a valid date"),
    mydate: Yup.string().required("Required"),
  })


  export const checkBoxSchema = Yup.object().shape({
    check1: Yup.bool().oneOf([true], 'Required'),

  })


