document.getElementById("menu-el").innerText = 600;

let menuEl = document.getElementById("menu-el")

let menu = 600

function increment() {
    menu = menu + 1
    menuEl.innerText = menu 
}


function decrement() {
    menu = menu - 1
    menuEl.innerText = menu 
}

function save() {
    console.log(menu)
}

let myName = 'Emmanuel';
let greeting = 'Hi, my name is ';

let myGreeting = greeting +  myName;

