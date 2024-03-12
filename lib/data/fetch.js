
import { products } from "@/data";

export function getProducts() {
  return products;
}

export function getProduct(productId) {
  const searchedProductIndex = products.findIndex((product) => product.id === productId)
  const next = searchedProductIndex + 1 < products.length ? products[searchedProductIndex + 1].id : null;
  const prev = searchedProductIndex - 1 >= 0 ? products[searchedProductIndex - 1].id : null;
  // return current object,and next, prev ids
  const values = {
    product: products[searchedProductIndex],
    next: next,
    prev: prev,
  }
  return values;
}