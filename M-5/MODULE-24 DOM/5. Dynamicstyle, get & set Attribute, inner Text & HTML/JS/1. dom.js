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
 //console.log(someLi);
for(li of someLi){
    console.log(li);
    //console.log(li.innerText);
}

// op-5: querySelector
const sameLi = document.querySelector('.fruits-container li');
console.log(sameLi);



console.log('------------------------------------------------------------------')

const fruit = document.getElementById('fruits-title');
console.log(fruit);
console.log(fruit.innerText);
console.log(fruit.style);
fruit.style.color = 'red';
fruit.style.backgroundColor = 'yellow';
fruit.style.fontSize = '100px';
fruit.style.borderRadius = '10px';
fruit.style.border = '5px solid purple';
fruit.style.padding = '50px';
fruit.style.textAlign = 'center';

console.log('------------------------------------------------------------------')

const fruitLi = document.querySelectorAll('.fruits-container li');
for(li of fruitLi){
    li.style.color = 'red';
    li.style.backgroundColor = 'yellow';
    //li.style.textDecoration = 'none';
    li.style.listStyle = 'none';
    li.style.fontSize = '25px';
    li.style.borderRadius = '10px';
    li.style.border = '5px solid purple';
    li.style.padding = '10px';
    li.style.textAlign = 'center';
    li.style.display = 'inline';
    li.style.flex = 'auto';
    li.style.marginLeft = '10px';
    
    
}

console.log('------------------------------------------------------------------')
// getAttribute
const title = document.getElementById('places-title');
console.log(title.getAttribute('id'));
console.log(title.getAttribute('class'));
console.log(title.classList);

// add
console.log('------------------------------------------------------------------')
console.log(title.classList.add('yellow-bg'));
console.log(title.classList);

//remove
console.log('------------------------------------------------------------------')
console.log(title.classList.remove('yellow-bg'));
console.log(title.classList);


console.log('------------------------------------------------------------------')

// setAttribute (title Attribute)
console.log(title.setAttribute('title', 'tooltip set by JavaScript'))

console.log('------------------------------------------------------------------')

const fruitsContainer = document.getElementsByClassName('fruits-container');
console.log(fruitsContainer);
console.log(document.getElementsByClassName('fruits-container')[0].innerHTML);
//console.log(document.getElementsByClassName('fruits-container')[0].innerHTML = '<h3>ABC wow DOM IS CHANGING</h3>');
console.log(document.getElementsByClassName('fruits-container')[0].innerText);
