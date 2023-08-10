import { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/ReviewProduct.css';

export default class ReviewProduct extends Component {
  render() {
    const { email, comment, handleChange, submitComment, commentsArray } = this.props;
    return (
      <div
        className=""
        style={ { width: '90%' } }
      >
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={ email }
              placeholder="Digite seu email..."
              onChange={ handleChange }
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              className="form-control"
              name="comment"
              value={ comment }
              rows="3"
              onChange={ handleChange }
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={ submitComment }
          >
            Submit
          </button>
        </form>
        <ul>
          {
            commentsArray.map((c, i) => (
              <li
                key={ i }
                className="list-comments mt-3 p-1"
              >
                <h6>{ c.email }</h6>
                <p>{ c.comment }</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ReviewProduct.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
