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
     inform(action, item);
     break;
case "create":
     updatedItem = create(action, item);
     writeToFile = true;
     break;
case "show":
     inform(action, item);
     break;
case "edit":
     inform(action, item);
     break;
case "destroy":
     inform(action, item);
     break;
case 'score':
     inform(action);
     break;
default:
     inform('There was an error.');
}
if (writeToFile) {
     writeJSONFile("./data", "cart.json", updatedItem);
}
}

run();