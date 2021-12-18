const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

function addItem() {
    const checkbox = document.createElement('input');
    const item = document.createElement('li');
    const text = document.createElement('span');
    const btn = document.createElement('button');
    checkbox.type = 'checkbox';
    text.innerHTML = input.value;
    btn.innerHTML = 'X';
    item.appendChild(checkbox);
    item.appendChild(text);
    list.appendChild(item);
    item.appendChild(btn);
    btn.addEventListener('click', removeItem);
}

button.addEventListener('click', addItem);

function removeItem(event) {
    const item = event.target.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
}




