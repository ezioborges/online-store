import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class IsLoagind extends React.Component {
  render() {
    const { errMessage } = this.props;
    return (
      <div className="message">
        <section className="dots-container">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </section>
        <h3>{ errMessage }</h3>
        <h3>Aguarde um momento...</h3>
      </div>
    );
  }
}

IsLoagind.propTypes = {
  errMessage: PropTypes.string,
}.isRequired;
