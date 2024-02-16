import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
  step: number;
};

type Actions = {
  /* increment: (action: Action) => void;
  decrement: (action: Action) => void;*/
  dispatch: (action: Action) => void;
};
const countReducers = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.step };
    case "decrement":
      return { count: state.count - action.step };
    default:
      return state;
  }
};

/*export const CounterStore = create<State & Actions>()((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  };
});*/

export const useCounterStore = create<State & Actions>((set) => ({
  count: 0,
  dispatch: (action: Action) => set((state) => countReducers(state, action)),
}));
