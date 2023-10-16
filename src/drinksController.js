const { nanoid } = require("nanoid");
const drinksMenu = require("../data/drinksMenu.json", "../data/drinksPrices.json");

const inform = console.log;

function create(drinksCart, drinksMenu, drinksPrices) {
  const drinksCart = {
    name: drinksName,
    id: nanoid(4),
    price: drinksMenu[drinksName] && drinksPrices[drinksSize] || 0,
  };
  drinksCart.push(drinksCart);
  return drinksCart;
}

function index(animals) {
  return animals.map((animal) => animal.id + ' ' + animal.name).join('\n');
}

function show(animals, animalId) {
  const animal = animals.find((animal) => animal.id === animalId);
  return animal.id + ' ' + animal.name + ' ' + animal.points + ' points';
}

function destroy(animals, animalId) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals.splice(index, 1);
    inform('Animal successfully removed from collection');
    return animals;
  } else {
    inform('Animal not found. No action taken');
    return animals;
  }
}

function edit(animals, animalId, updatedAnimal) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals[index].id = animalId;
    animals[index].name = updatedAnimal;
    animals[index].points = animalPoints[updatedAnimal] || 10;
    inform('Animal successfully updated');
    return animals;
  } else {
    inform('Animal not found. No action taken');
    return animals;
  }
}

function score(animals) {
  return animals.reduce((acc, current) => acc + current.points, 0);
}

module.exports = {
  create,
  index,
  show, 
  destroy,
  edit, 
  score
};