import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { TextInput } from "../../components/TextField";
import {useHistory} from 'react-router-dom'

let validate;
validate = Yup.object({
  wDays: Yup.number().required("Required field").min(1, "Choose between 1 to 8").max(8, "Choose between 1 to 8"),
  wHours: Yup.number().required("Required field").min(0).max(10, "Less than 10"),
  tSubjects: Yup.number().required("Required field").min(0),
  noSubjects: Yup.number().required("Required field").min(0),
});

const Container = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  //background-color: red;
`;

const Button = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 50px;
  margin-top: 20px;
  cursor: pointer;
  // background-color: gray;
`;

const Total = styled.p`
  position: absolute;
  font-size: 15px;
`

function Form1() {

  const history = useHistory()

  const [thours, setThours] = useState();

  const[val, setVal] = useState({
      wDays:'',
      wHours:''
  });
  

  const onChangeCapture = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "wDays" && value <= 8 && value >=1) {
       setVal({...val, [name]:value})
    } else if(name === "wHours" && value >=0 && value <=10) {
        setVal({...val, [name]:value})
    }
  };

  useEffect(() => {

    if(val?.wDays !== '' && val?.wHours !==''){
        setThours(parseInt(val?.wDays) * parseInt(val?.wHours))
    }
      
  }, [val])

  return (
    <Formik
      initialValues={{
        wDays: "",
        wHours: "",
        tSubjects: "",
        noSubjects: "",
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
         localStorage.setItem("formData", JSON.stringify(values)) 
         history.push("/user-input/subject-wise")
      }}
    >
      {(formik) => (
        <Container>
         {
             thours && (
                 <Total>{`Total hours : ${thours}`}</Total>
             )
         }
          <Wrapper>
            <TextInput
              label="No of Working days : "
              name="wDays"
              type="number"
              onChangeCapture={onChangeCapture}
            />

            <TextInput
              label="No of working hours per day : "
              name="wHours"
              type="number"
              onChangeCapture={onChangeCapture}
            />

            <TextInput
              label="Total Subjects : "
              name="tSubjects"
              type="number"
              onChangeCapture={onChangeCapture}
            />
            <TextInput
              label="No of subjects per day : "
              name="noSubjects"
              type="number"
              onChangeCapture={onChangeCapture}
            />

            <Button type="submit">submit</Button>
          </Wrapper>
        </Container>
      )}
    </Formik>
  );
}

export default Form1;
