/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-no-undef */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { BsArrowLeftCircle, BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProductDetailCard from '../components/ProductDetailCard';
import IsLoading from '../components/IsLoading';
import '../Style/ProductDetails.css';

import * as api from '../services/api';
import { addProduct } from '../services/shoppingCartApi';
import ProductDescription from '../components/ProductDescription';
import ProductQuantity from '../components/ProductQuantity';
import ReviewProduct from '../components/ReviewProduct';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      isLoading: true,
      email: '',
      comment: '',
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    try {
      const product = await api.getProductById(id);
      this.setState({ productDetails: product, isLoading: false });
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

  render() {
    const { productDetails, isLoading, email, comment } = this.state;
    console.log('vem da productDetails', productDetails);
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
      <Container fluid>
        <Row>
          <Col
            className="d-flex justify-content-start"
          >
            <Button
              onClick={ this.home }
              className="init-hover mt-3"
            >
              <OverlayTrigger placement="bottom" overlay={ homeTool }>
                <p style={ { fontSize: '2em', color: 'black' } }>
                  <BsArrowLeftCircle />
                </p>
              </OverlayTrigger>
            </Button>
          </Col>
          <Col
            className="d-flex justify-content-end"
          >
            <Link to="/shopping-cart">
              <Button
                className="init-hover mt-3"
              >
                <OverlayTrigger placement="bottom" overlay={ shoppingTool }>
                  <p style={ { fontSize: '2em', color: 'black' } }>
                    <BsFillCartFill />
                  </p>
                </OverlayTrigger>
              </Button>
            </Link>
          </Col>
        </Row>
        <Row
          className="desc-content element m-auto my-3"
        >
          <div className="desc-elements">
            <Col
              xs={ 5 }
              className="d-flex justify-content-center"
            >
              <ProductDetailCard
                saveProductOnShoppingCart={ this.saveProductOnShoppingCart }
                home={ this.home }
                productDetails={ productDetails }
              />
            </Col>
            <Col
              className="desc-text element"
            >
              <ProductDescription
                productDetails={ productDetails }
              />
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <ProductQuantity
              saveProductOnShoppingCart={ this.saveProductOnShoppingCart }
            />
          </Col>
        </Row>
        <Row>
          <ReviewProduct
            email={ email }
            comment={ comment }
            handleChange={ this.handleChange }
          />
        </Row>
      </Container>
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
