interface State {
  count: number;
}
interface Actions {
  increment: () => void;
  decrement: () => void;
}

export const CounterStore = create<State & Actions>()((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  };
});
