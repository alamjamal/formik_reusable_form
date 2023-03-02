import React, { ReactNode } from 'react';
import { Field, ErrorMessage, FieldInputProps, useField } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './FormikSelect.css';

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  label: string;
  required?: boolean;
}

// interface MaterialUISelectFieldProps extends FieldInputProps<string> {
//   errorString?: string;
//   children: ReactNode;
//   label: string;
//   required: boolean;
// }

// const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
//   errorString,
//   label,
//   children,
//   value,
//   name,
//   onChange,
//   onBlur,
//   required,
// }) => {
//   return (
//     <FormControl fullWidth>
//       <InputLabel required={required}>{label}</InputLabel>
//       <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
//         {children}
//       </Select>
//       <FormHelperText>{errorString}</FormHelperText>
//     </FormControl>
//   );
// };

const FormikSelect: React.FC<FormikSelectProps> = ({items, required = false,...props}) => {

  const [field,  meta, helper, ] = useField(props.name)
  const {name , label , fullWidth} ={ ...props}
  const {value} = field
  function renderHelperText() {
    if (meta.touched && meta.error) {
      return <FormHelperText>{meta.error}</FormHelperText>
    }
  }
  

  return (
    <div className="FormikSelect" >
       <FormControl fullWidth={fullWidth} >
       <InputLabel id="demo-simple-select-error-label">{label}</InputLabel> 
      <Select
        
        labelId="demo-simple-select-error-label"
        // name={name}
        // label={label}
        // value={value}
        required={required}
        {...props}
        {...field}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
     { renderHelperText()}
      </FormControl>
    </div>
  );
};

export default FormikSelect;
