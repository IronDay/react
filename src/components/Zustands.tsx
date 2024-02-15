import { CounterStore } from "../stores/CounterStore.ts";

const Zustands = () => {
  const count = CounterStore((state) => state.count);
  const increment = CounterStore((state) => state.increment);
  const decrement = CounterStore((state) => state.decrement);

  return (
    <div className=" min-h-[100vh] flex flex-col gap-3 justify-center items-center">
      <p className="font-[roboto] font-bold">{count}</p>
      <div className="flex gap-3">
        <button
          onClick={increment}
          className="border border-blue-400 rounded p-3 capitalize font-[roboto]"
        >
          increment
        </button>
        <button
          onClick={decrement}
          className="border border-stone-400 p-3 rounded capitalize font-[roboto]"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Zustands;
