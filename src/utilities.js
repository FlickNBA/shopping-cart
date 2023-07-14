export const getProducts = async () => {
  return fetch('./products.json').then((res) => res.json());
};
