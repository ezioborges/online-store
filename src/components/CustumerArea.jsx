import { Component } from 'react';

export default class CustumerArea extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      street: '',
      complement: '',
      number: '',
      city: '',
      stateCity: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fullname,
      cpf,
      email,
      phone,
      cep,
      street,
      complement,
      number,
      city,
      stateCity,
    } = this.state;
    return (
      <div className="input-group">
        <h5 className="mt-2">Dados Cadastrais</h5>
        <div className="row w-100">
          <div className="col">
            <input
              placeholder="Nome Completo"
              className="form-control"
              type="text"
              name="fullname"
              value={ fullname }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="CPF"
              className="form-control"
              type="text"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="Email"
              className="form-control"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="Telefone"
              className="form-control"
              type="text"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
            />
          </div>
        </div>
        <div className="row w-100">
          <div className="col">
            <input
              placeholder="CEP"
              className="form-control"
              type="text"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col-8">
            <input
              placeholder="Endereço"
              className="form-control"
              type="text"
              name="street"
              value={ street }
              onChange={ this.handleChange }
            />
          </div>
        </div>
        <div className="row w-100">
          <div className="col">
            <input
              placeholder="Complemento"
              className="form-control"
              type="text"
              name="complement"
              value={ complement }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="Número"
              className="form-control"
              type="text"
              name="number"
              value={ number }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="Cidade"
              className="form-control"
              type="text"
              name="city"
              value={ city }
              onChange={ this.handleChange }
            />
          </div>
          <div className="col">
            <input
              placeholder="Estado"
              className="form-control"
              type="text"
              name="stateCity"
              value={ stateCity }
              onChange={ this.handleChange }
            />
          </div>
        </div>
      </div>
    );
  }
}
