const sections = document.querySelectorAll('section');
//console.log(sections);
for(const section of sections){
    //console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginTop = '8px';
    section.style.borderRadius = '15px'
    section.style.paddingLeft = '20px'
    section.style.backgroundColor = 'lightgray' 
}

//const PlacesContainer = document.getElementById('Places-container');
//PlacesContainer.style.backgroundColor = 'yellow';

const PlacesContainer = document.getElementById('Places-container');
PlacesContainer.classList.add('text-center');
PlacesContainer.classList.remove('blue-bg');

