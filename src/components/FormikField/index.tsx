import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, useField } from "formik";
import TextField from "@mui/material/TextField";

import "./FormikField.css";
import { FormHelperText } from "@mui/material";

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  varient?:string,
  fullWidth?:boolean,
  values?:string | number
}

const FormikField: React.FC<FormikFieldProps> = ({  values="",  type = "text", required = false, varient='standard' , ...props}) => {

  const [field,  meta, helper, ] = useField(props.name)
  const { value } = field
  const { setValue } = helper

  function renderHelperText() {
    if (meta.touched && meta.error) {
      return <FormHelperText>{meta.error}</FormHelperText>
    }
  }



  useEffect(() => {
    if (values) {
      setValue(values)
    }
  }, [setValue, values])


  function _onChange(data:string | number) {
    setValue(data)
  }

  
  return (
    <div className="FormikField">
      <Field
        variant={varient}
        required={required}
        autoComplete="off"
        as={TextField}
        {...props}
        type={type}
      />
      { renderHelperText()}

    </div>
  );
};

export default FormikField;

