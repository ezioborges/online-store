/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import priceFormated from '../utils/formaterPrice';

export default class ProductDetailCard extends Component {
  render() {
    const { productDetails, saveProductOnShoppingCart, home } = this.props;
    const { title, price, pictures } = productDetails;

    return (
      <Card style={ { width: '30vw' } }>
        <Card.Img variant="top" src={ pictures[0].url } alt={ title } />
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <Card.Footer className="d-flex justify-content-center">
            {priceFormated(price)}
          </Card.Footer>
          <Row className="d-flex flex-row justify-content-center mt-3">
            <Col className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={ home }
                style={ { height: '10vh', width: '10vw' } }
              >
                voltar para tela inicial
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                style={ { height: '10vh', width: '10vw' } }
                onClick={ saveProductOnShoppingCart }
                data-testid="shopping-cart-button"
              >
                Adicionar ao carrinho de compras
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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
