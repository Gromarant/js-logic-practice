//first approach
const isTriangle = (a,b,c) =>  {
  let sides =  [a, b, c].sort((a, b) => a - b);
  if (sides[0] + sides[1] > sides[2]) {
    return true;
  } 
  else {
    return false;
  }
};
console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));

//second approach
const isTriangle2 = (a,b,c) => a + b > c && a + c > b && c + b > a ? true :  false;
console.log(isTriangle2(1,2,2));
console.log(isTriangle2(7,2,2));