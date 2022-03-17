import { combineReducers } from 'redux';
import { productsReducer } from './products/productsReducer';
import { cartReducer }     from './cart/cartReducer';
const initialState = {}

export const rootReducer = (state = initialState, action) => {
    return state
}

export default combineReducers({
    root            : rootReducer,
    productsReducer : productsReducer,
    cartReducer     : cartReducer
})

