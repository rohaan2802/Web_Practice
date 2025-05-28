// const list = document.querySelector('.list-group-item');

// console.log(list.parentElement)
// console.log(list.parentNode)

// const card = document.querySelector('.card-body')

// console.log(card.nextElementSibling);

// create new Element 
const newElement = document.createElement('span')
const paragraph = document.createElement('p')
// const list = document.querySelector('.list-group')

// adding Class 
newElement.className = 'text-danger'

// Adding new Attribute 
newElement.setAttribute('title','Heloo Genius')

// creating Text 
const txt = document.createTextNode('This is Custom Text From Javascript');

paragraph.appendChild(txt)

newElement.appendChild(paragraph)

console.log(newElement);
// console.log(paragraph);
// console.log(txt);

// const navbar = document.querySelector('.navbar');

// navbar.appendChild(newElement);


// // console.log(list.className);
// console.log(list);
// console.log(list.getAttribute('title'));