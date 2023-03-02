import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
FormLabel,
  } from "@mui/material"

import "./FormikChekbox.css";



// console.log(meta, "meta") //{ error : "Accept Terms & Conditions", initialError : undefined, initialTouched : false, initialValue : false, touched : true, value : false}
//  console.log(field, "field") // {name: 'agree', value: false, onChange: ƒ, onBlur: ƒ}
// console.log(helper, "helper") // {setValue: ƒ, setTouched: ƒ, setError: ƒ}
// console.log({...props}, "props")  // {name:"agree" , label:"Field Lable"} 


interface FormikFieldProps {
  name: string;
  label: string;
  required?: boolean;
  mychecked?:boolean;
  fullWidth?:boolean;
}


const FormikCheckbox: React.FC<FormikFieldProps> = ({  fullWidth=false,  required = false , mychecked, ...props}) => {
  const {label = ""} = {...props}
  const [field, meta, helper ] = useField(props.name)
  const { touched, error } = meta
  const { setValue } = helper
  const { name, value } = field
  const isError = touched && error && true


  function renderHelperText() {
    if (meta.touched && meta.error) {
      return <FormHelperText error>{meta.error}</FormHelperText>
    }
  }

  return (
    <FormControl >
    {/* <FormLabel component="legend">Demo </FormLabel> */}
    {/* <FormGroup > */}
      <FormControlLabel
        control={
          <Checkbox 
          checked={mychecked}        
          name={name}
           />
        }
        {...field}
        {...props}
        label={label}
      />
    
    {/* </FormGroup> */}
    {renderHelperText()}
  </FormControl>
  );
};

export default FormikCheckbox;
