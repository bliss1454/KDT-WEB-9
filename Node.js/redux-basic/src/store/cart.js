import {createStore} from "redux";

export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"

const reducer = (state, action) => {
    switch(action.style) {
        case ADD_CART:
            return [...state, action.product]
        case REMOVE_CART:
            return state.filter( (el) => el.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;