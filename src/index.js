// index.js
// import "./styles.css";
// import { greeting } from "./greeting.js";

// console.log(greeting);

let logMessageFlag = true;
function logMessage(message) {
    if (logMessageFlag) {
        console.log(message);
    }
}

logMessage('Load index.js');

/*******************************************************
 * Start of website
 *******************************************************/
import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

let navMenu = document.querySelector('nav');
navMenu.classList.add("nav");

let divContent = document.querySelector('#content');

const pageList = {
    "Home": loadHome,
    "Menu": loadMenu,
    "Contact": loadContact
};

function loadPage(pageName){
    divContent.innerText="";
    pageList[pageName]();
}

const buttonList = [
    {"#home-button": "Home"},
    {"#menu-button": "Menu"},
    {"#contact-button": "Contact"}
];

for (const buttonObj of buttonList){
    const selector = Object.keys(buttonObj)[0];
    const pageName = buttonObj[selector];
    
    const buttonElement = document.querySelector(selector)
    buttonElement.addEventListener("click", ()=>loadPage(pageName));
}

loadHome();