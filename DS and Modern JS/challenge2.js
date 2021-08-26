// challenge2
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

for (const [score, name] of game.scored.entries()){
    console.log("Goal", score + 1, name);
}

let average = 0;
for (const value of Object.values(game.odds)){
    average += value/Object.values(game.odds).length;
}
console.log(average);

for (const [team, value] of Object.entries(game.odds)){
    game?.[team] && console.log(`Odds of ${game[team]} winning: ${value}`);
    game?.[team] ?? console.log(`Odds for a draw is ${value}`);
}

const scorers = {}

for (const name of game.scored){
    // if (scorers[name]) scorers[name]++;
    // else scorers[name] = 1;

    if (scorers?.[name]) scorers[name]++;
    else scorers[name] = 1;


};
console.log(scorers);
