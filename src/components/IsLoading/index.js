import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class IsLoagind extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="message">
        <section className="dots-container">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </section>
        <h3>{ message }</h3>
        <h3>Aguarde um momento...</h3>
      </div>
    );
  }
}

IsLoagind.propTypes = {
  message: PropTypes.string,
}.isRequired;
