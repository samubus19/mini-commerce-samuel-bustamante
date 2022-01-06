import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";
import db from "../../app/db/db"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/style.css'

export const ShoppingCart = () => {

  const [productsCart, setProductsCart] = useState([])
  const [totalPrice, setTotalPrice]     = useState(0)

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  })

  const getTotalPrice = () => {
    let total = 0
    productsCart.forEach((product) => {
      total += product.price;
    })
    setTotalPrice(total)
  }

  useEffect(() => {
    if(productsCart.length > 0) {
      getTotalPrice()
    }
  }, [productsCart])

  return (
    <>
      <Navbar.Collapse id="navbar-dark-example" className="justify-content-end"> 
        <Nav >
          <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="light"
            align="end"
            drop="down"
            title={
              <div >
                  <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
              </div>
          } 
          >
            <NavDropdown.ItemText>Tu carrito de compras:</NavDropdown.ItemText>
            <NavDropdown.Divider />
              { productsCart?.map((product) => <ShoppingCartItem item={product} key={product.id}/>)}
            <NavDropdown.Divider />
            <NavDropdown.Item >Total: <b> ${totalPrice} </b></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      ;
    </>
  );
};
