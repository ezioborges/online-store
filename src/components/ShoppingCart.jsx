/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
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
    this.setState({ shoppinCartItems: items });
  };

  render() {
    const { shoppinCartItems } = this.state;
    console.log('agora vem do render', shoppinCartItems);
    const emptyShoppingCart = 'Seu carrinho está vazio';
    return (
      <div>
        {
          !ShoppingCart
            ? <h3 data-testid="shopping-cart-empty-message">{ emptyShoppingCart }</h3>
            : (<ul>
              {
                shoppinCartItems.map((items, index) => (
                  <li key={ index }>
                    <p>{items.title}</p>
                  </li>
                ))
              }
            </ul>)
        }
      </div>
    );
  }
}
