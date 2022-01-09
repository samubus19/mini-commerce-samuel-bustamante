import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { Link } from 'react-router-dom';

export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}}>
            <Navbar.Brand>
              <FontAwesomeIcon
                icon={faStore}
                style={{ marginRight: "5px" }}
              ></FontAwesomeIcon>
              Mini Ecommerce
            </Navbar.Brand>
          </Link>
          <ShoppingCart/>
        </Container>
      </Navbar>
    </>
  );
};
