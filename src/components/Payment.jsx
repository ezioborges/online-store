/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { BsReceiptCutoff, BsFillCreditCardFill } from 'react-icons/bs';
import { boleto } from '../utils/paymentType';

export default class Payment extends Component {
  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div className="container-fluid">
        <h5 className="mt-2">Forma de Pagamento</h5>
        <div className="row mt-3">
          <div className="col">
            <OverlayTrigger placement="right" overlay={ boleto }>
              <label htmlFor="boleto">
                <input
                  type="radio"
                  className="me-1"
                  id="boleto"
                  value="boleto"
                  onChange={ this.handleChange }
                />
                <span>Boleto</span>
                <BsReceiptCutoff
                  style={ { fontSize: '100px' } }
                />
              </label>
            </OverlayTrigger>
          </div>
          <div className="col">
            <OverlayTrigger placement="right" overlay={ boleto }>
              <label
                htmlFor="boleto"
                className="me-3"
              >
                <input
                  type="radio"
                  id="credito"
                  className="me-1"
                  value="credito"
                  onChange={ this.handleChange }
                />
                <span>Crédito</span>
                <BsFillCreditCardFill
                  style={ { fontSize: '100px' } }
                />
              </label>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={ boleto }>
              <label htmlFor="boleto">
                <input
                  type="radio"
                  className="me-1"
                  id="debito"
                  value="debito"
                  onChange={ this.handleChange }
                />
                <span>Débito</span>
                <BsFillCreditCardFill
                  style={ { fontSize: '100px' } }
                />
              </label>
            </OverlayTrigger>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
        >
          Finalizar
        </button>
      </div>
    );
  }
}
