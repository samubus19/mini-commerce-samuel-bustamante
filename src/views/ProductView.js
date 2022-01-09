import React from "react";
import "../assets/css/ProductDetailStyle.css"
import { ProductDetailItem } from "../components/ShoppingCart/ProductDetailItem";

export const ProductView = ({ match }) => {


  return (
    <ProductDetailItem match={match}/>
  );
};
