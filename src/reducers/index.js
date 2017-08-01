import { combineReducers } from 'redux';
import { GET_PRODUCTS, SORT_PRODUCTS_UNDER, SORT_PRODUCTS_OVER} from '../actions/index';
import products from '../data/products';

const getProducts = ( state = products, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return action.payload
  }
  return state;
}

const sortProducts = ( state = products, action ) => {
  switch(action.type) {
    case SORT_PRODUCTS_UNDER:
      return [
        ...state.filter(product => (Number(product.price) < 20 ) )
      ]
    case SORT_PRODUCTS_OVER:
      return [
        ...state.filter(product => (Number(product.price) > 20 ) )
      ]
  }
  return state;
}

const rootReducer = combineReducers({
  products: products,
  getProducts: getProducts,
  sortProducts: sortProducts
});

export default rootReducer;
