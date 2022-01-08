import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

const subjects = [
  "English",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Science",
  "Civics",
  "Biology",
  "Physics",
  "Chemistry",
  "Computer",
  "Sanskrit",
  "Economics",
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const WrapperContainer = styled.div`
  width: 300px;
  border: 1px solid gray;
  padding: 15px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 4px 0;
  height: 30px;
  // justify-content: center;
  align-items: center;
`;
const Label = styled.p`
  width: 100px;
  font-size: 14px;
`;

const Input = styled.input`
  height: 30px;
  padding: 0 5px;
`;

const Button = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 50px;
  margin-top: 20px;
  cursor: pointer;
  // background-color: gray;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  left: 20%;
  margin-top: 20px;
  cursor: pointer;
`

function Form2() {
 

  const history = useHistory()

  const [sub, setSub] = useState({});
  const [enable, setEnable] = useState(false);

  const { tSubjects, wDays, wHours } = JSON.parse(
    localStorage?.getItem("formData")
  );

  const onChangeInput = (name, value) => {
    setSub({ ...sub, [name]: parseInt(value) });
  };

  useEffect(() => {
    if (Object?.keys(sub)?.length === tSubjects) {
      if (Object?.values(sub)?.reduce((a, b) => a + b) === wDays * wHours) {
        setEnable(true);
      } else {
        setEnable(false);
      }
    }
  }, [sub]);

  const submit = () => {
      localStorage.setItem("subjectWise", JSON.stringify(sub))
      history.push('/user-input/subject-wise/final-output')
  }

  return (
    <Container>
      <IconWrapper onClick={()=>history.goBack()}>
        <BiArrowBack/>
      </IconWrapper>
      <WrapperContainer>
        {subjects.slice(0, tSubjects).map((subject) => {
          return (
            <Wrapper>
              <Label>{`${subject} :`}</Label>
              <Input
                placeholder="enter time"
                onChange={(e) => onChangeInput(subject, e.target.value)}
                type="number"
              />
            </Wrapper>
          );
        })}
        {enable && (<Button onClick={submit}>Generate Table</Button>)}
      </WrapperContainer>
    </Container>
  );
}

export default Form2;
