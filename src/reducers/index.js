import { combineReducers } from 'redux';
import { GET_PRODUCTS, SORT_PRODUCTS_UNDER, SORT_PRODUCTS_OVER} from '../actions/index';
import products from '../data/products';

const initialState = {
  products: products,
  filter: 'all'
}

const getProducts = ( state = products, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      console.log('get products action', action.payload.products);
      return action.payload.products
  }
  return state;
}

const sortProducts = ( state = products, action ) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return action.payload.products;
    case SORT_PRODUCTS_UNDER:
      let dataUnder = action.payload.products;
      return [
        ...dataUnder.filter(product => (Number(product.price) < 20 ) )
      ]
    case SORT_PRODUCTS_OVER:
      let dataOver = action.payload.products;
      return [
        ...dataOver.filter(product => (Number(product.price) > 20 ) )
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
