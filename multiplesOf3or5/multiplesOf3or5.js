//first approach
function solution(number) {
  let sum = 0;
  for (let i=number-1; i > 0; i--) {
    if ( i % 5 === 0 || i % 3 === 0 )  {
      sum += i;
    }
  }
  return sum;
};
console.log(solution(10));

//second approach
const solution2 = (num) => {
  let sum = 0;
  for (let i= num-1; i > 0; i--) {
    ( i % 5 === 0 || i % 3 === 0 )? sum += i : sum;
  }
  return sum;
}
console.log(solution2(10))