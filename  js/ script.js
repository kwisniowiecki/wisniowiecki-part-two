var destination;
var groupSize;
var travelSuggestion;



vacationType = prompt("Welcome! What kind of vacation would you like to go on, musical, tropical, or adventurous?");
console.log(vacationType);

switch(vacationType){
    case "musical":
        alert("Musical! That sounds lovely!")
            break;
    case "tropical":
        alert("Tropical! Me too!")
            break;
    case "adventurous":
        alert("Let's go on an adventure!")
            break;}

while(vacationType != "musical" && vacationType != "tropical" && vacationType != "adventurous") {
    vacationType = prompt("Oh no! Looks like we missed your answer. Would you like to go on a musical, tropical, or adventurous vacation?");
}
if(vacationType === "musical"){
    destination = "New Orleans";
}
else if (vacationType === "tropical"){
    destination = "the beach in Mexico";
}
else if (vacationType === "adventurous"){
    destination = "whitewater rafting in the Grand Canyon";
}




groupSize = parseInt(prompt("Awesome! How many will be traveling?"));
console.log(alert(groupSize + " got it!"));

while(groupSize < 1) {
    travelSuggestion = prompt("Oh no! I hope you didn't change your mind about taking a vacation so soon! How many are in your party?");
}
if (groupSize > 5) {
    travelSuggestion = "a charter flight";
}
else if (groupSize > 2) {
    travelSuggestion = "a helicopter";
}
else if (groupSize > 0) {
    travelSuggestion = "a first class flight";
}
var result = ("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take " + travelSuggestion + " to " + destination + "!");
console.log(result);
alert(result);