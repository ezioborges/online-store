/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getProducts, setProducts } from '../services/shoppingCartApi';

export default class ProductQuantity extends Component {
  incrementQuantity = () => {
    const { productDetails } = this.props;
    const verifyNumber = -1;
    const items = getProducts();

    const existingProductIndex = items.findIndex(
      (product) => product.id === productDetails.id,
    );

    if (existingProductIndex !== verifyNumber) {
      // Se o produto já existe, atualize a quantidade
      items[existingProductIndex].quantity += productDetails.quantity;
    } else {
      // Caso contrário, adicione o novo produto ao array
      items.push(productDetails);
    }

    setProducts(items);
  };

  decrementQuantity = () => {
    const { productDetails } = this.props;
    const verifyNumber = -1;
    const items = getProducts();

    const existingProductIndex = items.findIndex(
      (product) => product.id === productDetails.id,
    );

    if (existingProductIndex !== verifyNumber) {
      // Se o produto já existe, atualize a quantidade
      items[existingProductIndex].quantity -= productDetails.quantity;
    } else {
      // Caso contrário, adicione o novo produto ao array
      items.push(productDetails);
    }

    setProducts(items);
  };

  render() {
    const { productDetails } = this.props;
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
              { productDetails.quantity }
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
          <Link to="/shopping-cart">
            <button
              type="button"
              onClick={ this.insertProductInShoppingCart }
              className="btn btn-primary ms-1"
            >
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  saveProductOnShoppingCart: PropTypes.func,
}.isRequired;
