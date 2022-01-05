import React from "react";
import { Col, Row, Card, Button, CardGroup, Badge } from "react-bootstrap";

export const Product = ({ item }) => {
  const { title, image, price, description } = item;

  const styles = {
    width: "100%",
    height: "15vw",
    objectFit: "cover",
  };

  const textStyle = {
    display        : "flex",
    flexDirection  : "column",
    justifyContent : "space-between",
  }

  const priceStyle = {
        color:"green"
  }

  return (
    <CardGroup>
      <Card className="mt-5">
        <Card.Img variant="top" src={image} style={styles} />
        <Card.Body style={textStyle}>
            <Card.Title>{title}</Card.Title>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"flex-end"}} className="mt-3">
                <p className="h5" style={priceStyle}>
                    ${price}
                </p>
                <Button variant="primary" style={{width:"max-content"}}>
                    + Add to cart
                </Button>
            </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
