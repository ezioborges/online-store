import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class IsLoagind extends React.Component {
  render() {
    return (
      <div className="message">
        <section className="dots-container">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </section>
        <h3>Aguarde um momento...</h3>
      </div>
    );
  }
}

IsLoagind.propTypes = {
  message: PropTypes.string,
}.isRequired;
