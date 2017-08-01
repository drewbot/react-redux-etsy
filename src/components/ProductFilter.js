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
    const sortProductsUnder = bindActionCreators(ProductActionCreators.sortProductsUnder, dispatch);
    const sortProductsOver = bindActionCreators(ProductActionCreators.sortProductsOver, dispatch);
    return (
      <div>
        <button onClick={ () => sortProductsUnder() }>Under $20</button>
        <button onClick={ () => sortProductsOver() }>Greater than $20</button>
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
