const form = document.getElementById('form');
const list = document.getElementById('unOrderedList');
const searchBox = document.getElementById('searchfilter');

const AddNewItem = event => {
    event.preventDefault();

    const itemValue = document.getElementById('input');

    const listItem = document.createElement('li');
    const delBtn = document.createElement('button');

    listItem.className = 'list-group-item';
    delBtn.className = 'float-right btn btn-sm btn-danger';
    

    listItem.appendChild(document.createTextNode(itemValue.value))
    delBtn.appendChild(document.createTextNode('X'))
    
    list.appendChild(listItem)
    listItem.appendChild(delBtn)

    itemValue.value = ''
}

const delList = event => {
    if(event.target.classList.contains('btn-danger') == true) {
        const parentListItem = event.target.parentElement;
        
        if(confirm('are u sure?')) {
            list.removeChild(parentListItem)
        }
    }
}

const searchItems = event => {
    const searchValue = event.target.value.toLowerCase();

    const listItems = list.getElementsByTagName('li');

    for(let i = 0; i < listItems.length; i++) {
        const listTxt = listItems[i].firstChild.textContent.toLowerCase();

        if (listTxt.indexOf(searchValue) != -1) {
            listItems[i].style.display = 'block'
            document.querySelector('.output').innerText = ''
        } else {
            listItems[i].style.display = 'none'
            document.querySelector('.output').innerText = 'No Data Found'
        }
    }
}


// events & EXecuting Functions
form.addEventListener('submit', AddNewItem);
list.addEventListener('click', delList);
searchfilter.addEventListener('keyup', searchItems)