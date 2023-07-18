import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default class SearchArea extends React.Component {
  shoppingCartClick = () => {
    const { history } = this.props;
    history.push('/shopping-cart');
  };

  render() {
    // const { query, products } = this.state;
    const {
      productsClick,
      query,
      products,
      handleChange,
    } = this.props;
    console.log('produtos: ', products);
    return (
      <div className="search">
        <div className="search-area">
          <label htmlFor={ query }>
            <input
              className="search-input"
              data-testid="query-input"
              value={ query }
              name="query"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            className="search-btn"
            data-testid="query-button"
            onClick={ productsClick }
          >
            pesquisar
          </button>
        </div>
        <div>
          <button
            type="button"
            className="shopping-cart-btn"
            data-testid="shopping-cart-button"
            onClick={ this.shoppingCartClick }
          >
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    );
  }
}

SearchArea.propTypes = {
  click: PropTypes.func,
}.isRequired;
