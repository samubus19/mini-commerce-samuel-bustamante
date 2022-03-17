import React, { useEffect } from "react";
import { Container }        from 'react-bootstrap'
import { useDispatch }      from "react-redux";
import { ListProducts }     from '../components/Products/ListProducts';
import { ProductFilter }    from "../components/Products/ProductFilter";
import { allProducts }      from "../redux/actions/products/productsActions";

export const Home = ({history}) => {
    
    const dispatcher = useDispatch();
    
        useEffect(() => {
            dispatcher(allProducts());
        }, [])

    return(
        <Container>
                <div className="App">
                    <ProductFilter history={history}></ProductFilter>
                    <ListProducts/>
                </div>
        </Container>
    )}
