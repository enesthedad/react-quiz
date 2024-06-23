import React from "react";

const QuestionCard = ({ question, currentQuestion, dispatch }) => {
  const showQuestion = question[currentQuestion];
  return (
    <div className="bg-[#556468] my-auto relative py-5 flex flex-col items-center gap-5 w-[700px] rounded-xl">
      <div className=" font-bold tracking-wide text-xl w-4/5 py-2 rounded-xl pl-5">
        {showQuestion.question}
      </div>
      {showQuestion.options.map((items, index) => {
        console.log(showQuestion.correctOption);
        return (
          <button
            key={index}
            className={`w-4/5 py-2 rounded-lg hover:bg-slate-200 ${
              index === showQuestion.correctOption
                ? "bg-green-400"
                : "bg-slate-300"
            }`}
          >
            {items}
          </button>
        );
      })}
      <div className="flex justify-start items-start w-4/5">
        {question.length === currentQuestion + 1 ? (
          <button
            className="bg-stone-800 text-white font-semibold p-2 px-5 rounded-md "
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Finish Quiz
          </button>
        ) : (
          <button
            className="bg-stone-800 text-white font-semibold p-2 px-5 rounded-md "
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Submit Question
          </button>
        )}
      </div>
      <div className="bg-sky-400 absolute right-3 bottom-3 h-12 flex items-center justify-center w-12 rounded-full">
        <span className="font-bold text-xl">{showQuestion.points}</span>
      </div>
    </div>
  );
};

export default QuestionCard;
