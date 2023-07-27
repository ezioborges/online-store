/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { readGetProducts } from '../services/shoppingCartApi';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppinCartItems: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const items = await readGetProducts();
    this.setState({
      shoppinCartItems: items,
    });
  };

  render() {
    const { shoppinCartItems } = this.state;
    const textShoppingCart = 'Carrinho de compras';
    return (
      <Container fluid>
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <h1>{ textShoppingCart }</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-2">
          <Col xs={ 8 }>
            <Table className="table-striped">
              <thead className="table-primary">
                <tr>
                  <th className="text-center">*</th>
                  <th className="text-center">Nome do Produto</th>
                  <th className="text-center">Preço</th>
                  <th className="text-center">Excluir</th>
                </tr>
              </thead>
              <tbody>
                {
                  shoppinCartItems.map((items, index) => (
                    <tr key={ index }>
                      <td>
                        <img src={ items.thumbnail } alt={ items.title } />
                      </td>
                      <td>
                        {items.title}
                      </td>
                      <td>
                        { items.price }
                      </td>
                      <td>
                        <Button>
                          <BsFillTrash3Fill />
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
