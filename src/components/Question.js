import React from 'react';

function Question(props) {

  return (
    <h2 className="question">{props.content}</h2>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
