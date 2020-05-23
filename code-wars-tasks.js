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

//8.https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
//8.1
function greet(language) {
	const languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (language === "english"){
    return languages.english;
  }
  if (language === "czech"){
    return languages.czech;
  }
  if (language === "danish"){
    return languages.danish;
  }
  if (language === "dutch"){
    return languages.dutch;
  }
  if (language === "estonian"){
    return languages.estonian;
  }
  if (language === "flemish"){
    return languages.flemish;
  }
  if (language === "finnish"){
    return languages.finnish;
  }
  if (language === "french"){
    return languages.french;
  }
  if (language === "german"){
    return languages.german;
  }
  if (language === "irish"){
    return languages.irish;
  }
  if (language === "italian"){
    return languages.italian;
  }
  if (language === "latvian"){
    return languages.latvian;
  }
  if (language === "lithuanian"){
    return languages.lithuanian;
  }
  if (language === "polish"){
    return languages.polish;
  }
  if (language === "spanish"){
    return languages.spanish;
  }
  if (language === "swedish"){
    return languages.swedish;
  }
  if (language === "welsh"){
    return languages.welsh;
  }
  return languages.english;
}

//8.2
const databases = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
};
function greet(language) {
	return databases[language] || "Welcome";
}

//9. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  let surname;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      surname = name[i + 1];
    }
  }
  return (name[0] + "." + surname).toUpperCase();
}

//10. https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  let point = 0;
  for (let i = 0; i < games.length; i++) {
    let sinceGame = games[i].split("");
    for (let j = 0; j < sinceGame.length; j++) {
      if (sinceGame[j] === ":") {
        if (sinceGame[j - 1] > sinceGame[j + 1]) {
          point +=3;
        }
        if (sinceGame[j - 1] < sinceGame[j + 1]) {
          point +=0;
        }
        if (sinceGame[j - 1] === sinceGame[j + 1]) {
          point +=1;
        }
      }
    }
  }
  return point;
}

//11.
