/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
// import { BsFillTrash3Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { readGetProducts, removeItem } from '../services/shoppingCartApi';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppinCartItems: [],
    };
  }

  componentDidMount() {
    this.setItemsInState();
    // this.removeItemList()
  }

  setItemsInState = async () => {
    const items = await readGetProducts();
    this.setState({
      shoppinCartItems: items,
    });
  };

  removeItemList = async ({ target }) => {
    await removeItem(target);
    await this.setItemsInState();
  };

  render() {
    const { shoppinCartItems } = this.state;
    const textShoppingCart = 'Carrinho de compras';
    return (
      <Container fluid>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h1>{ textShoppingCart }</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-3">
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
                  shoppinCartItems.map((item, index) => (
                    <tr key={ index }>
                      <td>
                        <img src={ item.thumbnail } alt={ item.title } />
                      </td>
                      <td style={ { verticalAlign: 'middle', textAlign: 'center' } }>
                        {item.title}
                      </td>
                      <td style={ { verticalAlign: 'middle', textAlign: 'center' } }>
                        { item.price }
                      </td>
                      <td style={ { verticalAlign: 'middle', textAlign: 'center' } }>
                        <Button
                          id={ item.id }
                          onClick={ this.removeItemList }
                          type="button"
                        >
                          delete
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-3">
          <Col
            xs={ 4 }
            className="d-flex justify-content-center"
          >
            <Link to="/">
              <Button>
                Tela inicial
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
