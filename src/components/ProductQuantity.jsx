/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { saveProductOnShoppingCart } = this.props;
    const { quantity } = this.state;
    return (
      <div className="d-flex flex-column mt-4">
        <div className="d-flex flex-row justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={ { borderRadius: '100%', width: '60px' } }
          >
            -
          </button>
          <div
            className="ms-2 me-2"
          >
            <h3>
              { quantity }
            </h3>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={ { borderRadius: '100%', width: '60px' } }
          >
            +
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center my-2">
          <button
            type="button"
            onClick={ saveProductOnShoppingCart }
            className="btn btn-primary ms-1"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  saveProductOnShoppingCart: PropTypes.func,
}.isRequired;
