/* eslint-disable no-console */
const HashMap = require('./hash-map');


//4 - Duplicates
const string = 'google all that you think can think of';
const string2 = 'google';
const duplicate = new HashMap();

for (let i = 0; i < string2.length; i++) {
  duplicate.set(string[i], string2[i]);
}

console.log(duplicate);
let newStr = '';
duplicate._hashTable.forEach(letter => {
  newStr += letter.value;
});

console.log(newStr);



//5- Any permutation a palindrome

const palindrome = (string) => {
  const palindromeMap = new Map();
  let odd = 0;
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]) === undefined) {
      palindromeMap.set(string[i], 1);
    }
    else {
      let char = palindromeMap.get(string[i]);
      palindromeMap.set(string[i], char+=1);
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if(palindromeMap.get(string[i]) % 2 !==0) {
      odd++;
      console.log('odd', odd);
    }
    if(odd > 1) {
      return false;
    }
  }
  return true;
};

console.log(palindrome(''));

//6- Anagram grouping

const groupAnagrams = (strArr) => {
  const anagramMap = new Map();
  strArr.forEach((word) => {
    let sorted = alphabetize(word);
    if(anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word);
    }
    else {
      anagramMap.set(sorted, [word]);
    }
  }); 
  return [...anagramMap.values()];
};
  
const alphabetize = word => {
  let alphabetized = word.split('').sort().join('');
  return alphabetized;
};
  
console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));