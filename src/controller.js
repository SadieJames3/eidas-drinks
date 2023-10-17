const { nanoid } = require("nanoid");
const menu = require("../data/drinkMenu.json");

const inform = console.log;

function create(cart) {
  const drink = {
    item: name,
    id: nanoid(4),
    price: menu[name]|| 0,
    size: menu[size] || 0,
  };
  cart.push(drink);
  return cart;
}

function index(cart) {
  return cart.map((item) => item.id + ' ' + item.name).join('\n');
}

function show(cart, itemId) {
  const item = cart.find((item) => item.id === itemId);
  return item.id + ' ' + item.name + ' ' + item.points + ' points';
}

function destroy(cart, itemId) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart.splice(index, 1);
    inform('item successfully removed from collection');
    return cart;
  } else {
    inform('item not found. No action taken');
    return cart;
  }
}

function edit(cart, itemId, updatedItem) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart[index].id = itemId;
    cart[index].name = updatedItem;
    cart[index].price = itemPrice[updatedItem] || 10;
    inform('item successfully updated');
    return cart;
  } else {
    inform('item not found. No action taken');
    return cart;
  }
}

function score(cart) {
  return cart.reduce((acc, current) => acc + current.price, 0);
}

module.exports = {
  create,
  index,
  show, 
  destroy,
  edit, 
  score
};