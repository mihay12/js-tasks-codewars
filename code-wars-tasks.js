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

//5. https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript
function SubtractSum(n){
  return "apple";
}

//6. https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(hours, minutes, seconds){
  const totalMinutes = hours * 60;
  const totalSeconds = (minutes + totalMinutes) * 60 ;
  const time = (seconds + totalSeconds) * 1000;
  return time;
}

//7. https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript
const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//8.
