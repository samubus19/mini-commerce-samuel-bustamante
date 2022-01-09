import React, { useEffect, useState } from "react";
import { getProductById } from "../../app/services/productsCartServices";
import { Container, Figure, Button } from "react-bootstrap";

export const ProductDetailItem = ({match}) => {

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
      const { params } = match;
    
      getProductById(params.id)
        .then((productFromDB) => setProductDetail(productFromDB))
        .catch((err) => console.log(err));
    }, [match]);
  
    const imageDivStyle = {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "16px",
    };
  
    const detailDivStyle = {
      width: "100%",
      textAlign: "left",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };
  
    const figureStyle = {
      border: "1px solid #ccc",
      margin: "8px auto",
      minWidth: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "16px",
    };



    return (
        <Container>
      {productDetail && (
        <Figure style={figureStyle} className="product-detail">
          <div style={imageDivStyle}>
            <Figure.Image width="50%" alt="your image" src={productDetail.image} className="product-detail__img"/>
          </div>
          <div style={detailDivStyle}>
            <div>
              <h4>{productDetail.name}</h4>
              <Figure.Caption className="mb-3 mt-1">{productDetail.category}</Figure.Caption>
              <h5 style={{color:"#00B91C"}} className="mb-3 mt-1">${productDetail.price}</h5>
              <p className="mb-3 mt-1">Stock disponible</p>
              <p>Cantidad: <span><b>1</b></span></p>
            </div>

            <Button variant="dark" style={{maxWidth:"fit-content"}}>Comprar</Button>
          </div>
        </Figure>
      )}
    </Container>
    )
}