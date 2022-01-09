import React from "react";
import { Button, Container } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";

export const PurchaseView = () => {
    return (
        <Container>
            <div className="h4">Tu carrito de compras</div>
            <DetailCart/>


            <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                <Button variant="outline-dark" style={{marginRight:"8px"}}>Cancelar</Button>
                <Button variant="dark" >Comprar</Button>
            </div>
            
        </Container>
    )
}