import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/shopping-cart');
  };

  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div>
        <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
