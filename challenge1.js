///////////////////////////////////////
// Coding Challenge #1
//DATA
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
    4,
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')

// const players1 = game.players[0];
// const players2 = game.players[1];

//We can also deconstructor the players array within the game object.

const [players1, players2, number] = game.players;

console.log("DESTRUCTURING:");
console.log("ARRAY OF PLAYERS AT INDEX 0: ", players1);
console.log("ARRAY OF PLAYERS AT INDEX 1: ", players2);
console.log("FOR UNDERSTANDING", number);

//2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1)
//create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

//For this excerise we use the spread operator and we deconstruct the players1 arr to get the data out and save it in different new variables.
//Because arr are oredered, the order in which we deconstruct matters. Therefore, gk will save the name saved on the arr index 0.
//...fieldPlayers spreads all remaining data on players1 arr and saves it as a new arr under fieldPlayers variable. NOTE the name is whatver comes after thr ...
const [gk, dl, dr, dc, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)

//const allPlayers = [...game.players[0], ...game.players[1]];
//NOTE We can also use the variables we created players1 & players2 from question 1
//Finally if we had done  allPlayers = [...players1, players2]; then all players in players2 would have been inside an arr within allPlayers. So we spread
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players.
//So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("Beyeen Munich after 3 substitutions");
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1);
// console.log(draw);
// console.log(team2);

//The better way of doing this is with objet distruturing

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

const {
  odds: { team1: team1, x: draw, team2 },
} = game;

//Like we use [] we use {} on the left hand side to dicunstrut an object.

console.log("Team 1 odds: ", team1);
console.log("Draw odds: ", draw);
console.log("Team 2 odds: ", team2);

const objectPratie = {
  camping: 14,
  parking: 3.25,
  food: 6.5,
  city: "Salzaburg",
};

const { camping: Odds_Team1, city: city, parking } = objectPratie;
console.log(Odds_Team1);
console.log(city);
console.log(parking);

const objectPractice2 = {
  option1: {
    camping: 14,
    parking: 3.25,
    food: 6.5,
    city: "Salzaburg",
  },
  option2: {
    camping: 9,
    parking: 4,
    food: 10,
    city: "Biarritz",
  },
};

const {
  option1: { camping: campingSalzburg },
} = objectPractice2;

//Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console,
//along with the number of goals that were scored in total (number of player names passed in)

//Funtions. When passing separate strings into a function and we dont know the number of arguments being passed we can use the spread operator
//The name we give to the argumnents being spread does not matter

const printGoals = (...hola) => {
  let numberGoals = hola.length;

  console.log(`Game golas: ${numberGoals}`);
  console.log(`Scored: ${hola}`);
};

printGoals("Muller", "Levandoski", "MatiGol");

console.log("Making sure it works the same if passing an array");
let scoreTable = ["Muller", "Levandoski", "MatiGol"];
printGoals(scoreTable);

//Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win,
//without using an if/else statement or the ternary operator.

team1 > team2
  ? console.log(`${game.team1} has better ODDS`)
  : console.log(`${game.team2} has better ODDS`);

team1 > team2 && console.log("I WANNA SURF");
team1 < team2 && console.log("I LOVE MY MOM AND MY GRANDMA");

/////////////////////////////////////////////////////////////////////////////////

//CODING CHALLANGE 2

/////////////////////////////////////////////////////////////////////////////////

//1. Loop over the game.scored array and print each player name to the console, along with the goal number
//(Example: "Goal 1: Lewandowski")

console.log("THIS IS CHALLANGE 2:");
console.log(game.scored);

for ([i, player] of game.scored.entries()) {
  console.log(`${player} GOAL ${i + 1}`);
}

for (scorer of game.scored.values()) {
  console.log(scorer);
}

for (index of game.scored.keys()) {
  console.log(index);
}

// 2.Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
//you can go check if you don't remember)

// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },

let averageOdd = 0;
for (const average_odd of Object.values(game.odds)) {
  console.log(average_odd);
  averageOdd = averageOdd + average_odd;
}
console.log(`THE AVERAGE ODD IS ${averageOdd / 3}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
console.log("QUESTION 3");
for ([key, odd] of Object.entries(game.odds)) {
  //console.log(game[key]);

  if (game[key] === undefined) {
    console.log(`Odd of victory draw: ${odd}`);
  } else {
    console.log(`Odd of victory ${game[key]}: ${odd}`);
  }
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

let newObject = {};

for (const player of game.scored) {
  if (!newObject[player]) {
    newObject[player] = 1;
  } else {
    newObject[player]++;
  }
}

console.log(newObject);

for ([scorer, goals] of Object.entries(newObject)) {
  //let goal = goals;
  let message;
  console.log("NUMBER OF GOALS:");
  console.log(goals);

  if (goals > 1) {
    message = "goals";
  } else {
    message = "goal";
  }
  console.log(`${scorer} scored ${goals} ${message}`);
}
