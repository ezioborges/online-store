import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class ProductList extends Component {
  render() {
    const {
      validRequest,
      errMessage,
      products,
    } = this.props;
    return (
      <ul className="product-list-content">
        {
          !validRequest ? errMessage
            : (products.map(({ title, thumbnail, price }, index) => (
              <li
                key={ index }
                data-testid="product"
                className="product-list-items"
              >
                <img src={ thumbnail } alt={ title } className="product-img" />
                <div className="product-description-items">
                  <p className="product-title">{ title }</p>
                  <p className="product-price">
                    {
                      price
                        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                  </p>
                </div>
              </li>
            )))
        }
      </ul>
    );
  }
}

ProductList.propTypes = {
  validRequest: PropTypes.bool,
}.isRequired;
