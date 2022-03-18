//system  02
function makeRed(){
    document.body.style.backgroundColor = "red";
}
//system 03
// handle using by onClick
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;


function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//system 04
// anonymous function 
const greenButton = document.getElementById("make-button-Green");
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

//system 05
// handle by using addEventListener
const goldenButton = document.getElementById("make-golden-rod");

    goldenButton.addEventListener('click', makeGoldenRod);


function makeGoldenRod(){
    document.body.style.backgroundColor =("Goldenrod")

    
}

//system 06
const hotPinkButton = document.getElementById("make-hotpink");

hotPinkButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "hotpink";
})


//system 07

document.getElementById("make-light-blue").addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue" })