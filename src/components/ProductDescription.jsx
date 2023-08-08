import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDescription extends Component {
  render() {
    const { productDetails } = this.props;
    const { attributes } = productDetails;
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="list-text">
            {
              attributes.map((attr, index) => (
                <li
                  key={ index }
                  style={ { listStyle: 'none' } }
                >
                  <span>
                    { `${attr.name}: ${attr.value_name} `}
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

ProductDescription.propTypes = {
  productDetails: PropTypes.object,
}.isRequired;
