import { Dispatch } from "react";
interface State {
  count: number;
}

type Action = "Increment" | "Decrement";
interface CounterContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}
