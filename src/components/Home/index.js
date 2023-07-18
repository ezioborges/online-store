import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import SearchArea from '../SearchArea';
import './index.css';
import Categories from '../Categories';
import IsLoagind from '../IsLoading';
import ProductList from '../ProductList';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      errMessage: 'Nenhum produto foi encontrado',
      validRequest: false,
      allCategories: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getAllCategories();
    this.productsClick();
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

    this.setState({
      isLoading: true,
    });
    const productsArray = await api.getProductsByQuery(query);

    this.setState({
      validRequest: true,
      products: productsArray.results,
      isLoading: false,
    });
  };

  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const {
      allCategories,
      products,
      query,
      validRequest,
      errMessage,
      isLoading,
    } = this.state;
    const { history } = this.props;
    return (
      <div>
        <div className="empty">
          <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
        </div>

        <SearchArea
          history={ history }
          productsClick={ this.productsClick }
          products={ products }
          query={ query }
          handleChange={ this.handleChange }
          isLoading={ isLoading }
        />

        <div className="line" />

        {
          isLoading ? <IsLoagind errMessage={ errMessage } /> : (
            <div className="categoriesAndProducts">
              <Categories allCategories={ allCategories } />
              <ProductList
                validRequest={ validRequest }
                errMessage={ errMessage }
                isLoading={ isLoading }
                products={ products }
              />
            </div>
          )
        }
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
