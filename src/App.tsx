import { ChangeEvent, useState, useTransition } from "react";
import getProducts from "./Products";

interface Props {
  name: string;
}

const Product = ({ name }: Props) => {
  const splitedName: string[] = name.split(" ");
  return (
    <p className="w-[250px] h-[250px] p-3 border border-gray-950 rounded-xl flex items-center justify-center">
      {splitedName[0]}
      <span className="text-2xl ml-2 text-blue-800">{splitedName[1]}</span>
    </p>
  );
};

const products = getProducts();

const filteringProduct = (filterConstraint: string) => {
  return filterConstraint
    ? products.filter((product) => product.includes(filterConstraint))
    : products;
};

function App() {
  const [isPending, startTransition] = useTransition();
 
  const [filterConstraint, setFilterConstraint] = useState<string>("");
  
  const filteredProducts = filteringProduct(filterConstraint);

  const handleFiltering = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilterConstraint(e.target.value);
    });
  };

  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <div>
        <label className="block text-xl" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className="w-[450px] h-[35px] border border-stone-200 outline-none p-3 rounded-full mb-1"
          type="search"
          value={filterConstraint}
          onChange={handleFiltering}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {filteredProducts.map((product, index) => (
          <Product key={index} name={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
