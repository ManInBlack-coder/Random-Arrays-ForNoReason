let array1 = [1, 2, 2, 3, 4, 4, 5]

let array2 = [1, 2, 2, 3, 4, 4, 5]
let array3 = [124,33,3,4,5]
// const arrFunc = (array) => {
//   let sum = 0 
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//   return sum
// }

// kahest arrayst ühe array tekitamine
const uniqueArray = (arr1,arr2) => {
    let merged = [];
    for ( let val of arr1 ) {
        if (!merged.includes(val)) merged.push(val);
    }
    for (let val of arr2) {
        if (!merged.includes(val)) merged.push(val);
    }
    merged.push(...arr1.slice(0,2))
    merged.push(...arr2.slice(0,2))

    return merged;
}


// kahest sorteeritust arrayst ühe sorteeritud array loomine
const sortArray = (arr1,arr2) => {
    let sorted_merged = [];
    let i = 0;
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            sorted_merged.push(arr1[i]);
            i++;
            
        } else {
            sorted_merged.push(arr2[j]);
            j++;
        }
        while ( i < arr1.length) {
            sorted_merged.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            sorted_merged.push(arr2[j]);
            j++;
        }
        return sorted_merged;
    }
}

//console.log(sortArray(array2,array2))
