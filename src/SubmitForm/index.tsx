import { Field, Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Task from "./models/Task";
import axios from "axios";
import CchallangeLoader from "../components/CchallangeLoader";

const SubmitForm = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (values: FormValues) => {
    postSolution(values.name, values.taskId, values.solutionCode);
  };

  const postSolution = (
    submissionerName: string,
    taskId: string,
    solutionCode: string
  ) => {
    setIsLoading(true);
    axios
      .request<string>({
        method: "post",
        url: "https://localhost:44379/submitTask",
        data: {
          submissionerName,
          taskId,
          solutionCode,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((x) => x.data)
      .then((x) => {
        setResult(x);
        setIsLoading(false);
      })
      .catch((x) => {
        setResult("There was a problem while uploading your solution.");
        setIsLoading(false);
      });
  };

  const initialValues: FormValues = {
    name: "",
    taskId: "",
    solutionCode: "",
  };

  const getTaskDescription = (taskId: string) =>
    tasksMock.find((x) => x.id === taskId)?.description;

  if (isLoading) {
    return <CchallangeLoader />;
  }

  if (result) {
    return <h2>{result}</h2>;
  }

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

export default SubmitForm;

const tasksMock: Task[] = [
  {
    id: "683a8c42-225c-4ed4-ba4a-e8c5a8523dce",
    name: "Echo1",
    description: `Description of Echo1 task. Input should be equal to output.`,
  },
  {
    id: "d6ee10cd-bd75-4b51-8d6a-d701e5b1faf6",
    name: "Echo2",
    description: `Description of Echo2 task. Input should be equal to output.`,
  },
];
