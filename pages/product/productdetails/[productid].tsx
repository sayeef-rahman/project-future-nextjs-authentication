import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => {
  fetch(url)
  .then((res) => res.json());
};

const ProductDetails = () => {
  const router = useRouter();
  const { productid } = router.query;
  const { data, error } = useSWR(
    `https://dummyjson.com/products/${productid}`,
    fetcher
  );
  console.log("data: ", data);

  //   export async function getServerSideProps(context) {
  //     const res = await fetch(`https://dummyjson.com/products/${productid}`);
  //   }

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
