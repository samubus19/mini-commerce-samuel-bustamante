import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" >
            <FontAwesomeIcon
              icon={faStore}
              style={{ marginRight: "5px" }}
            ></FontAwesomeIcon>
            Mini Ecommerce
          </Navbar.Brand>
          <ShoppingCart/>
        </Container>
      </Navbar>
    </>
  );
};
