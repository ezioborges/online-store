import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import ProductDetailCard from '../components/ProductDetailCard';
import IsLoading from '../components/IsLoading';

import * as api from '../services/api';
import { addProduct } from '../services/shoppingCartApi';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      isLoading: true,
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

  render() {
    const { productDetails, isLoading } = this.state;

    if (isLoading) {
      return <IsLoading />;
    }

    return (
      <Container fluid>
        <Row className="d-flex justify-content-center m-5">
          <ProductDetailCard
            saveProductOnShoppingCart={ this.saveProductOnShoppingCart }
            home={ this.home }
            productDetails={ productDetails }
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
