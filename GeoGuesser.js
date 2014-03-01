//first create list on screen for clicking
var table = document.getElementById("countries");
for (i in worldmap.names) {
    table.innerHTML+="<tr><td onclick='clickCountryCell(this)'>"+worldmap.names[i]+"</td></tr>";
}

var countriesClicked = [];

//remove element from array
function removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}

function clickCountryCell(tableCell) {
    var countryClicked = tableCell.innerHTML;
    if (tableCell.className=="selectedCell") {
        removeByValue(countriesClicked, countryClicked);
        tableCell.className="deselectedCell";
    } else {
        countriesClicked.push(countryClicked);
        tableCell.className="selectedCell";
    }
}

var countryToFind;

function startStudying() {
    document.getElementById("countriesDiv").hidden=true;
    //randomize country list
    countriesClicked.sort(function() {return 0.5 - Math.random()});
    console.log("start studying with countries:"+countriesClicked);
    drawMapWithCountryList(countriesClicked);
    
    countryToFind=countriesClicked.pop();
    document.getElementById("message").innerHTML="Click on "+countryToFind+".";
}

function checkCorrectCountry(countryName) {
    if (countryName==countryToFind) {
        //success
        countryToFind=countriesClicked.pop();
        if (countryToFind) {
            document.getElementById("message").innerHTML="Good Job! You found "+countryName+". Now look for "+countryToFind+".";
        } else {
            document.getElementById("message").innerHTML="You found them all! Good job!";
        }
    } else {
        document.getElementById("message").innerHTML="Nope. That is "+countryName+", not "+countryToFind+". Try again.";
    }
}