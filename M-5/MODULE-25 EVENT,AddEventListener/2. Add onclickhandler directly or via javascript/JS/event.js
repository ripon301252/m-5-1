// option-1 directly set on the HTML element

// option-2 onclikfunction
function makeRed(){
    document.body.style.backgroundColor= 'red' 
}

// option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option-3 another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}