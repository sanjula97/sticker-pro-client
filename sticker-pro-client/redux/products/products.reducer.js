import {
    GET_PRODUCTS_REQUEST,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
} from './products.types';
import { CLEAR_REDUX_STORE } from '../general/general.types';

const initialState = {

  isLoadingGetProducts: false,
  isGetProductsError: false,
  products: [],
  cart: [],
  cartItems: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_REDUX_STORE:
            return {
                ...INITIAL_STATE
            }
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoadingGetProducts: true
            }
        case CART_ADD_ITEM:
            let newItem = { ...action.payload.product, quantity: action.payload.quantity }
            const existItem = state.cart.find((item) => item.slug === newItem.slug)
            const cartItems = existItem ? state.cart.map((item) => item.name === existItem.name ? newItem : item) : [...state.cart, newItem]

            return {
                ...state,
                cart: cartItems
            }
        case CART_REMOVE_ITEM:
            const newItems = state.cart.filter((item) => item.slug !== action.payload.slug);

            return {
                ...state,
                cart: newItems
            }
        default:
            return state
    }
}
