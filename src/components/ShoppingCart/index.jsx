import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    const emptyShoppingCart = 'Seu carrinho está vazio';
    return (
      <h3 data-testid="shopping-cart-empty-message">{ emptyShoppingCart }</h3>
    );
  }
}
