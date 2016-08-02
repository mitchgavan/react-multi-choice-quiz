import React from "react";

function Result(props) {
  
  return (
    <div className="result">
      You prefer <strong>{props.quizResult}</strong>!
    </div>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
