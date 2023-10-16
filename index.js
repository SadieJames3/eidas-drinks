const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { 
  create, 
  index, 
  show, 
  destroy, 
  edit,
  cart 
} = require("./src/drinksController");

const drinksCart = readJSONFile("./data", "drinksCart.json");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const animal = process.argv[3];

  let writeToFile = false;
  let drinksCartView = [];

  switch (action) {
    case "index":
      const drinksCart = index(drinksCart);
      inform(drinksCartView);
      break;
    case "create":
      updatedDrinksCart = create(drinksCart, drink);
      writeToFile = true;
      break;
    case "show":
      const drinksCart = show(drinksCart, drink)
      inform(drinksCartView);
      break;
    case "edit":
      updatedDrinksCart = edit(drinksCart, drink, process.argv[4])
      writeToFile = true;
      break;
    case "destroy":
      updatedDrinksCart = destroy(drinksCart, drink)
      writeToFile = true;
      break;
    case "cart":
      inform(`Current total sum of all items you've added to your cart:`, score(drinks));
      break;
    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "drinksCart.json", updatedDrinksCart);
  }
}

run();