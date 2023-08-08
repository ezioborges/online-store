/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Style/ProductsCard.css';
import { addProduct } from '../services/shoppingCartApi';
import priceFormated from '../utils/formaterPrice';

export default class ProductsCard extends Component {
  saveProductsClick = async (e) => {
    e.preventDefault();
    const { singleProduct } = this.props;
    await addProduct(singleProduct);
  };

  DescriptionProduct = ({ id, children, title }) => (
    <OverlayTrigger
      overlay={
        <Tooltip id={ id }>
          {title}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );

  render() {
    const { singleProduct } = this.props;
    return (
      <div className="card text-center mb-3">
        <Link
          to={ `/product-details/${singleProduct.id}` }
          data-testid="product-detail-link"
          className="product-detail-link"
        >
          <img
            className="card-img-top"
            style={ { width: '30%' } }
            src={ singleProduct.thumbnail }
            alt={ singleProduct.title }
          />

          <div className="card-body">
            <this.DescriptionProduct
              title={ singleProduct.title }
              id="t-1"
            >
              <h6
                style={ { overflow: 'hidden', height: '40px' } }
              >
                { singleProduct.title }
              </h6>
            </this.DescriptionProduct>
          </div>

          <div className="card-footer">
            <span className="d-flex justify-content-center">
              { priceFormated(singleProduct.price) }

            </span>
          </div>
        </Link>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="product-add-to-cart"
          onClick={ this.saveProductsClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  singleProduct: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  }),
}.isRequired;
