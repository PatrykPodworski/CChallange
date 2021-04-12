import { Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Task from "./models/Task";

const SubmitForm = () => {
  const handleOnSubmit = (values: FormValues) => {
    console.log(values);
  };

  const initialValues: FormValues = {
    name: "",
    taskId: "",
    solutionCode: "",
  };

  const getTaskDescription = (taskId: string) =>
    tasksMock.find((x) => x.id === taskId)?.description;

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      {(props: FormikProps<FormValues>) => (
        <StyledForm>
          <StyledInputGroup>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledField id="name" name="name" placeholder="Name" />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor="taskId">Task</StyledLabel>
            <StyledSelect
              name="taskId"
              value={props.values.taskId}
              onBlur={() => props.setFieldTouched("taskId", true)}
              onChange={(e) => props.setFieldValue("taskId", e.target.value)}
            >
              <option key={"default"} value="" label="Select a task" />
              {tasksMock.map((x) => (
                <option key={x.id} value={x.id} label={x.name} />
              ))}
            </StyledSelect>
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel>Description</StyledLabel>
            <StyledP>{getTaskDescription(props.values.taskId)}</StyledP>
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
      )}
    </Formik>
  );
};

const StyledSelect = styled.select`
  flex-grow: 1;
`;

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
  taskId: string;
  solutionCode: string;
};

const taskDescription = `Meoooow meowing chowing and wowing purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table eat owner's food or catch eat throw up catch eat throw up bad birds weigh eight pounds but take up.`;

export default SubmitForm;

const tasksMock: Task[] = [
  {
    id: "task1 id",
    name: "task1 name",
    description: `task1 ${taskDescription}`,
  },
  {
    id: "task2 id",
    name: "task2 name",
    description: `task2 ${taskDescription}`,
  },
  {
    id: "task3 id",
    name: "task3 name",
    description: `task3 ${taskDescription}`,
  },
];
