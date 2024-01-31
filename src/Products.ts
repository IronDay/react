export default function getProducts() {
  const Products: string[] = [];
  for (let i = 0; i < 10_000; i++) {
    Products.push(`Products ${i}`);
  }

  return Products;
}
