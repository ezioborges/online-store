/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getProducts, removeItem } from '../services/shoppingCartApi';
import priceFormated from '../utils/formaterPrice';
import '../Style/ShoppingCart.css';
import { decrement, increment } from '../utils/productsAmount';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppinCartItems: [],
    };
  }

  componentDidMount() {
    this.setItemsInState();
  }

  setItemsInState = async () => {
    const items = await getProducts();
    this.setState({
      shoppinCartItems: items,
    });
  };

  removeItemList = async ({ target }) => {
    await removeItem(target);
    await this.setItemsInState();
  };

  incrementQuantity = async ({ target }) => {
    const { shoppinCartItems } = this.state;
    increment(target, shoppinCartItems);
    this.setState(
      {
        shoppinCartItems,
      },
      () => this.setItemsOnLocalStorage(),
    );
  };

  decrementQuantity = async ({ target }) => {
    const { shoppinCartItems } = this.state;
    decrement(target, shoppinCartItems);
    this.setState(
      {
        shoppinCartItems,
      },
      () => this.setItemsOnLocalStorage(),
    );
  };

  setItemsOnLocalStorage = () => {
    const { shoppinCartItems } = this.state;
    localStorage.setItem('products', JSON.stringify(shoppinCartItems));
  };

  render() {
    const { shoppinCartItems } = this.state;
    const textShoppingCart = 'Carrinho de compras';
    return (
      <div className="container-fluid mt-3 d-flex flex-column align-items-center">
        <div className="row mt-4">
          <h1>{textShoppingCart}</h1>
        </div>
        <div className="row mt-4">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th className="text-center">*</th>
                <th className="text-center">Nome do Produto</th>
                <th className="text-center">Preço</th>
                <th className="text-center">Quantidade</th>
                <th className="text-center">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {shoppinCartItems.map((item, index) => (
                <tr key={ index }>
                  <td>
                    <img src={ item.thumbnail } alt={ item.title } />
                  </td>
                  <td
                    style={ { verticalAlign: 'middle', textAlign: 'center' } }
                  >
                    {item.title}
                  </td>
                  <td
                    style={ { verticalAlign: 'middle', textAlign: 'center' } }
                  >
                    {priceFormated(item.price)}
                  </td>
                  <td
                    style={ { verticalAlign: 'middle', textAlign: 'center' } }
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        style={ { borderRadius: '50%' } }
                        className="btn btn-primary countButton"
                        id={ item.id }
                        onClick={ this.decrementQuantity }
                      >
                        -
                      </button>
                      <span
                        className="m-2"
                        style={ { fontSize: '1.6em' } }
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        style={ { borderRadius: '50%' } }
                        className="btn btn-primary countButton"
                        id={ item.id }
                        onClick={ this.incrementQuantity }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td
                    style={ { verticalAlign: 'middle', textAlign: 'center' } }
                  >
                    <button
                      className="btn btn-primary"
                      id={ item.id }
                      onClick={ this.removeItemList }
                      type="button"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/">
              <button type="button" className="btn btn-primary">Tela inicial</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
