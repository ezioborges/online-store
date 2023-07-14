import React from 'react';

export default class Home extends React.Component {
  render() {
    const emptyMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <h3 data-testid="home-initial-message">{ emptyMessage }</h3>
    );
  }
}
