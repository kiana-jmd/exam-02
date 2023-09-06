export function randomNumber(min : number , max : number) {
    return Math.floor(Math.random() * (max-min)) + min
} 
export function primeNumbers (n: number) {
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

export function deleteArray (n: number[]){
    let i=0;
    while(i < n.length){
        delete n[i];
        i++;
    }
    console.log(n)
}