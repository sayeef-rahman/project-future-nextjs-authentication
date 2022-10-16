import SingleProduct from "@components/singleProduct";
import React from "react";

interface ProductProps{
  product: object
}

const Home: React.FC = (props: any) => {
  const { data } = props;
  const products = data.products;
  return (
    <div className="container">
      <h1 className="text-center my-4">Home Page</h1>
      <div className="row row-cols-lg-4 mx-auto">
        {products.map((product: any) => {
          return (
            <div className="col m-4 ">
              <SingleProduct key={product.id} product = {product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch("https://dummyjson.com/products?skip=0&limit=15");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Home;
