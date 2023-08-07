/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import '../Style/Header.css';

export default class NavBar extends Component {
  render() {
    const {
      productsClick,
      query,
      handleChange,
      handleKeyUp,
    } = this.props;

    return (
      <div className="container-fluid">
        <div
          className="row p-3 d-flex bg-primary"
        >
          <div
            className="col-12 col-md-3 d-flex justify-content-center align-self-end"
          >
            <p style={ { color: '#fff' } }>Online Store</p>
          </div>
          <div className="col-12 col-md-7">
            <div className="form-group">
              <div className="d-md-flex justify-content-center">
                <div className="col-12 col-md-10 me-1 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite aqui sua busca..."
                    data-testid="query-input"
                    value={ query }
                    name="query"
                    onChange={ handleChange }
                    onKeyUp={ handleKeyUp }
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="query-button"
                    style={ { color: '#000' } }
                    onClick={ productsClick }
                  >
                    pesquisar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-2 d-flex justify-content-center"
          >
            <Link to="/shopping-cart">
              <button
                type="button"
                className="btn btn-secondary"
                variant="secondary"
                id="button-addon2"
              >
                <span
                  style={ { color: '#000' } }
                >
                  <AiOutlineShoppingCart />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
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
