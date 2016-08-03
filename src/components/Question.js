import React from "react";
import './Question.css';

function Question(props) {

  return (
    <h2 className="question">{props.content}</h2>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
