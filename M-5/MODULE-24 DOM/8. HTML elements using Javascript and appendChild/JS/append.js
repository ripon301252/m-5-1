// 1.  where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli Bon';
// 3. add the child
placesList.appendChild(li);

console.log('---------------------------------------------------------')

// section
// 1.  where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');

const h1 = document.createElement('h1')
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Briyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);



// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul> 
    <li> Panjabi </li>
    <li> Lungi </li>
    <li> Payjama </li>
    <li> Ganzi </li>
</ul>
`
mainContainer.appendChild(sectionDress);


// styles
const sections = document.querySelectorAll('section');
for(const section of sections){
    //console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginTop = '8px';
    section.style.borderRadius = '15px'
    section.style.paddingLeft = '20px'
    section.style.backgroundColor = 'lightgray' 
    section.style.textAlign = 'center' 
    
}


