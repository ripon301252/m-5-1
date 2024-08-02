// op-1: getElementsByTagName
const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1.innerText);
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

console.log(document.getElementsByTagName('li'))

// op-2: getElementById
console.log(document.getElementById('places-title'))
console.log(document.getElementById('places-title').innerText)
console.log(document.getElementById('places-title').innerText = 'MY TOUR LIST')


// op-3: getElementsByClassName
console.log(document.getElementsByClassName('import-places')) 
const places = document.getElementsByClassName('import-places');
for(const place of places){
    console.log(place.innerText = 'kuakata');
}


// op-4: querySelectorAll (node list)
const someLi = document.querySelectorAll('.fruits-container li');
// console.log(someLi);
for(li of someLi){
    console.log(li.innerText);
}

// op-5: querySelector
const sameLi = document.querySelector('.fruits-container li');
console.log(sameLi);
