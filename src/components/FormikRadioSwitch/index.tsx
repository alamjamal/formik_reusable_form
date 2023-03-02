import React from "react";
import { ErrorMessage, Field, useField } from "formik";
// import Checkbox from "@mui/material/Checkbox";

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Switch,
  } from "@mui/material"

  
import "./FormikRadioSwitch.css";

interface FormikFieldProps {
  name: string;
  label: string;
  required?: boolean;
  checked?:boolean;
}

const FormikRadioSwitch: React.FC<FormikFieldProps> = ({  checked=false, required = false, ...props}) => {
  const [field,  meta, helper, ] = useField(props.name)
  // const {name , label } ={ ...props}
  
  function renderHelperText() {
    if (meta.touched && meta.error) {
      return <FormHelperText>{meta.error}</FormHelperText>
    }
  }
  
 
  return (
    <div className="FormikRadioSwitch">
      <Field
        required={required}
        as={FormControlLabel}
        control={<Switch />}
        checked={field.value}
        {...props}
      />
      {renderHelperText()}
    </div>
  );
};

export default FormikRadioSwitch;
