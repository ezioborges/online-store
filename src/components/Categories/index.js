import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { allCategories, getProductsByCategoryIdClick } = this.props;
    return (
      <div className="categories">
        <ul className="categories-list">
          {
            allCategories.map((categories, index) => (
              <li
                key={ index }
                className="categories-items"
              >
                <button
                  type="button"
                  data-testid="category"
                  className="categories-btn"
                  id={ categories.id }
                  onClick={ getProductsByCategoryIdClick }
                >
                  { categories.name }
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  allCategories: PropTypes.array,
}.isRequired;
