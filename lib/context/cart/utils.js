export const createCartItem = (item) => {
  const { id, title, price, color, size, productImage } =
    item;
  // create a unique id for product variation
  let newId = id;
  if (size != "") newId = newId + "/" + size?.toUpperCase()
  if (color != "") newId = newId + "/" + color
  return {
    id: newId,
    title,
    price,
    color,
    size,
    productImage,
  };
};

export const addCartItem = (cartItems, productToAdd) => {
  //search for product in cart items
  const itemIndex = cartItems.findIndex((item) => item.id === productToAdd.id);
  // if it exists, update item
  if (itemIndex > -1) {
    //if present, increase quantity
    cartItems[itemIndex] = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity + productToAdd.quantity }
    return cartItems
  } else {
    //else add new items from product page or homepage
    return productToAdd.quantity ?
      [...cartItems, productToAdd]
      :
      [...cartItems, { ...productToAdd, quantity: 1 }]
  }
};


export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id)
};