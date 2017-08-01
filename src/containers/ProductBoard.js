//React imports
import React, {Component} from 'react';

class ProductBoard extends Component {
  render() {
    return (
      <section>
        <h1>Hello World</h1>
        { this.props.children }
      </section>
    )
  }
}

export default ProductBoard;
