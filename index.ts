type primeNumberType = {
    id : string ;
    number : number ;
}

function randomNumber(min : number , max : number) {
    return Math.floor(Math.random() * (max-min)) + min
} 

function primeNumbers (n: number) {
    const  primeNumber = [];
    let x=0 ;
        for (let i = 0; i <= n; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                primeNumber[x]=i;
                x++;

            }
        }
        return primeNumber
}

function deleteArray (n: number[]){
    let i=0;
    while(i < n.length){
        delete n[i];
        i++;
    }
    console.log(n)
}

const numberInput = document.querySelector<HTMLInputElement>("#number")

const randomNumberButton= document.querySelector<HTMLButtonElement>("#RandomNumber")

const primeNumbersButton= document.querySelector<HTMLButtonElement>("#PrimeNumbers")

const DeleteButton= document.querySelector<HTMLButtonElement>("#Delete")

const randomnumber2 = randomNumber(9999 , 99999);


randomNumberButton?.addEventListener("click" , () => {
    const number1 : number = randomnumber2 ;
    console.log(number1);
})
const array =  primeNumbers(randomnumber2)
primeNumbersButton?.addEventListener("click" , ()=> {
    console.log(array)
})

DeleteButton?.addEventListener("click" , () => {
    deleteArray(array)
})

