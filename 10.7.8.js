let myMap = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]

]);

let keysArr = [];
let valuesArr =[];
let i = 0;

for (let name of myMap.values()){
    valuesArr [i] = name;
    i++
}
i = 0;

for (let key of myMap.keys()){
    keysArr [i] = key;
    i++
}

for (let i = 0; i < keysArr.length; i++){
    console.log( `Ключ-${keysArr [i]}; Значение -${valuesArr [i]}`);
}