import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import SearchArea from '../SearchArea';
import './index.css';
import Categories from '../Categories';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      validRequest: false,
      allCategories: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getAllCategories = async () => {
    const apiResponse = await api.getCategories().then((categories) => categories);
    this.setState({ allCategories: apiResponse });
  };

  productsClick = async () => {
    const { query } = this.state;
    const productsArray = await api.getProductsByQuery(query);

    this.setState({
      validRequest: true,
      products: productsArray.results,
    });
  };

  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { allCategories, products, query, validRequest } = this.state;
    const { history } = this.props;
    const errMessage = 'Nenhum produto foi encontrado';
    return (
      <div>
        <SearchArea
          history={ history }
          productsClick={ this.productsClick }
          products={ products }
          query={ query }
          handleChange={ this.handleChange }
        />

        <div className="empty">
          <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
        </div>

        <div className="line" />
        <div className="categoriesAndProducts">
          <Categories allCategories={ allCategories } />
          <ul>
            {
              !validRequest ? errMessage
                : (products.map(({ title, thumbnail, price }, index) => (
                  <li
                    key={ index }
                    data-testid="product"
                  >
                    <img src={ thumbnail } alt={ title } />
                    <p>{ title }</p>
                    <p>{ price }</p>
                  </li>
                )))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
