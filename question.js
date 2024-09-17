// src/components/QuestionForm.js
import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const QuestionForm = () => (
  <Form>
    <Form.Field>
      <label>Title</label>
      <Input placeholder="Start your question with how, what, why, etc." />
    </Form.Field>
    <Form.Field>
      <label>Describe your problem</label>
      <TextArea placeholder="Describe your problem" />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Input placeholder="Add up to 3 tags to describe your question e.g., Java" />
    </Form.Field>
  </Form>
);

export default QuestionForm;

