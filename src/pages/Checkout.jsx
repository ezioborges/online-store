import { Component } from 'react';
import { getProducts } from '../services/shoppingCartApi';
import priceFormated from '../utils/formaterPrice';
import CustumerArea from '../components/CustumerArea';
import Payment from '../components/Payment';
import '../Style/Checkout.css';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      prodList: [],
      totalValue: 0,
    };
  }

  componentDidMount() {
    this.getProductList();
  }

  getProductList = () => {
    const itemsList = getProducts();
    const totalValueProducts = itemsList.reduce((acc, obj) => (acc + obj.price), 0);
    this.setState({
      prodList: itemsList,
      totalValue: priceFormated(totalValueProducts),
    });
    console.log('check', itemsList);
  };

  render() {
    const { prodList, totalValue } = this.state;
    return (
      <div
        className="container-fluid checkout-content"
        style={ { height: '100vh' } }
      >
        <div
          className="row element"
          style={ { height: '30%', overflow: 'scroll' } }
        >
          <h5 className="mt-2">Lista de Produtos</h5>
          <ul>
            {
              prodList.map((prod, index) => (
                <li
                  key={ index }
                  style={ { listStyle: 'none' } }
                  className="d-flex"
                >
                  <img src={ prod.thumbnail } alt={ prod.title } />
                  <span className="ms-3">{ prod.title }</span>
                  <span className="ms-3">{ priceFormated(prod.price) }</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="row">
          <span>{`Total: ${totalValue}`}</span>
        </div>
        <div
          className="row"
          style={ { height: '30%' } }
        >
          <CustumerArea />
        </div>
        <div
          className="row"
          style={ { height: '30%' } }
        >
          <Payment />
        </div>
      </div>
    );
  }
}
