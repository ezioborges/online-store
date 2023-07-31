import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ProductDescription extends Component {
  render() {
    const { productDetails } = this.props;
    const { attributes } = productDetails;
    return (
      <Container className="desc-container element">
        <Row>
          <ul>
            {
              attributes.map((attr, index) => (
                <li
                  key={ index }
                  style={ { listStyle: 'none' } }
                >
                  <p>
                    <strong>{attr.name}: </strong> {attr.value_name}
                  </p>
                </li>
              ))
            }
          </ul>
        </Row>
      </Container>
    );
  }
}

ProductDescription.propTypes = {
  productDetails: PropTypes.object,
}.isRequired;
