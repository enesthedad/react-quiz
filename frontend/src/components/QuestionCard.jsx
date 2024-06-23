import React from "react";
const question = [
  {
    question: "How does data flow naturally in React apps?",
    options: [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides",
    ],
    correctOption: 0,
    points: 10,
    id: "1dd0",
  },
  {
    question: "How to pass data into a child component?",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
    id: "b7f2",
  },
  {
    question: "When to use derived state?",
    options: [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable",
    ],
    correctOption: 3,
    points: 30,
    id: "c8f1",
  },
  {
    question: "What triggers a UI re-render in React?",
    options: [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements",
    ],
    correctOption: 2,
    points: 20,
    id: "06e0",
  },
];
const QuestionCard = () => {
  return (
    <div className="bg-[#556468] my-auto relative py-5 flex flex-col items-center gap-5 w-[700px] rounded-xl">
      <div className=" font-bold tracking-wide text-xl w-4/5 py-2 rounded-xl pl-5">
        {question[0].question}
      </div>
      {question[0].options.map((items, index) => {
        console.log(question[0].correctOption);
        return (
          <button
            key={index}
            className={`w-4/5 py-2 rounded-lg hover:bg-slate-200 ${
              index === question[0].correctOption
                ? "bg-green-400"
                : "bg-slate-300"
            }`}
          >
            {items}
          </button>
        );
      })}
      <div className="bg-sky-400 absolute right-3 bottom-3 h-12 flex items-center justify-center w-12 rounded-full">
        <span className="font-bold text-xl">{question[0].points}</span>
      </div>
    </div>
  );
};

export default QuestionCard;
