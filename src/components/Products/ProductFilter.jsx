import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../app/services/productsServices";
import { filterByCategory } from "../../redux/actions/products/productsActions";

export const ProductFilter = ({history}) => {

    const [filters, setFilters] = useState([])

    const dispatcher = useDispatch();

    useEffect(() => {
        getAllCategories()
            .then((data) => setFilters(data))
    }, [])

    const handleClickFilter = (filter) => {
        // history.push(`/products/${filter}`)
        dispatcher(filterByCategory(filter));
    }

    return (
        <Dropdown className="mt-5">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {
                filters.length > 0 && filters.map((filter, index) => <Dropdown.Item key={index} onClick={() => handleClickFilter(filter)}> {filter}</Dropdown.Item>)
            }
            
        </Dropdown.Menu>
        </Dropdown>
    );
};
