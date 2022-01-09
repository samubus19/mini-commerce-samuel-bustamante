import React, { useEffect } from "react";
import { useState } from "react";
import { Row } from 'react-bootstrap';
import { getAllProducts } from "../../app/services/productsServices";
import { Product } from "./Product";

export const ListProducts = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <Row xs={1} md={4}>
            {
                products.map((product, index) => <Product key={index} item={product}/>)
            }
        </Row>
    )
}