//Step One
var victimNumber = prompt("How many disaster victims do you wish to enter?");

//Step Two
var incrementVictim = 1;
var allVictims = [];

if (victimNumber > 0) {
    do {
        var newVictim = prompt("Please enter the victim's name, phone number, and street.");
        incrementVictim ++;
        var resVictim = newVictim.split(","); 
        console.log(resVictim);
        allVictims.push(resVictim);
    }
    while (incrementVictim <= victimNumber);
}
else {
    alert("Thanks!");
}

//Step Three
var volunteerNumber = prompt("How many disaster volunteers do you wish to enter?");
var incrementVolunteer = 1;
var allVolunteers = [];

if (volunteerNumber > 0) {
    do {
        var newVolunteer = prompt("Please enter volunteer's name, phone number, and street.");
        incrementVolunteer ++;
        var resVolunteer = newVolunteer.split(",");
        console.log(resVolunteer);
        allVolunteers.push(resVolunteer);
    }
    while (incrementVolunteer <= volunteerNumber);
}
else {
    alert("Thanks!");
}

//Step Four
allVictims.toString;
allVolunteers.toString;

alert("Your victims are" + " " + allVictims + " " + "and your volunteers are" + " " + allVolunteers);


