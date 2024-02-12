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
