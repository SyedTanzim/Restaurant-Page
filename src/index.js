import { displayHomePage } from './homePage.js';
import { displayMenuPage } from './menuPage.js';
import { displayAboutPage } from './aboutPage.js';
import './style.css';

displayHomePage();

export function homePagebutton() {
    const aboutBtn = document.querySelector('#home-btn');
    aboutBtn.addEventListener('click', () => {
        displayHomePage();
    })
}
homePagebutton();

export function menuPagebutton() {
    const aboutBtn = document.querySelector('#menu-btn');
    aboutBtn.addEventListener('click', () => {
        displayMenuPage();
    })
}
menuPagebutton();

export function aboutPagebutton() {
    const aboutBtn = document.querySelector('#about-btn');
    aboutBtn.addEventListener('click', () => {
        displayAboutPage();
    })
}
aboutPagebutton();