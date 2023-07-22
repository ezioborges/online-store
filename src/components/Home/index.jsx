import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import './index.css';
import IsLoagind from '../IsLoading';
import Header from '../Header';
import Body from '../Body';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      validRequest: false,
      allCategories: [],
      isLoading: false,
      initialMsg: true,
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

    this.setState({
      isLoading: true,
    });
    const productsArray = await api.getProductsByQuery(query);

    this.setState({
      validRequest: true,
      products: productsArray.results,
      isLoading: false,
      initialMsg: false,
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
      validRequest: true,
      products: productsByCategoryId.results,
      isLoading: false,
      initialMsg: false,
    });
  };

  render() {
    const {
      allCategories,
      products,
      query,
      validRequest,
      isLoading,
      initialMsg,
    } = this.state;

    const { history } = this.props;
    return (
      <div>
        <Header
          history={ history }
          productsClick={ this.productsClick }
          products={ products }
          query={ query }
          handleChange={ this.handleChange }
          isLoading={ isLoading }
          handleKeyUp={ this.handleKeyUp }
          allCategories={ allCategories }
          getProductsByCategoryIdClick={ this.getProductsByCategoryIdClick }
        />

        {
          isLoading ? <IsLoagind /> : <Body
            initialMsg={ initialMsg }
            products={ products }
            validRequest={ validRequest }
          />
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
