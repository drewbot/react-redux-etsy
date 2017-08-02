export const GET_PRODUCTS = "GET_PRODUCTS";
export const SORT_PRODUCTS_UNDER = "SORT_PRODUCTS_UNDER";
export const SORT_PRODUCTS_OVER = "SORT_PRODUCTS_OVER";
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    payload: products
  };
}

export function sortProductsUnder(products) {
  return {
    type: SORT_PRODUCTS_UNDER,
    payload: products
  };
}

export function sortProductsOver(products) {
  return {
    type: SORT_PRODUCTS_OVER,
    payload: products
  };
}

export function filterProducts(filterType) {
  return {
    type: FILTER_PRODUCTS,
    payload: filterType
  }
}
