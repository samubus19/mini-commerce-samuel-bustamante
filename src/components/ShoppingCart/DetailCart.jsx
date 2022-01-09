import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productsCartServices";
export const DetailCart = () => {

  const [products, setProducts]     = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  
  const getTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
        total += product.price
    });
    console.log(total)
    setTotalPrice(total)
}

  useEffect(() => {
      getAllProducts().then((allProductsFromDB) => {
          setProducts(allProductsFromDB)
        });
        if(products.length > 0) {
            getTotalPrice()
          }
    }, [products]);
    
  

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div
        className="h5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className="h6">TOTAL:</p>
        <p className="h6">${ totalPrice }</p>
      </div>
      <hr/>
    </>
  );
};
