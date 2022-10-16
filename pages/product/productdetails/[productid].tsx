import SingleProductDetails from "@components/singleproductdetails";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) =>
  await fetch(...args).then((res) => res.json());

const ProductDetails = () => {
  const router = useRouter();
  const { productid } = router?.query;
  const [product, setProduct] = useState();

  const { data, error } = useSWR(
    `https://dummyjson.com/products/${productid}`,
    fetcher
  );

  console.log("data", data);
  console.log("pid", productid);

  const { id, title, description, price, thumbnail } = data;

  return (
    <div className="container mt-5">
      <div className="card">
        <Image
          src={thumbnail}
          className="card-img-top"
          alt={title}
          width="500"
          height="500"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
