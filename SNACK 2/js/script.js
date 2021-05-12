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

var soccerTeamsExt = [];

for (var i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i]["points"] = getRandomNumber(0,15);
    soccerTeams[i]["offences"] = getRandomNumber(0,10);
    soccerTeamsExt.push( soccerTeams[i].name, soccerTeams[i].offences);
}
console.log(soccerTeams);
console.log(soccerTeamsExt);


//-----FUNCTION------//
function getRandomNumber (min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min)) + min;
}
