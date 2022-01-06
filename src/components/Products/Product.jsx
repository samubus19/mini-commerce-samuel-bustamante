import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import db from '../../app/db/db'

export const Product = ({ item }) => {
  const { title, image, price} = item;

  const addProductToCart = ({title, price, category, image}) => {
    db.cart.add({
      name     : title,
      price    : price,
      category : category,
      image    : image
      }
    )
  }

  const styles = {
    width          : "100%",
    height         : "16vw",
    objectFit      : "cover",
  };

  const textStyle = {
    display        : "flex",
    flexDirection  : "column",
    justifyContent : "space-between",
    textAlign      : "left"
  }

  const priceStyle = {
        color:"#00B91C"
  }

  return (
    <CardGroup>
      <Card className="mt-5">
        <Card.Img variant="top" src={image} style={styles} />
        <Card.Body style={textStyle}>
            <Card.Title as="h6">{title}</Card.Title>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"flex-end"}} className="mt-3">
                <p className="h5" style={priceStyle}>
                    ${price}
                </p>
                <Button onClick={() => addProductToCart(item)} variant="dark" >
                    <span><FontAwesomeIcon icon={faPlusCircle}/></span> Add to cart
                </Button>
            </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
