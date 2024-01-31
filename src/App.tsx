import { ChangeEvent, useMemo, useState, useTransition } from "react";
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

const ProductList = ({
  products,
  isPending,
}: {
  products: string[];
  isPending: boolean;
}) => {
  return (
    <div className="min-h-full grid grid-cols-4 gap-3 place-items-center">
      {isPending ? (
        <p className="w-full text-xl text-center">Updating the list</p>
      ) : (
        products.map((product, index) => <Product key={index} name={product} />)
      )}
    </div>
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

  const filteredProducts = useMemo(
    () => filteringProduct(filterConstraint),
    [filterConstraint]
  );

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
      <ProductList isPending={isPending} products={filteredProducts} />
    </div>
  );
}

export default App;
