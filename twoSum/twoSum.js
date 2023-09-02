//first approach
function twoSum(numbers, target) {
  let answer = [];
  for (let i=0; i<numbers.length; i++) {
    for (let j=1; j<numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && numbers[i] !== numbers[j]) {
        answer.push(i, j);
      }
    }  
  }
 return answer
}
console.log(twoSum([1, 2, 3], 4));