//1. https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
  return -number;
}

//2. https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript?fbclid=IwAR2cvOagR1IBDMRgs5UfOuCNWQSlicpBkrAbClqwfPlZsOzQMBAnSnc3wzc

function greet(name, owner) {
  const helloBoss = "Hello boss";
  const helloGuest = "Hello guest";
  if (name === owner) {
    return helloBoss;
  } else {
    return helloGuest;
  }
}

//3. https://www.codewars.com/kata/keep-hydrated-1/train/javascript?fbclid=IwAR0CYZEBklfGT9hiO-kqxDNIdeNZ8kNiKfHdCkQN6G_ZxEnpn3DcNEEbhDs

function litres(time) {
  const water = 0.5;
  const litres = time * water;
  const botles = Math.floor(litres);
  return botles;
}

//4. https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript?fbclid=IwAR1iF0o2KwNjFVx59-cex6i56OdMYy8TXWtUw77Ft8L59HyP84XI9joOPxk

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//5. https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript?fbclid=IwAR29SrTWeg6MYk20xGJdvXF-DlGR7thBN68MM_IkatcF7JQciWUKbvDevpQ

function move(position, roll) {
  return position + roll * 2;
}

//6. https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript?fbclid=IwAR2b5zHabEvnfOPDA8XvVnGLbnCwGdWuMqC_AgOAsAyz_bCNb4t9b08bdbs
//Невідформатований варіант
function describeAge(age) {
  return "You're a(n) " + (age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly");
}

//Відформатований варіант
function describeAge(age) {
  return (
    "You're a(n) " +
    (age <= 12
      ? "kid"
      : age <= 17
      ? "teenager"
      : age <= 64
      ? "adult"
      : "elderly")
  );
}

//7. https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

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

//8.
