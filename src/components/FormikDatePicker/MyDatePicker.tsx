import React, { useState , useEffect } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { FormHelperText, Grid, TextField } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import "./MyDatePicker.css";

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { format, parseISO } from "date-fns";


interface FormikFieldProps {
  name: string;
  label: string;
  required?: boolean;
  format?:string;
  minDate?:Date;
  maxDate?:Date;
  fullWidth?:boolean;
  selected?:Date | null
}


export const MyDatePicker : React.FC<FormikFieldProps> = ({selected=null, ...props}) => {
  const {fullWidth=false } ={ ...props}
  const [field, meta, helper ] = useField(props.name)
  const { touched, error } = meta
  const { setValue } = helper
  const { name, value } = field
  const isError = touched && error && true
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)


  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setSelectedDate(date)
    }else{
      setSelectedDate(null)
    }
  }, [value])

  function _onChange(date:any) {
    if (date) {
      setSelectedDate(date)
      try {
        // const ISODateString = date.toISOString()
       const fDate= format(date, 'dd.MM.yyyy')
        setValue(fDate)
       
      } catch (error) {
        setValue(date)
       
      }
    } else {
      setValue(date)
   
    }
  }

  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }
  
  

  return (
    <Grid container >
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      
       <DesktopDatePicker 
       
        {...field}
        {...props}
        value={selectedDate}
        onChange={_onChange}

        // invalidDateMessage={isError && error}

        // helperText={isError && error}
        renderInput={(params) => <TextField fullWidth = {fullWidth} {...params} />}
        // select={field.value}

      /> 

</LocalizationProvider>      
      {renderHelperText()}
  </Grid>

  )

}

