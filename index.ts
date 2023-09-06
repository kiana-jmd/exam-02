
import { randomNumber , primeNumbers , deleteArray } from "./src/functions.js";

import { randomNumberButton , primeNumbersButton , DeleteButton} from "./src/importer.js";

import { randomNumberHandler , primeNumbersHandler , DeleteHandler} from "./src/events.js";

randomNumberButton?.addEventListener("click" , randomNumberHandler)
primeNumbersButton?.addEventListener("click" , primeNumbersHandler)

DeleteButton?.addEventListener("click" , DeleteHandler)

