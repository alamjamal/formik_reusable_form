

import React, { useState } from "react";
import { CircularProgress, FormGroup } from "@mui/material";
import Button from "@mui/material/Button";

import { Form, Formik } from "formik";
import { FormikValues, FormikHelpers as FormikActions } from "formik";
import FormikCheckbox from "../FormikCheckbox";
import FormikField from "../FormikField";


import "./Form.css";

import {FormValue3, initialValues2} from "./util/initial-values";
import {checkBoxSchema} from "./util/validation-schema";


export const Form2: React.FC = () => {
  const[open , setOpen] = useState<Boolean>(false) 
  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikValues
  ): Promise<void> => {
    await sleep(1000);
    console.log(values, "value")
    actions.setSubmitting(false);
    // actions.resetForm({values:""});
    // setActiveStep((prev) => prev + 1)
  };


  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={FormValue3}
        onSubmit={submitForm}
        // validationSchema={checkBoxSchema}
      >
        {({ dirty, isValid, isSubmitting, errors, touched, values, setFieldValue,  }) => {
          return (
            <div>
            <Form>
              <FormGroup>
              <FormikCheckbox
                name="all"
                label="All"
                id="all"
                mychecked={Object.keys(values).filter((key) => values[key] === false).length <1 }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  for (const property in FormValue3) {
                    setFieldValue(property, e.target.checked);
                  }
                  setFieldValue("other", e.target.checked);
                  setOpen(true)
                }}
              />
                 
                 {/* {Object.keys(FormValue3).map((item, key) => (
                 <FormikCheckbox
                 name={item}
                //  id={key}
                 key={key}
                 label={item[0].toUpperCase() + item.slice(1)}
                 mychecked={values[item] === true}                 
                 />                
                 ))} */}

                  {initialValues2.map((item, key) => (
                 <FormikCheckbox
                 name={item.name}
                //  id={key}
                 key={key}
                 label={item.label}
                 mychecked={values[item.name] === true}                 
                 />                
                 ))}


                {/* for onChange we must pass value with default value and setFieldValue  */}

                <FormikCheckbox
                 name="other"
                 label="Other"
                 value={values.other || false}
                 mychecked={values.other === true}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("other", e.target.checked);
                  setOpen( e.target.checked)
                }}

                 />                

            {open &&
              <FormikField
                name="comment"
                label="Comment"
                value={values.comment || ""}
                fullWidth
                varient="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("comment", e.target.value);
                
                }}
              />
          }
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                // disabled ={!isValid || !dirty}
                type="submit"
                size="large"
                style={{ width: "400px" }}
              >
                Submit {isSubmitting && <CircularProgress />}
              </Button>
              </FormGroup>
            </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );

 
}
