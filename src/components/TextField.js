import React from "react";
import { ErrorMessage, useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto !important;
  height: 60px;
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: auto !important;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // background-color: greenyellow;
`;

const Label = styled.p`
  font-size: 15px;
  width: 240px;
`;

const ErrorWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Error = styled.p`
  font-size: 12px;
  height: 10px;
  color: red;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  padding: 0 5px;
`;

export const TextInput = ({ label, onChangeCapture, ...props }) => {
  const [field, meta] = useField(props);

 

  return (
    <Wrapper>
      <InputWrapper key={label}>
        <Label>{label}</Label>

        <Input
          label={meta.touched && meta.error ? meta.error : label}
          {...field}
          {...props}
          autoComplete="off"
          onChangeCapture={onChangeCapture}
        />
      </InputWrapper>

      <ErrorWrapper>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </ErrorWrapper>
    </Wrapper>
  );
};
