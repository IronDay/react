import { useReducer } from "react";

interface State {
  count: number;
}

type Action = "Increment" | "Decrement";

const reducer = (state: State, action: Action) => {
  switch (action) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
  }
};

const Reducer = () => {
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className=" min-h-[100vh] flex flex-col gap-3 justify-center items-center">
      <p>{count}</p>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch("Increment")}
          className="bg-purple-400 p-3 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch("Decrement")}
          className="bg-stone-400 p-3 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Reducer;
