import React from "react";

const StartScreen = ({ questions, dispatch }) => {
  console.log(questions);
  return (
    <div className="bg-[#556468] p-5 items-center rounded-md flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-white">
        Welcome to the React Quiz
      </h3>
      <p className="text-lg text-white">
        {questions.length} questions are waiting you to start test your
        knowledge
      </p>
      <button
        onClick={(e) => dispatch({ type: "ready" })}
        className="bg-white p-2 rounded-md hover:bg-green-300"
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
