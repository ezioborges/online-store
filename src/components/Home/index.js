import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
      products: productsByCategoryId.results,
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
      isLoading,
    } = this.state;

    const { history } = this.props;
    return (
      <div>
        <div className="research-field">
          <div className="empty-message">
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
        </div>

        {
          isLoading ? <IsLoagind /> : (
            <div className="categoriesAndProducts">
              <Categories
                allCategories={ allCategories }
                getProductsByCategoryIdClick={ this.getProductsByCategoryIdClick }
              />
              <ul className="product-list-content">
                {
                  validRequest
                   && (products.map((singleProduct, index) => (
                     <li
                       key={ index }
                       data-testid="product"
                       className="product-list-items"
                     >
                       <Link
                         to={ `/product-details/${singleProduct.id}` }
                         data-testid="product-detail-link"
                         className="product-detail-link"
                       >
                         <ProductList
                           singleProduct={ singleProduct }
                         />
                       </Link>
                     </li>
                   )))
                }
              </ul>
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
