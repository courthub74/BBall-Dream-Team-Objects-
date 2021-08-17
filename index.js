//an object containing basketball players
//Ball Players

const startingFive = [
  {
    name: 'Chris Paul',
    position: 'Guard',
    team: 'Phoenix Suns',
    ppg: 32
  },
  {
    name: 'Giannis Antetekupo',
    position: 'Center',
    team: 'Milwaukee Bucks',
    ppg: 37
  },
  {
    name: 'Kevin Durant',
    position: 'Forward',
    team: 'Brooklyn Nets',
    ppg: 43
  },
  {
    name: 'Steph Curry',
    position: 'Guard',
    team: 'Golden State Warriors',
    ppg: 40
  },
  {
    name: 'Lebron James',
    position: 'Forward',
    team: 'Los Angeles Lakers',
    ppg: 43
  }
];

//Print out the name of the first person on the list
// console.log(startingFive[0]['name']);
console.log(`The name of the first person is ${startingFive[0].name}`);

//Print out the name of the fourth person on the list
// console.log(startingFive[3]['name']);
console.log(`The name of the third person is ${startingFive[3].name}`);

//NOW I WILL ANNOUNCE PLAYERS BY POSITION:

//SU-SU-PSUUUUED0
//for each iteration
//if the iteration.position === 'Position'
//print that iteration

//lets announce the Guards
console.log('AND STARTING AT GUARD');
for (h = 0; h < startingFive.length; h++) {
  //Loop through every object
  for (guard in startingFive[h]) {
    //variable created to identify unique object
    if (startingFive[h].position === 'Guard') {
      //declaring the object by one of the key values string values
      console.log(`${guard} : ${startingFive[h][guard]}`); //printing out the actual key/value pair by printing
      //out the guard iteration of the whole iteration
    }
  }
}

//lets announce the Forwards
console.log('AND STARTING AT FORWARD');
for (f = 0; f < startingFive.length; f++) {
  for (forward in startingFive[f]) {
    if (startingFive[f].position === 'Forward') {
      console.log(`${forward} : ${startingFive[f][forward]}`);
    }
  }
}

//lets announce the Center
console.log('AND STARTING AT CENTER');
for (d = 0; d < startingFive.length; d++) {
  for (player in startingFive[d]) {
    if (startingFive[d].position === 'Center')
      console.log(`${player} : ${startingFive[d][player]}`);
  }
}
