let array1 = [1, 2, 2, 3, 4, 4, 5]

let array2 = [1, 2, 2, 3, 4, 4, 5]
let array3 = [2, 3, 3, 4, 5, 4]
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

// kontrollib kas kahest arrayst ühte on olemas teine ja tagastab need väärtused 
const controlExisting = (arr1,arr2) => {
    let values = [];
    if(arr1.length !== arr2.length) return false;
    let sorted1 =  [...arr1].sort();
    let sorted2 = [...arr2].sort();
    
    for (let i = 0; i < sorted1.length; i++) {
        if(sorted1[i] !== sorted2[i]) return false;
    }
    return true;
    
}

// kontrollib kas kahest arrayst ühte on olemas teine ja tagastab need väärtused
const controlExisting2 = (arr1,arr2) => {
    if (arr1.length !== arr2.length) return {areEqual: false, commonValues: []};

    let sorted1 = [...arr1].sort();
    let sorted2 = [...arr2].sort();
    let commonValues = [];

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) return {areEqual: false, commonValues: []};
        commonValues.push(sorted1[i]);
    }
    return {areEqual: true, commonValues: commonValues};
}


//Elementide paarid, mille summa on võrdne kindla väärtusega

const pairSum = (arr1, arr2, target) => {
    let pairs = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] + arr2[j] === target) {
                pairs.push([arr1[i], arr2[j]]);
            }
        }
    }
    return pairs;
}

const sameValueAtSameIndex = (arr1,arr2) => {
    let result = []; 
    let Len = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < Len; i++){
        if (arr1[i] === arr2[i]) {
            result.push(arr1[i]);
        }
    }
    return result; 
}


// quicksort 

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Eelviimane element
    let left = []; 
    let right = [];

    for (let i = 0; i < pivot; i++) { // pivot on eelviimane element
        if (arr[i] < pivot) { // kui array indexi järgi võetud element on pivotist väiksem, siis lisame vasakule
            left.push(arr[i])
        } else { // kui array indexi järgi võetud element on pivotist suurem, siis lisame paremale
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // rekursiooniga jätkame sortimist vasakul ja paremal pool

}

// Hashmap näide 

