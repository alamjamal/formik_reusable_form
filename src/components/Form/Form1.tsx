import { Form, Formik } from "formik";
import React from "react";

import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";

import { FormikValues, FormikHelpers as FormikActions } from "formik";

import FormikField from "../FormikField";
import FormikSelect, { FormikSelectItem } from "../FormikSelect";
import FormikCheckbox from "../FormikCheckbox";
import FormikRadioSwitch from "../FormikRadioSwitch";
import { MyDatePicker } from "../FormikDatePicker";

import "./Form.css";

import {initialValues} from "./util/initial-values";
import {SignupSchema} from "./util/validation-schema";

export const Form1: React.FC = () => {
  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikValues
  ): Promise<void> => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    actions.resetForm({values:""});

    // setActiveStep((prev) => prev + 1)
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid, isSubmitting, errors, touched, values }) => {
          return (
            <Form>
              <FormikField
                name="name"
                label="Name"
                fullWidth
                // varient="outlined"
              />
              <FormikField
                name="email"
                label="Email"
                fullWidth
                // values="Hello"
              />
              <FormikField
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
              <FormikField
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                fullWidth
              />
              <FormikSelect
                name="position"
                items={positionItems}
                label="Select Box"
                fullWidth
                
              />

              <FormikRadioSwitch name="radio" label="On/Off" />
              {/* {errors.radio && <p style={{color:'red'}}>{errors.radio}</p>} */}

              <MyDatePicker
                name="mydate"
                label="Pic The Date"
                format="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={new Date("2050/12/31")}
                fullWidth
              />

              <FormikCheckbox
                name="agree"
                label="Accept Terms & Conditions is required"
                mychecked={values.agree === true}
              />
              {/* {errors.agree && <p style={{color:'red'}}>{errors.agree}</p>} */}

              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                // disabled ={!isValid || !dirty}
                type="submit"
                size="large"
                style={{ width: "400px" }}
              >
                Primary
              </Button>
              {isSubmitting && <CircularProgress />}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const positionItems: FormikSelectItem[] = [
  {
    label: "Front End",
    value: "front_end",
  },
  {
    label: "Back End",
    value: "back_end",
  },
  {
    label: "Dev Ops",
    value: "dev_ops",
  },
  {
    label: "QA",
    value: "qa",
  },
];

// export default Form1;
