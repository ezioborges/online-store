/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProducts, setProducts } from '../services/shoppingCartApi';

export default class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      prodQuantity: 1,
    };
  }

  incrementQuantity = () => {
    const { productDetails } = this.props;
    productDetails.quantity += 1;
    this.setState({ prodQuantity: productDetails.quantity });
  };

  decrementQuantity = () => {
    const { productDetails } = this.props;
    productDetails.quantity -= 1;
    this.setState({ prodQuantity: productDetails.quantity });
  };

  setProdIShoppingCart = () => {
    const { productDetails, history } = this.props;
    const items = getProducts();

    const existingProductIndex = items.findIndex(
      (product) => product.id === productDetails.id,
    );

    if (existingProductIndex) {
      items.push(productDetails);
    }
    setProducts(items);
    history.push('/shopping-cart');
  };

  render() {
    const { prodQuantity } = this.state;
    return (
      <div className="d-flex flex-column mt-4">
        <div className="d-flex flex-row justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={ { borderRadius: '100%', width: '60px' } }
            onClick={ this.decrementQuantity }
          >
            -
          </button>
          <div
            className="ms-2 me-2"
          >
            <h3>
              { prodQuantity }
            </h3>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={ { borderRadius: '100%', width: '60px' } }
            onClick={ this.incrementQuantity }
          >
            +
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center my-2">
          {/* <Link to="/shopping-cart"> */}
          <button
            type="button"
            onClick={ this.setProdIShoppingCart }
            className="btn btn-primary ms-1"
          >
            Ir para o carrinho
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  saveProductOnShoppingCart: PropTypes.func,
}.isRequired;
