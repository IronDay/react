import getProducts from "./Products";

interface Props {
  name: string;
}

const Product = ({ name }: Props) => {
  return <p>{name}</p>;
};

function App() {
  const products = getProducts();

  return (
    <div>
      {products.map((product,index) => (
        <Product key={index} name={product} />
      ))}
    </div>
  );
}

export default App;
