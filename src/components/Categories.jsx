/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { allCategories, getProductsByCategoryIdClick } = this.props;
    return (
      <Row className="mb-3">
        <Navbar bg="secondary">
          <Container fluid>
            <Navbar.Collapse
              id="navbar-dark-example"
              className="d-flex justify-content-center"
            >
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Categorias"
                  className="d-flex justify-content-center"
                  style={ { fontSize: '1.3em' } }
                >
                  <div className="dropdown-box element">
                    {
                      allCategories.map((category, index) => (
                        <NavDropdown.Item
                          key={ index }
                          id={ category.id }
                          onClick={ getProductsByCategoryIdClick }
                          className="d-flex justify-content-center"
                        >
                          { category.name }
                        </NavDropdown.Item>
                      ))
                    }
                  </div>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    );
  }
}

Categories.propTypes = {
  allCategories: PropTypes.array,
  getProductsByCategoryIdClick: PropTypes.func,
}.isRequired;
