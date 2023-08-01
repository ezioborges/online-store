/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import priceFormated from '../utils/formaterPrice';

export default class ProductDetailCard extends Component {
  render() {
    const { productDetails } = this.props;
    const { title, price, pictures } = productDetails;

    return (
      <Card style={ { width: '17vw', height: '10vh' } }>
        <Card.Img variant="top" src={ pictures[0].url } alt={ title } />
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <Card.Footer className="d-flex justify-content-center">
            {priceFormated(price)}
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

ProductDetailCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
