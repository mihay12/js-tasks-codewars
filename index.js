//1. https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
  return -number;
}

//2. https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript?fbclid=IwAR2cvOagR1IBDMRgs5UfOuCNWQSlicpBkrAbClqwfPlZsOzQMBAnSnc3wzc

function greet (name, owner) {
  var helloBoss = 'Hello boss';
  var helloGuest = 'Hello guest';
    if(name == owner){
      return helloBoss;
    }else{
      return helloGuest;
    }
}

//3. https://www.codewars.com/kata/keep-hydrated-1/train/javascript?fbclid=IwAR0CYZEBklfGT9hiO-kqxDNIdeNZ8kNiKfHdCkQN6G_ZxEnpn3DcNEEbhDs

function litres(time) {
  var hours;
  var water = 0.5;
  hours = time * water;
  hours = Math.floor(hours);
  return hours;
}

//4. https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript?fbclid=IwAR1iF0o2KwNjFVx59-cex6i56OdMYy8TXWtUw77Ft8L59HyP84XI9joOPxk

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//5. https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript?fbclid=IwAR29SrTWeg6MYk20xGJdvXF-DlGR7thBN68MM_IkatcF7JQciWUKbvDevpQ

function move (position, roll) {
  return position + roll * 2;
}

//6. https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript?fbclid=IwAR2b5zHabEvnfOPDA8XvVnGLbnCwGdWuMqC_AgOAsAyz_bCNb4t9b08bdbs

function describeAge(age) {
  return "You're a(n) " + (age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly");
}

//7. https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
}

//8. 
