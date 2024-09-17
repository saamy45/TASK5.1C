import React, { useState } from "react";
import { Form, Radio, Button, Header } from "semantic-ui-react";
import QuestionForm from "./COMPONENTS/question";
import ArticleForm from "./COMPONENTS/article";

const App = () => {
  const [postType, setPostType] = useState("Question");

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Header as="h1">New Post</Header>

      {/* Post Type Selection */}
      <Form>
        <Form.Field>
          <label>Select Post Type:</label>
          <Radio
            label="Question"
            name="postType"
            value="Question"
            checked={postType === "Question"}
            onChange={handlePostTypeChange}
            style={{ marginRight: "10px" }}
          />
          <Radio
            label="Article"
            name="postType"
            value="Article"
            checked={postType === "Article"}
            onChange={handlePostTypeChange}
          />
        </Form.Field>
      </Form>

      {/* Conditionally render form based on post type */}
      {postType === "Question" ? <QuestionForm /> : <ArticleForm />}

      {/* Post Button */}
      <Button primary style={{ marginTop: "20px" }}>
        Post
      </Button>
    </div>
  );
};

export default App;