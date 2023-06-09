// write a typescript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays

const numArray: Array<number> = [1,2,3,4,5];
const numArray2: Array<number> = [2,4,6,8];

function checker(numArray: Array<number>, numArray2: Array<number>):number[]{
 let result: Array<number> = [];   

 for(const num of numArray){
    if(numArray2.includes(num) && !result.includes(num)){
        result.push(num)
    };

 }
    return result;
}

console.log(checker(numArray, numArray2))