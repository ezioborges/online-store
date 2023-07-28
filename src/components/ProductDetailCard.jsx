/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import { addProduct } from '../services/shoppingCartApi';

export default class ProductDetailCard extends Component {
  constructor() {
    super();
    this.state = {
      productDetails: {},
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

  saveProductOnShoppingCart = async () => {
    const { productDetails } = this.state;
    const { history } = this.props;

    await addProduct(productDetails);
    history.push('/shopping-cart');
  };

  home = () => {
    const { history } = this.props;
    history.push('/');
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
      <Container>
        <Row className="d-flex justify-content-center m-5">
          <Card style={ { width: '30vw' } }>
            <Card.Img variant="top" src={ thumbnail } alt={ title } />
            <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Footer className="d-flex justify-content-center">
                {priceFormated}
              </Card.Footer>
              <Row className="d-flex flex-row justify-content-center mt-3">
                <Col className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={ this.home }
                    style={ { height: '10vh', width: '10vw' } }
                  >
                    voltar para tela inicial
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Button
                    style={ { height: '10vh', width: '10vw' } }
                    onClick={ this.saveProductOnShoppingCart }
                    data-testid="shopping-cart-button"
                  >
                    Adicionar ao carrinho de compras
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
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
