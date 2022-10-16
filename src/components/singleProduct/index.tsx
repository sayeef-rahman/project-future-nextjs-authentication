import { Router } from "@i18n";
import { useRouter } from "next/router";
import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleProduct: FC = (props: any) => {
  const router = useRouter();
  const handleProductDetails = async (id: string) => {
    router.push(`/product/productdetails/${id}`);
  };
  console.log(props.product);
  const { id, title, description, price, thumbnail } = props?.product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => handleProductDetails(id)}>
          Product Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
