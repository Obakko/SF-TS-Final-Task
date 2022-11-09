"use strict";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("li");
const toDoList = document.getElementById("myUL");
const input = document.getElementById("myInput");
for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
let closeButtons = document.getElementsByClassName("close");
for (let y = 0; y < closeButtons.length; y++) {
    let closeButton = closeButtons[y];
    closeButton.addEventListener('click', () => {
        const li = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        const target = ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    let inputValue = input.value;
    let nodeText = document.createTextNode(inputValue);
    li.appendChild(nodeText);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        toDoList.appendChild(li);
    }
    input.value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener('click', () => {
        const li = span.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
