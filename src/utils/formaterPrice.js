const priceFormated = (price) => {
  const formarter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formarter.format(price);
};

export default priceFormated;
