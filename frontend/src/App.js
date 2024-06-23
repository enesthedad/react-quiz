import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ErrorCard from "./components/ErrorCard";
const initialState = {
  questions: [],
  error: null,
  status: "loading",
};
function questionReducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "waiting",
      };
    case "dataFailed":
      return {
        ...state,
        error: action.payload,
        status: "error",
      };
    case "ready":
      return {
        ...state,
        status: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}
function App() {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  const { questions, error, status } = { ...state };
  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch("http://localhost:8000/quesions");
      try {
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed", payload: error });
      }
    };
    fetchQuestions();
  }, []);
  console.log(initialState);

  return (
    <div className="App min-h-screen bg-[#2A3335]">
      <Header />
      <div className="min-h-full">
        <Main>
          {status === "waiting" && (
            <StartScreen questions={questions} dispatch={dispatch} />
          )}
          {status === "ready" && <QuestionCard />}
          {status === "error" && <ErrorCard />}
        </Main>
      </div>
    </div>
  );
}

export default App;
