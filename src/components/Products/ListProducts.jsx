import React, { useEffect }         from "react";
import { useState }                 from "react";
import { Row }                      from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Product }                  from "./Product";
import { allProducts } from "../../redux/actions/products/productsActions";

export const ListProducts = () => {

    const products   = useSelector((state) => state.productsReducer.products);
    
     return (
        <Row xs={1} md={4}>
            {
                products.map((product, index) => <Product key={index} item={product}/>)
            }
        </Row>
    )
}