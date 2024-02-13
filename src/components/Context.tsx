import { createContext, Dispatch, ReactNode, useReducer } from "react";
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
