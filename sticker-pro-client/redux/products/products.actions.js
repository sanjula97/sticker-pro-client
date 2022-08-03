import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from './products.types';
import fetchProducts from '../../services/api'

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
      const results = await fetchProducts();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: results });
    } catch (err) {
      console.error(err);
      dispatch({ type: GET_PRODUCTS_FAIL });
    }
  };
};

export const cartAddProduct = (product, quantity) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CART_ADD_ITEM, payload: {product, quantity} });
    } catch (err) {
      console.error(err);
    }
  };
};

export const cartRemoveProduct = (product) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CART_REMOVE_ITEM, payload: product });
    } catch (err) {
      console.error(err);
    }
  };
};