const placesContainer = document.getElementById('Places-container')
console.log(placesContainer);
console.log(placesContainer.childNodes);
console.log(placesContainer.firstChild);
console.log(placesContainer.childNodes[1]);
console.log(placesContainer.childNodes[2]);
console.log(placesContainer.childNodes[2].childNodes);



const placesUl = document.querySelector('#Places-container ul');
console.log(placesUl);
const li = document.createElement('li');
console.log(li.innerText = 'Brand new place to go');
placesUl.appendChild(li);


const placesP = document.querySelector('#Places-container ul');
const P = document.createElement('p');
console.log(P.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s');
placesP.appendChild(P);


const placesH1 = document.querySelector('#Places-container ul');
const h1 = document.createElement('h1');
console.log(h1.innerText = 'we live in Bangladesh');
placesH1.appendChild(h1);


const placeH6 = document.querySelector('#Places-container ul');
const h6 = document.createElement('h6');
console.log(h6.innerText = 'we r like to visit');
placeH6.appendChild(h6);