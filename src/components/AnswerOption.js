import React from "react";

function AnswerOption(props) {

    return (
        <li className="answerOption">
            <button
                className="answerOption--button"
                id={props.answerType}
                value={props.answerType}
                checked={props.answerType === props.userAnswer}
                disabled={props.userAnswer}
                onClick={props.onAnswerSelected}
            >
              {props.answerContent}
            </button>
        </li>
    );

}

AnswerOption.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    userAnswer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
