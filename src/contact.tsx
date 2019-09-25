import React from "react";
import { withRouter } from "react-router-dom";

const Contact = withRouter(({ history }) => {
  const onSubmit = () => history.push("/");

  return (
    <form>
      <input placeholder="name" type="name" />
      <input placeholder="email" type="email" />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
});

export default Contact;
