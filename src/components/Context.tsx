import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface State {
  count: number;
}

type Action = "Increment" | "Decrement";

interface CounterContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const reducer = (state: State, action: Action) => {
  switch (action) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
  }
};

export const CounterContext = createContext<CounterContextProps | null>(null);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const Context = () => {
  const context = useContext(CounterContext);
  if (context) {
    const {
      state: { count },
      dispatch,
    } = context;

    return (
      <div className=" min-h-[100vh] flex flex-col gap-3 justify-center items-center">
        <p className="font-[roboto] font-bold">{count}</p>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch("Increment")}
            className="border border-blue-400 p-3 rounded font-[roboto]"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch("Decrement")}
            className="border border-stone-400 p-3 rounded font-[roboto]"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
};

export default Context;
