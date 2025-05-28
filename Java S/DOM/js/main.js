// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);

// document.title = 'Hello World..!!'

// document.getElementById
// let heading = document.getElementById('heading');

// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(heading.textContent)
// heading = 'Hello World';

// heading.innerHTML = '<h3>Document Object Model</h3>' 

// let lists = document.getElementsByClassName('list-group-item');

// lists[1].style.backgroundColor = 'yellow'
// lists[1].textContent = 'Hello'

// let lists = document.getElementsByTagName('li');
// console.log(lists)


// let lists = document.querySelector('.list-group-item:last-child');
// let lists = document.querySelectorAll('.list-group-item');

// for(let i = 0; i < lists.length; i++) {
//     lists[i].style.backgroundColor = "Yellow"
// }

// let lists = document.querySelectorAll('.list-group-item:nth-child(even)')
// let list = document.querySelectorAll('.list-group-item:nth-child(odd)')
// for(let b=0; b < lists.length; b++){
//     list[b].style.backgroundColor ='yellow'
// }
// console.log(lists)
// for(let i=0; i < lists.length; i++){
//     lists[i].style.backgroundColor ='gray'
// }
// console.log(lists)

let evenList = document.querySelectorAll('.list-group-item:nth-child(even)')
let oddList = document.querySelectorAll('.list-group-item:nth-child(odd)')

for(let count = 0; count < evenList.length; count++) {
    evenList[count].style.backgroundColor = "gray"
    oddList[count].style.backgroundColor = "#ccc"
}
