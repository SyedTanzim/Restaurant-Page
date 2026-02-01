import { displayHomePage } from './homePage.js';

displayHomePage();

export function homePagebutton() {
    const aboutBtn = document.querySelector('#home-btn');
    aboutBtn.addEventListener('click', () => {
        displayHomePage();
    })
}
homePagebutton();