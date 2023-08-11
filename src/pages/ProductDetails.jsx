/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-no-undef */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsArrowLeftCircle, BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProductDetailCard from '../components/ProductDetailCard';
import IsLoading from '../components/IsLoading';
import '../Style/ProductDetails.css';

import * as api from '../services/api';
import { addProduct } from '../services/shoppingCartApi';
import ProductDescription from '../components/ProductDescription';
import ReviewProduct from '../components/ReviewProduct';
import { getComments, setComments } from '../services/commentsApi';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      isLoading: true,
      email: '',
      comment: '',
      commentsArray: getComments() || [],
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    try {
      const product = await api.getProductById(id);
      this.setState({ productDetails: { ...product, quantity: 1 }, isLoading: false });
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
      this.setState({ isLoading: false });
    }
  };

  saveProductOnShoppingCart = async () => {
    const { productDetails } = this.state;
    const { history } = this.props;

    await addProduct(productDetails);
    history.push('/shopping-cart');
  };

  home = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitComment = (e) => {
    e.preventDefault();
    const { comment, email, commentsArray } = this.state;
    const newComment = { email, comment };
    this.setState((prevState) => ({
      commentsArray: [...prevState.commentsArray, newComment],
      email: '',
      comment: '',
    }));

    const storedComments = [...commentsArray, newComment];
    setComments(storedComments);
  };

  render() {
    const { productDetails, isLoading, email, comment, commentsArray } = this.state;
    const { history } = this.props;
    const homeTool = (
      <Tooltip>
        <strong>
          Tela inicial
        </strong>
      </Tooltip>
    );

    const shoppingTool = (
      <Tooltip>
        <strong>
          Carrinho de compras
        </strong>
      </Tooltip>
    );

    if (isLoading) {
      return <IsLoading />;
    }

    return (
      <div className="container-fluid element desc-text">
        <div className="row py-3 px-3 bg-primary">
          <div
            className="col"
          >
            <OverlayTrigger placement="bottom" overlay={ homeTool }>
              <button
                type="button"
                onClick={ this.home }
                className="btn btn-primary btn-lg"
                style={ { border: 'none' } }
              >
                <span>
                  <BsArrowLeftCircle />
                </span>
              </button>
            </OverlayTrigger>
          </div>
          <div
            className="col d-flex justify-content-end"
          >
            <Link to="/shopping-cart">
              <OverlayTrigger placement="bottom" overlay={ shoppingTool }>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={ { border: 'none' } }
                >
                  <span>
                    <BsFillCartFill />
                  </span>
                </button>
              </OverlayTrigger>
            </Link>
          </div>
        </div>
        <div
          className="row m-auto my-3 element desc-text"
        >
          <div
            className={ `d-flex
              flex-column
              flex-md-row
              justify-content-md-center
              desc-content
              m-auto
              px-4` }
          >
            <div>
              <ProductDetailCard
                saveProductOnShoppingCart={ this.saveProductOnShoppingCart }
                home={ this.home }
                productDetails={ productDetails }
                history={ history }
              />
            </div>
            <div className="py-4">
              <ProductDescription
                productDetails={ productDetails }
              />
            </div>
          </div>
        </div>
        <div>
          <ReviewProduct
            email={ email }
            comment={ comment }
            handleChange={ this.handleChange }
            submitComment={ this.submitComment }
            commentsArray={ commentsArray }
          />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
