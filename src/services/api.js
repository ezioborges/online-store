export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const categories = response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const categoryIdAndQuery = response.json();
  return categoryIdAndQuery;
}

export async function getProductsByQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const productsQuery = response.json();
  return productsQuery;
}

export async function getProductsByCategoryId(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(url);
  const productsByCategoryId = response.json();
  return productsByCategoryId;
}

export async function getProductById(PRODUCT_ID) {
  const url = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const response = await fetch(url);
  const productById = response.json();
  return productById;
}
