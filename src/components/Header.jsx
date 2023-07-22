/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Button, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

export default class NavBar extends Component {
  render() {
    const {
      productsClick,
      query,
      handleChange,
      handleKeyUp,
      allCategories,
      getProductsByCategoryIdClick,
    } = this.props;

    return (
      <Container fluid>
        <Row
          className="py-5 mb-5 bg-dark"
        >
          <Col
            className={ `d-flex 
            justify-content-center 
            align-items-center` }
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="danger"
                id="dropdown-basic"
                className={ `d-flex
                 flex-row
                 justify-content-center
                 align-items-center
                 my-0 
                 py-3` }
                style={ { width: '20vw' } }
              >
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  allCategories.map((category, index) => (
                    <Dropdown.Item
                      key={ index }
                      id={ category.id }
                      onClick={ getProductsByCategoryIdClick }
                    >
                      { category.name }
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={ 8 }>
            <InputGroup className="d-flex justify-content-center align-items-center">
              <Form.Control
                className="py-3 d-flex"
                placeholder="Digite aqui sua busca..."
                data-testid="query-input"
                value={ query }
                name="query"
                onChange={ handleChange }
                onKeyUp={ handleKeyUp }
              />
              <Button
                variant="danger"
                className="my-0 py-3"
                data-testid="query-button"
                onClick={ productsClick }
                type="button"
              >
                pesquisar
              </Button>
            </InputGroup>
          </Col>
          <Col
            xs={ 1 }
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/shopping-cart">
              <Button
                className="m-0 py-2"
                variant="danger"
                id="button-addon2"
              >
                <AiOutlineShoppingCart style={ { fontSize: '2em' } } />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

NavBar.propTypes = {
  productsClick: PropTypes.func,
  query: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeyUp: PropTypes.func,
  allCategories: PropTypes.array,
}.isRequired;
