// React imports
import React, {Component} from 'react';

// Redux Imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as ProductActionCreators from '../actions';

class ProductFilter extends Component {
  render() {
    const { dispatch } = this.props;
    const getProducts = bindActionCreators(ProductActionCreators.getProducts, dispatch);
    const sortProductsUnder = bindActionCreators(ProductActionCreators.sortProductsUnder, dispatch);
    const sortProductsOver = bindActionCreators(ProductActionCreators.sortProductsOver, dispatch);
    return (
      <div>
        <button onClick={ () => getProducts(this.props) }>Show all</button>
        <button onClick={ () => sortProductsUnder(this.props) }>Under $20</button>
        <button onClick={ () => sortProductsOver(this.props) }>Greater than $20</button>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.getProducts
  }
};

export default connect(mapStateToProps)(ProductFilter);
