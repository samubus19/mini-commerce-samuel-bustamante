import React, { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { getProductsByCategory } from "../../app/services/productsServices";
import { Product } from "./Product";

export const FilterListProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((data) => setProducts(data));
  }, [category]);

  return (
    <Row xs={2} md={4}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos... </p>
        </div>
      ) : (
        products.map((product, index) => <Product key={index} item={product} />)
      )}
    </Row>
  );
};
