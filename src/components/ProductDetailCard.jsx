/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import PropTypes from 'prop-types';
import priceFormated from '../utils/formaterPrice';
import ProductQuantity from './ProductQuantity';

export default class ProductDetailCard extends Component {
  render() {
    const { productDetails } = this.props;
    const { title, price, pictures } = productDetails;

    return (
      <>
        <div className="card" style={ { width: '18rem' } }>
          <img
            className="card-img-top"
            src={ pictures[0].url }
            alt={ title }
            style={ { width: '20%', alignSelf: 'center' } }
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={ { height: '35px', overflow: 'hidden' } }
            >
              { title }
            </h5>
            <div className="card-footer d-flex justify-content-center">
              {priceFormated(price)}
            </div>
          </div>
        </div>
        <div>
          <ProductQuantity />
        </div>
      </>
    );
  }
}

ProductDetailCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
