import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewProduct extends Component {
  render() {
    const { email, comment, handleChange } = this.props;
    console.log(email, comment);
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

ReviewProduct.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
