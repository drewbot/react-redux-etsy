// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Import styles
import './index.css';

// Components
import ProductBoard from './containers/ProductBoard';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ProductBoard>
      <ProductFilter />
      <ProductList />
    </ProductBoard>
  </Provider>,
  document.getElementById('root')
)
