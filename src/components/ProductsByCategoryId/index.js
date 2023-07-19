import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class ProductsByCategoryId extends Component {
  render() {
    const { byCategoryId } = this.props;
    return (
      <ul className="by-category-list-content">
        {
          byCategoryId.map(({ title, thumbnail, price }, index) => (
            <li
              key={ index }
              data-testid="product"
              className="by-category-list-items"
            >
              <img
                src={ thumbnail }
                alt={ title }
                className="by-category-img"
              />
              <div className="by-category-description-items">
                <p className="by-category-title">{ title }</p>
                <p className="by-category-price">
                  {
                    price
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                  }
                </p>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

ProductsByCategoryId.propTypes = {
  byCategoryId: PropTypes.array,
}.isRequired;
