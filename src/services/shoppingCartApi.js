const PRODUCTS_KEY = 'products';
const SUCCESS_STATUS = 'ok';
const TIMEOUT = 500;

if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
}

const getProducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY));

const setProducts = (products) => localStorage
  .setItem(PRODUCTS_KEY, JSON.stringify(products));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const readGetProducts = () => new Promise((resolve) => {
  const productsArray = getProducts();
  simulateRequest(productsArray)(resolve);
});

export const addProduct = (product) => new Promise((resolve) => {
  if (product) {
    const productsArray = getProducts();
    setProducts([...productsArray, product]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});
