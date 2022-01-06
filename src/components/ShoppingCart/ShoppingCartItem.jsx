import React from "react";
import { NavDropdown } from "react-bootstrap";

export const ShoppingCartItem  = ({item}) => {
    const {name, price, image} = item;

    const imgStyle = {
        width       :"4em",
        marginRight : "8px",
    };

    const itemStyle = {
        display        : "flex",
        justifyContent : "flex-start",
        minWidth       : "max-content"
    }

    return (
        <NavDropdown.Item style={itemStyle}>
            <img src={image} style={imgStyle} alt="product-img"/>
            <div>
                <p>{name}</p>
                <p><b>${price}</b></p>
            </div>
        </NavDropdown.Item>
    )
}