/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
  Row } from 'react-bootstrap';
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
          className="py-5 mb-0 bg-dark d-flex justify-content-around"
        >
          <Col
            className={ `d-flex 
            justify-content-center 
            align-items-center` }
            style={ { color: 'white' } }
          >
            <p style={ { fontSize: '1.2em' } }>Online Store</p>
          </Col>
          <Col xs={ 6 }>
            <InputGroup className="d-flex justify-content-center align-items-center">
              <Form.Control
                className="py-3"
                placeholder="Digite aqui sua busca..."
                data-testid="query-input"
                value={ query }
                name="query"
                onChange={ handleChange }
                onKeyUp={ handleKeyUp }
              />
              <Button
                variant="danger"
                className="my-0 py-3 px-4"
                data-testid="query-button"
                onClick={ productsClick }
                type="button"
              >
                pesquisar
              </Button>
            </InputGroup>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/shopping-cart">
              <Button
                className="m-0 py-2 d-flex justify-content-center"
                variant="danger"
                id="button-addon2"
              >
                <AiOutlineShoppingCart
                  style={ { fontSize: '2em', alignSelf: 'center' } }
                />
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Collapse
                id="navbar-dark-example"
                className="d-flex justify-content-center"
              >
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Categoties"
                    menuVariant="secondary"
                    className="py-2"
                  >
                    {
                      allCategories.map((category, index) => (
                        <NavDropdown.Item
                          style={ { width: '67vw' } } // aqui muda o tamo do DropDown
                          key={ index }
                          id={ category.id }
                          onClick={ getProductsByCategoryIdClick }
                        >
                          { category.name }
                        </NavDropdown.Item>
                      ))
                    }
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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
