/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import { Card, CardGroup, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

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
      <CardGroup className="mb-3">
        <Card>
          <Link
            to={ `/product-details/${singleProduct.id}` }
            data-testid="product-detail-link"
            className="product-detail-link d-flex flex-column align-items-center"
          >
            <Card.Img
              variant="top"
              src={ singleProduct.thumbnail }
              alt={ singleProduct.title }
            />

            <Card.Body>
              <this.DescriptionProduct
                title={ singleProduct.title }
                id="t-1"
              >
                <Card.Text
                  style={ { overflow: 'hidden', height: '40px' } }
                >
                  { singleProduct.title }
                </Card.Text>
              </this.DescriptionProduct>
            </Card.Body>

            <Card.Footer>
              <Card.Text className="d-flex justify-content-center">
                { priceFormated(singleProduct.price) }

              </Card.Text>
            </Card.Footer>
          </Link>
          <Button
            data-testid="product-add-to-cart"
            onClick={ this.saveProductsClick }
          >
            Adicionar ao Carrinho
          </Button>
        </Card>
      </CardGroup>
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
