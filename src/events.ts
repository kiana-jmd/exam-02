import { deleteArray } from "./functions.js";
import { randomnumber2 , array} from "./attached.js";

export const randomNumberHandler = () => {
    const number1 : number = randomnumber2 ;
    console.log(number1);
}

export const  primeNumbersHandler = ()=> {
    console.log(array)
}

export const DeleteHandler = () => {
    deleteArray(array)
}