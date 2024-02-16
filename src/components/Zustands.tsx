import { useCounterStore } from "../stores/CounterStore.ts";

const Zustands = () => {
  const count = useCounterStore((state) => state.count);
  const dispatch = useCounterStore((state) => state.dispatch);
  /*const increment = CounterStore((state) => state.increment);
      const decrement = CounterStore((state) => state.decrement);*/

  return (
    <div className=" min-h-[100vh] flex flex-col gap-3 justify-center items-center">
      <p className="font-[roboto] font-bold">{count}</p>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "increment", step: 4 })}
          className="border border-blue-400 rounded p-3 capitalize font-[roboto]"
        >
          increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", step: 2 })}
          className="border border-stone-400 p-3 rounded capitalize font-[roboto]"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Zustands;
