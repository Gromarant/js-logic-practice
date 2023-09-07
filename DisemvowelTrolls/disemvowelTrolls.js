//first approach
function disemvowel(str) {
  const vowels =  /[aeiou]+/gi;
  const result = str.replaceAll(vowels, '');
  return result;
}
console.log(disemvowel("This website is for losers LOL!"));