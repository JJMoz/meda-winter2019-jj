
var stars =" "



for (var counter = 0; counter < 10; counter = counter +1) {
    stars = stars + "*";
    console.log(stars)
}
// can use slice instead of split as well
var starsArray = stars.split("");


for (var counter = 0; counter < 9; counter = counter +1) {
    starsArray.pop();
    console.log(starsArray.join(""));

}

//-----------------------------------------------------

//PYRAMID USING SLICE

var stars =" "



for (var counter = 0; counter < 10; counter = counter +1) {
    stars = stars + "*";
    console.log(stars)
}


for (var counter = 9; counter > 0; counter = counter -1) {
    var newString = stars.slice(0, counter);
    console.log(newString);
}


