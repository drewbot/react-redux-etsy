//React imports
import React, {Component} from 'react';

// Redux Imports
import { connect } from 'react-redux';

class ProductList extends Component {
  render() {
    const products = this.props.products.map( (product, index) => {
      return (
        <li key={product.listing_id}>{product.title}</li>
      )
    })
    return (
        <ul>{ products }</ul>
    )
  }
}

const mapStateToProps = function(state) {
  console.log(state)
  return {
    products: state.sortProducts
  }
};

export default connect(mapStateToProps)(ProductList);
