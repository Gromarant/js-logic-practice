//first approach
function disemvowel(str) {
  const vowels =  /[aeiou]+/gi;
  const result = str.replaceAll(vowels, '');
  return result;
}
console.log(disemvowel("This website is for losers LOL!"));

//second approach
function disemvowel2(str) {
  return str.replaceAll(/[aeiou]+/gi, '');
}
console.log(disemvowel2("This website is for losers LOL!"));