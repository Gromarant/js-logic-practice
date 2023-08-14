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