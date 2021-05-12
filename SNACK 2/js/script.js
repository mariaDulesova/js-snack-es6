// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


var soccerTeams = [
    {
        name: "TeamA",
    },
    {
        name: "TeamB", 
    },
    {
        name: "TeamC",
    },
    {
        name: "TeamD"
    }
]

var soccerTeamsNew = [];

for (var i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i]["points"] = getRandomNumber(0,15);
    soccerTeams[i]["offences"] = getRandomNumber(0,10);

    //ES5
    // var soccerTeamsExt = {};
    // soccerTeamsExt.name = soccerTeams[i].name;
    // soccerTeamsExt.offences = soccerTeams[i].offences;
    // soccerTeamsNew.push(soccerTeamsExt);

    //ES6
    var {name, offences} = soccerTeams[i];
    soccerTeamsNew.push({name, offences});
}

console.log(soccerTeams);
console.log(soccerTeamsNew)



//-----FUNCTION------//
function getRandomNumber (min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min+1)) + min;
}
