// challenge 
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
console.log(gk);

const allPlayers = [...players1, ...players2];

const substitutes = ["Thiago", "Countihno", "Perisic"];
const players1Final = [...players1, ...substitutes];

const {team1, x : draw, team2,} = game.odds;
console.log(team1, draw, team2);

const repetitions = function (array, item){
    
    if (!(array.includes(item))) return 0;
    let count = 0;
    array.forEach(checker =>{
        if (checker === item) count++;
    })
    return count;
}

const printGoals = function(...playerNames){
    console.log(game.scored);
    playerNames.forEach((player) => {
        console.log(player, ":", repetitions(game.scored, player));
    })
}
printGoals("Lewandowski", "Gnarby", "Reus");

team1 < team2 ? console.log(game.team1, "is going to win"): console.log(game.team2, "is going to win");

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

console.log(team1 < team2 && `${game.team1} is going to win`);
team1 < team2 && console.log(game.team1, "is going to win");
team1 > team2 && console.log(game.team2, "is going to win");    // doesn't print anything because it stops at team1 > team2 as it is false