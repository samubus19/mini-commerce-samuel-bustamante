import React from "react";
import { Container } from 'react-bootstrap'
import { ListProducts } from '../components/Products/ListProducts';
import { ProductFilter } from "../components/Products/ProductFilter";


export const Home = ({history}) => (
    <Container>
            <div className="App">
                <ProductFilter history={history}></ProductFilter>
                <ListProducts/>
            </div>
    </Container>
)