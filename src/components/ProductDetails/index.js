import { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import './index.css';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productDetails: '',
    };
  }

  componentDidMount() {
    this.getProductDetail();
  }

  getProductDetail = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductById(id);
    this.setState({ productDetails: product });
  };

  shoppingCart = () => {
    const { history } = this.props;
    history.push('/shopping-cart');
  };

  render() {
    const { productDetails } = this.state;
    const { title, thumbnail, price } = productDetails;

    const formarter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    const priceFormated = formarter.format(price);

    return (
      <div className="product-details-content">
        <div className="product-details">
          <div className="details-img-content">
            <img
              src={ thumbnail }
              alt={ title }
              data-testid="product-detail-image"
              className="details-img"
            />
          </div>
          <div className="description-item">
            <p data-testid="product-detail-name">
              { title }
            </p>
            <p
              data-testid="product-detail-price"
            >
              { priceFormated }
            </p>
          </div>
          <div className="btn">
            <button
              type="button"
              data-testid="shopping-cart-button"
              onClick={ this.shoppingCart }
              className="details-btn"
            >
              Carrinho de compras
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
