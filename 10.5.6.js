let arr1 = [1,1,1,1];

function arrElement(element, index, array){
    return element === array[0];
}
console.log(arr1.every(arrElement));
