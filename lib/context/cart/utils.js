export const createCartItem = (item) => {
  const { id, title, price, color, size, productImage } =
    item;
  return {
    id,
    title,
    price,
    color,
    size,
    productImage,
  };
};

export const addCartItem = (cartItems, productToAdd) => {
  //find product in cart items
  const itemIndex = cartItems.findIndex((item) => item.id === productToAdd.id);
  if (itemIndex > -1) {
    //if present, increase quantity
    return cartItems.map((item, index) =>
      itemIndex === index ? { ...item, quantity: item.quantity + productToAdd.quantity } : item
    );
  } else {
    //else add to cart items
    return productToAdd.quantity ?
      [...cartItems, productToAdd]
      :
      [...cartItems, { ...productToAdd, quantity: 1 }]
  }
};

export const updateQuantity = (cartItems, id, value) => {
  cartItems
}
export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id)
};