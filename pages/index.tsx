import SingleProduct from "@components/singleProduct";
import React from "react";

const Home: React.FC = (props) => {
  const { data } = props;
  const products = data.products;
  console.log("products: ", products);
  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="text-center my-4">Home Page</h1>
      {products.map((product: any) => {
        return <SingleProduct key={product.id} product={product} />;
      })}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch("https://dummyjson.com/products?skip=0&limit=15");
  const data = await res.json();
  console.log("products:", data);
  return {
    props: {
      data,
    },
  };
}

export default Home;
