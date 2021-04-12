import { Field, Form, Formik } from "formik";
import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const SubmitForm = () => {
  const handleOnSubmit = (values: FormValues) => {
    console.log(values);
  };

  const initialValues: FormValues = {
    name: "",
    taskType: "Task1",
    solutionCode: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      <StyledForm>
        <StyledInputGroup>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledField id="name" name="name" placeholder="Name" />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="taskType">Task</StyledLabel>
          <StyledField id="taskType" name="taskType" placeholder="Task" />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel>Description</StyledLabel>
          <StyledP>{taskDescription}</StyledP>
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="solutionCode">Solution code</StyledLabel>
          <StyledField
            id="solutionCode"
            name="solutionCode"
            placeholder="Solution code"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledInputGroup>
      </StyledForm>
    </Formik>
  );
};

const StyledP = styled.p`
  margin: 0;
`;

const StyledField = styled(Field)`
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  margin-left: 0px;
`;

const StyledLabel = styled.label`
  flex-basis: 120px;
  flex-shrink: 0;
`;

const StyledInputGroup = styled.div`
  display: flex;
  margin: 8px 0px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 64px;
  max-width: 400px;
`;

type FormValues = {
  name: string;
  taskType: TaskType;
  solutionCode: string;
};

type TaskType = "Task1" | "Task2";

const taskDescription = `Meoooow meowing chowing and wowing purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table eat owner's food or catch eat throw up catch eat throw up bad birds weigh eight pounds but take up.`;

export default SubmitForm;
