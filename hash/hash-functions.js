//O(n) time complexity bases on size of string
function hashString(string, arrayLen) {
   let total = 0;
   for (let char of string) {
      let value = char.charCodeAt(0) - 96;
      total = (total + value) % arrayLen;
   }
   return total;
}

//O(1) since we limit the number of chars that we use (100)
function primeStringHash(string, arrayLen) {
   let total = 0;
   let PRIME_NUM = 23;
   for (let i = 0; i < Math.min(string.length, 100); i++) {
      let char = string[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % arrayLen;
   }
   return total;
}

console.log(primeStringHash("popcorn is yummeh", 100));
