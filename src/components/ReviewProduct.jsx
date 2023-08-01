import { Component } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ReviewProduct extends Component {
  render() {
    const { email, comment, handleChange } = this.props;
    console.log(email, comment);
    return (
      <Container
        className="d-flex flex-column"
        style={ { width: '60%' } }
      >
        <InputGroup
          className="mb-3"
        >
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            name="email"
            value={ email }
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={ handleChange }
          />
        </InputGroup>
        <InputGroup
          className="mb-3"
        >
          <InputGroup.Text>Comentário</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            name="comment"
            value={ comment }
            onChange={ handleChange }
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Container>
    );
  }
}

ReviewProduct.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
