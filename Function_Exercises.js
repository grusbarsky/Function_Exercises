//forEach
function doubleValues(arr){
    let doubledArray = [];
    arr.forEach(function(val){
        doubledArray.push(val * 2);
    });
    return doubledArray;
}

function onlyEvenValues(arr){
    let evenArray = [];
    arr.forEach(function(val){
        if(val%2 === 0){
            evenArray.push(val)
        }
    });
    return evenArray;
}

function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(val){
        newArray.push(val[0] + val[val.length - 1]);
    });
    return newArray;
}

function addKeyAndFunction(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    let splitString = str.split("");
    let count = {};
    let vowels = "aeiou"
    splitString.forEach(function(val){
        let lowerCasedLetter = val.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (count[lowerCasedLetter]) {
              count[lowerCasedLetter]++;
            } else {
              count[lowerCasedLetter] = 1;
            }
          }
        });
        return count;
}
//map
function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    })
}

function extractKey(arr){
    return arr.map(function(val){
        return val[key];
    });
}

function extractFullName(arr){
    return arr.map(function(val){
        return val.first + '' + val.last;
    });
}

//filter

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] ==! undefined;
    });
}

function find(arr, findVal){
    return arr.filter(function(val){
        return val === findVal;
    })[0];
}

function findInObject(arr, key, findVal){
    return arr.filter(function(val){
        return val[key] === findVal
    })[0];
}

function removeVowels(str){
    let vowels = "aeiou"
    return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumber(arr){
    return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}