import { FETCH_PRODUCTS, FILTER__PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../actions/types";

const initialState = { items: [], filteredItems: [], size: '' }
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort
            };
        case FILTER__PRODUCTS_BY_SIZE:
            return {
                ...state,
                filteredItems: action.payload.items,
                size: action.payload.size
            };

        default:
            return state;
    }
};