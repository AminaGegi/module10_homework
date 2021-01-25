
let arr1 = [1,2,3,4];

console.log(arr1.length);
function arrElement(element, index){
    console.log(`a[${index}] = ${element}`)
}
arr1.forEach(arrElement);
