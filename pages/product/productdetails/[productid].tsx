import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { GetServerSideProps, NextPage } from "next";

type ProductPropsType = {
  id: string;
  description: string;
  price: number;
  thumbnail: string;
  title: string;
};

type propsData = {
  data: ProductPropsType;
};

const ProductDetails: NextPage<propsData> = (props) => {
  const router = useRouter();
  const { data } = props;
  const { productid } = router?.query;

  const [isLoading, setIsLoading] = useState(true);
  console.log("pid", productid);

  const { id, title, description, price, thumbnail } = data;

  return (
    <div className="container mt-5">
      {isLoading ? (
        <div className="card">
          <Image
            placeholder="blur"
            blurDataURL="https://miro.medium.com/max/318/1*G1x8QswbLNMM6DeEXX8N7w.png"
            src={thumbnail}
            className="card-img-top"
            alt={title}
            width="500"
            height="500"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        <p>Loading.........</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { query } = context;
  const { productid } = query;
  const res = await fetch(`https://dummyjson.com/products/${productid}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default ProductDetails;
