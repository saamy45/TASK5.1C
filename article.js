// src/components/ArticleForm.js
import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const ArticleForm = () => (
  <Form>
    <Form.Field>
      <label>Title</label>
      <Input placeholder="Enter a descriptive title" />
    </Form.Field>
    <Form.Field>
      <label>Abstract</label>
      <TextArea placeholder="Enter a 1-paragraph abstract" />
    </Form.Field>
    <Form.Field>
      <label>Article Text</label>
      <TextArea placeholder="Enter the full article text" />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Input placeholder="Add up to 3 tags to describe your article e.g., Java" />
    </Form.Field>
  </Form>
);

export default ArticleForm;
