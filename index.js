const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { 
     create, 
     index, 
     show, 
     destroy, 
     edit,
     score 
} = require("./src/controller");

const drinks = readJSONFile("./data", "cart.json" )

const inform = console.log;

function run() {
const action = process.argv[2];
const item = process.argv[3];

let writeToFile = false;
let updatedItem = [];

switch (action) {
     case "index":
     index(drinks);
     break;
case "create":
     updatedItem = create(drinks, item);
     writeToFile = true;
     break;
case "show":
     inform(drinks, item);
     break;
case "edit":
     inform(drinks, item);
     writeToFile = true;
     break;
case "destroy":
     inform(drinks, item);
     writeToFile = true;
     break;
case 'score':
     score(drinks);
     break;
default:
     inform('There was an error.');
}
if (writeToFile) {
     writeJSONFile("./data", "cart.json", updatedItem);
}
}

run();