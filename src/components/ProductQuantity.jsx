/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
      <Container
        style={ { width: '75%' } }
        className="d-flex justify-content-center mb-3"
        fluid
      >
        <Row className="d-flex justify-content-center">
          <Row>
            <h1>Quantidade</h1>
          </Row>
          <Row>
            <Col className="d-flex">
              <Button
                className="m-2"
                style={ { borderRadius: '100%', width: '2.5vw' } }
              >
                -
              </Button>
              <div
                className="m-2 d-flex justify-content-center align-items-center"
                style={ { width: '2vw' } }
              >
                <h3>
                  { quantity }
                </h3>
              </div>
              <Button
                className="m-2"
                style={ { borderRadius: '100%', width: '2.5vw' } }
              >
                +
              </Button>
              <Button
                onClick={ saveProductOnShoppingCart }
                className="m-2"
              >
                Adicionar ao carrinho de compras
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

ProductQuantity.propTypes = {
  saveProductOnShoppingCart: PropTypes.func,
}.isRequired;
