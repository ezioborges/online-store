import { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default class ProductQuantity extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={ 2 } className="d-flex justify-content-end">
            <Button>+</Button>
          </Col>
          <Col xs={ 2 }>
            <div>{}</div>
          </Col>
          <Col xs={ 2 } className="d-flex justify-content-start">
            <Button>-</Button>
          </Col>
          <Col>
            <Button>
              Adicionar ao carrinho de compras
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
