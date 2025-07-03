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


// quicksort ˇ

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

//Leetcode problem (Palindrome Number)

xy = 221

const Reversed = (num) => {

    const numStr = num.toString();
    const revStr = numStr.split('').reverse().join('');
    let revNum = parseInt(revStr,1);
    return revNum;
}

const isPalindrome = (x) => {
    const reversedAbtsis = Reversed(x)
    if (x === reversedAbtsis) {
        return true;
    } else {
        return false;
    }
};

//console.log(isPalindrome(xy))

// Int to roman leetcode problem with hashmap usage
const ArabToRom = (num) => {
    const romanNums = [
  { val: 1000, sym: 'M' },
  { val: 900,  sym: 'CM' },
  { val: 500,  sym: 'D' },
  { val: 400,  sym: 'CD' },
  { val: 100,  sym: 'C' },
  { val: 90,   sym: 'XC' },
  { val: 50,   sym: 'L' },
  { val: 40,   sym: 'XL' },
  { val: 10,   sym: 'X' },
  { val: 9,    sym: 'IX' },
  { val: 5,    sym: 'V' },
  { val: 4,    sym: 'IV' },
  { val: 1,    sym: 'I' },
];

let result = '';

for(const {val,sym} of romanNums) {
    while(num >= val) {
        result += sym;
        num -= val;
    }
}
return result;
}

//console.log(ArabToRom(20239))



// Merging more than two arrays into one sorted array from hashmap
ArrayMap = [
    {arr: 1, list: [1,2,5,1]},
    {arr: 2, list: [3,5,7,1,1]},
    {arr: 3, list: [2,2,1,8,4,6,3,4,5]}]


const mergeLists = (lists) => {
       let merged = [];
       
      //ühendame ära listid 
      for (const item of lists) {
          merged = merged.concat(item.list);
      }
      //sordime ära kasvavalt 
      merged.sort((a, b) => a - b);
      return merged
   }

//console.log(mergeLists(ArrayMap))

//leetcode problem 
//Merging more than two arrays into one sorted array from typical array of arrays
listers = [[1,4,5],[1,3,4],[2,6]]
   
 
const mergeLists2 = (lists) => {
       let merged = [];
     
       for(let i = 0; i < lists.length; i++) {
        merged.push(...lists[i])
       }
       return merged.sort(); 
    }
   

//console.log(mergeLists(listers))
    let element = [];
    for (let i = 0; i < element.slice.length ; i++) {
        if (element[i] === i) {
            element.push()
        }
    }
    return element; 


//isPalindrome(xy)



const nextPermutation = (nums) => {
    const n = nums.length;

    // Abifunktsioon, mis vahetab kahte elementi
    const swap = (arr,i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }


    const reverse = (arr, start, end) => {
        while (start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
     }
     // 1. Leian esimese kahaneva elemendi 
    let i = n - 2; 
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // 2. Leian pöördekohast suurem vähim elemendi sufiksis 
        let j = n -1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // 3. pöördekoha vahetus ja leitud element
        swap(nums, i, j);
    }
    // 4. Pööran sufiksi'
    reverse(nums, i + 1, n - 1);
}

//console.log('permutation ',nextPermutation([1,2,3])); // [1,3,2]


//let nums1 = [1, 2, 3];
//nextPermutation(nums1);
//console.log(nums1); // Väljund: [1, 3, 2]


// const reerseKGroup = (head, k) => {
//     if ( !head || k === 1) {
//         return head;
//     }

//     const reverseFirstKNodes = (currHead, count) => {
//         let prev = null;
//         let current = currHead;
//         let nextTemp = null;
//         let originalHead = currHead;


//         for (let i = 0; i < count && current; i++) {
//             if (curr === null) {
//                 return [null, originalHead];
//             }

//             nextTemp = current.next;
//             curr.next = prev; 
//             prev = current;
//             curr = nextTemp;
//         }

//         originalHead.next = curr; 
//         return [prev, crur];
//     }

// }



numsArr1 = [3,2,4,5]
numsTarget1 = 5


const twoSum = (numsArr, numsTarget) => {
    const numMap = Map();


    for (let i = 0; i < numsArr.length; i++) {
        const num = numsArr[i];
        const comp = numsTarget - 1 


        if (numMap.has(comp)) {
            return[numMap.get(comp), i]
        }
        numMap.set(num,i) 
    }
    return []
}

console.log('twosum', twoSum(numsArr1,numsTarget1))
