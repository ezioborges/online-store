import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class ProductList extends Component {
  render() {
    const { singleProduct } = this.props;
    return (
      <div>
        <div className="product-img-content">
          <img
            src={ singleProduct.thumbnail }
            alt={ singleProduct.title }
            className="product-img"
          />
        </div>
        <div className="product-description-items">
          <p className="product-title">{ singleProduct.title }</p>
          <p className="product-price">
            {
              singleProduct.price
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }

          </p>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  validRequest: PropTypes.bool,
}.isRequired;
