import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";
import db from "../../app/db/db"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {

  // const [productsCart, setProductsCart] = useState([])
  const [totalPrice, setTotalPrice]     = useState(0)
  const list = useSelector((state) => state.cartReducer.list)

  // useLiveQuery(async () => {
  //   const productsDB = await db.cart.toArray();
  //   setProductsCart(productsDB);
  // })

  const getTotalPrice = () => {
    let total = 0
    list.forEach((product) => {
      total += product.price;
    })
    setTotalPrice(total)
  }

  useEffect(() => {
    if(list.length > 0) {
      getTotalPrice()
    }
  }, [list])


  return (
    <>
      <Navbar.Collapse id="navbar-dark-example" className="justify-content-end"> 
        <Nav >
          <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="light"
            align="end"
            title={
                  <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
          } 
          >
            <NavDropdown.ItemText>Tu carrito de compras:</NavDropdown.ItemText>
            <NavDropdown.Divider />
              { list?.map((product) => <ShoppingCartItem item={product} key={product.id}/>)}
            <NavDropdown.Divider />
            <NavDropdown.Item ><Link to={"/purchase"} style={{textDecoration:"none", color:"black"}}> Total: <b> ${totalPrice} </b></Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      ;
    </>
  );
};
