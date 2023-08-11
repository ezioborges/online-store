const PRODUCTS_KEY = 'products';

// if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
//   localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
// }

export const getProducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];

export const setProducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products));

export const addProduct = (product) => {
  if (product) {
    const productsArray = getProducts();
    const newProduct = { ...product, quantity: 1 };
    setProducts([...productsArray, newProduct]);
  }
};

export const removeItem = (item) => {
  const arrayItems = getProducts();
  setProducts(arrayItems.filter((i) => i.id !== item.id));
};
