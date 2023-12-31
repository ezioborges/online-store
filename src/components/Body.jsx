/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductsCard from './ProductsCard';

export default class Body extends Component {
  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { validRequest, products, initialMsg } = this.props;
    return (
      <Container fluid>
        { initialMsg && (
          <Container fluid className="d-flex justify-content-center">
            <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
          </Container>
        ) }
        <Row className="mx-5">
          {
            validRequest
                   && (products.map((singleProduct, index) => (
                     <div
                       key={ index }
                       className="col-12 col-lg-4"
                     >
                       <ProductsCard
                         singleProduct={ singleProduct }
                       />
                     </div>

                   )))
          }
        </Row>
      </Container>
    );
  }
}

Body.propTypes = {
  validRequest: PropTypes.bool,
  products: PropTypes.array,
}.isRequired;
