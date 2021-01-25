const arr = [1, 3, 5, 0, 0, 'kj',4];
let nul = 0; // нулевые;
let chet = 0; // четные
let neChet = 0; // нечетные
for (let i = 0; i < arr.length; i++){
    if (arr[i] == 0)
        nul++;
    else
    if ((arr[i] %= 2) == 0)
        chet++
    if ((arr[i] %= 2) == 1)
        neChet++
}

console.log(nul, chet, neChet);
