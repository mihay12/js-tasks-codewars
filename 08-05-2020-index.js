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
class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


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
function buildFun(n){
	const res = []
	for (let i = 0; i< n; i++){
		res.push(function(){
			return i;
		})
	}
	return res
}



