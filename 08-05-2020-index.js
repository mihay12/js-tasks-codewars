//1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR1MPbyOBBBoHZ4BzwhzfDFzB1yUn2B7__-uNnOEbHEdUiDh-xivBJnRikc
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR2HjzuGNszxDqd0qTXUuNZ3XsHvnRWOk3WWw7YcfOsFK8cvvkXTwvG-x6U
function circleCircumference(circle) {
  const calculatingCircumFerence = 2 * Math.PI * circle.radius;
  return calculatingCircumFerence;
}

//3. https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript?fbclid=IwAR3KuJtYpRl8jFy0CoQm8plHthmcZK2tiaAUDuMyN3Gy9m__YUhstG3JeDU


//4. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript?fbclid=IwAR37RsevfgYVA2q03XRFvguVjsBdjDUUght7W6sGRGFOr9ygl1i03Ps_Ye0
function giveMeFive(obj){
let arr = [];
  for (var key in obj){
    if(key.length === 5){
      arr.push(key);
    }
    if(obj[key].length  === 5){
      arr.push(obj[key]);
    }
  }
  return arr;
}

//5. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR3ZJF4owwIbuogxE2SnjaO5lhwGoHvdqZKWtHFjNme6i0max7Tdv6SFvIg



//Не з домашньої роботи
//1. https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
function animal(obj){
  return "This " + obj.color + " " + obj.name +  " has " + obj.legs + " legs.";
}
