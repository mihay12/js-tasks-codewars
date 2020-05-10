//1. https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

function getPlanetName(id) {
  switch (id) {
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
  }
}

//2. https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return [odd, even];
}

//3. https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
function animal(obj){
  return "This " + obj.color + " " + obj.name +  " has " + obj.legs + " legs.";
}

//4. https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
