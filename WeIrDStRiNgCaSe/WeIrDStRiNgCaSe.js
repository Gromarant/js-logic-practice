//first approach
function toWeirdCase(string){
  let words = string.split(' ');
  for (let i=0; i <words.length; i++) {
    let letters = words[i].split('');
    let resultWords = letters.map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
    words[i] = resultWords;
  }
  return words.join(' ');
}
console.log(toWeirdCase("Weird string case"));

//Second approach
const toWeirdCase2 = (string) => string.split(' ')
.map((word) => word.split('')
.map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ');
console.log(toWeirdCase2("Weird string case"));