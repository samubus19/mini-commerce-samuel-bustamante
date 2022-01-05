import React from "react";
import { Row } from 'react-bootstrap';
import productsJson from '../examples/products.json'
import { Product } from "./Product";

export const ListProducts = () => {

    const products = productsJson.products;

    return (
        <Row xs={1} md={3}>
            {
                products.map((product, index) => <Product key={index} item={product}/>)
            }
        </Row>
    )
}