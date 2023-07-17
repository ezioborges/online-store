import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import './index.css';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/shopping-cart');
  };

  getAllCategories = async () => {
    const apiResponse = await api.getCategories().then((categories) => categories);
    this.setState({ allCategories: apiResponse });
  };

  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { allCategories } = this.state;
    return (
      <div>
        <div className="search">
          <input className="search-input" />
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="shopping-cart-button"
            className="search-btn"
          >
            pesquisar
          </button>
        </div>
        <div className="empty">
          <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
        </div>
        <div className="line" />
        <ul className="categories-list">
          {
            allCategories.map((categories, index) => (
              <li
                key={ index }
                className="categories-items"
              >
                <button
                  type="button"
                  data-testid="category"
                  className="categories-btn"
                >
                  { categories.name }
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
