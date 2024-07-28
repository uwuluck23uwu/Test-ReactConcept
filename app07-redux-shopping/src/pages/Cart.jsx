import { useTitle } from "../hooks/useTitle";
import { ProductCart } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/public/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/public/images/1002.png",
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
