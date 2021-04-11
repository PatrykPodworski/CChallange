import { Field, Form, Formik } from "formik";
import React from "react";
import Button from "../components/Button";

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
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Name" />

        <label htmlFor="taskType">Task</label>
        <Field id="taskType" name="taskType" placeholder="Task" />

        <p>{taskDescription}</p>
        <label htmlFor="solutionCode">Solution code</label>
        <Field
          id="solutionCode"
          name="solutionCode"
          placeholder="Solution code"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default SubmitForm;

type FormValues = {
  name: string;
  taskType: TaskType;
  solutionCode: string;
};

type TaskType = "Task1" | "Task2";

const taskDescription = `Meoooow meowing chowing and wowing purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table eat owner's food or catch eat throw up catch eat throw up bad birds weigh eight pounds but take up a full-size bed for meow meow. Thinking longingly about tuna brine dead stare with ears cocked, and lick left leg for ninety minutes, still dirty or shove bum in owner's face like camera lens. Adventure always cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers check cat door for ambush 10 times before coming in or really likes hummus.`;
