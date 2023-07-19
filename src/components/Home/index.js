import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import SearchArea from '../SearchArea';
import './index.css';
import Categories from '../Categories';
import IsLoagind from '../IsLoading';
import ProductList from '../ProductList';
import ProductsByCategoryId from '../ProductsByCategoryId';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      byCategoryId: [],
      errMessage: 'Nenhum produto foi encontrado',
      validRequest: false,
      allCategories: [],
      isLoading: false,
      categoryidList: false,
      productsList: false,
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
      categoryidList: false,
      productsList: true,
    });
  };

  handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.productsClick();
    }
  };

  getProductsByCategoryIdClick = async ({ target }) => {
    const { allCategories } = this.state;
    const { id } = target;

    this.setState({ isLoading: true });

    const categoryId = allCategories.find((categoriesId) => categoriesId.id === id);
    const productsByCategoryId = await api.getProductsByCategoryId(categoryId.id);
    this.setState({
      byCategoryId: productsByCategoryId.results,
      categoryidList: true,
      productsList: false,
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
      byCategoryId,
      categoryidList,
      productsList,
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
          handleKeyUp={ this.handleKeyUp }
        />

        <div className="line" />

        {
          isLoading ? <IsLoagind errMessage={ errMessage } /> : (
            <div className="categoriesAndProducts">
              <Categories
                allCategories={ allCategories }
                getProductsByCategoryIdClick={ this.getProductsByCategoryIdClick }
              />
              {
                categoryidList && (<ProductsByCategoryId byCategoryId={ byCategoryId } />)
              }
              {
                productsList && (<ProductList
                  validRequest={ validRequest }
                  errMessage={ errMessage }
                  isLoading={ isLoading }
                  products={ products }
                />)
              }
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
