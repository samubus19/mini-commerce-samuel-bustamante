import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShoppingCartItem  = ({item}) => {
    const {name, price, image, id} = item;

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
        <NavDropdown.Item >
            <Link to={`/product/${id}`} style={itemStyle}>
                <img src={image} style={imgStyle} alt="product-img"/>
                <div>
                    <p>{name}</p>
                    <p><b>${price}</b></p>
                </div>
            </Link>
        </NavDropdown.Item>
    )
}