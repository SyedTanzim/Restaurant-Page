export function displayAboutPage() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const aboutSection = document.createElement('section');
    aboutSection.id = 'aboutSection';

    const aboutSectionHeading = document.createElement('h1');
    aboutSectionHeading.textContent = 'About Us';
    aboutSection.appendChild(aboutSectionHeading);

    const aboutSectionText = document.createElement('p');

    aboutSectionText.textContent = `Urban Spice is a modern restaurant created for people who love great food and meaningful dining experiences. Our journey began with a simple idea — to bring together fresh ingredients, bold flavors, and a welcoming atmosphere under one roof.
    
    We take pride in crafting dishes that are inspired by cuisines from around the world while staying true to quality and authenticity. Every meal at Urban Spice is prepared with care, using locally sourced ingredients and time-tested cooking techniques to ensure freshness and flavor in every bite.
    
    Our team is passionate about creating an environment where guests feel comfortable, relaxed, and valued. Whether you’re visiting for a quick lunch, a family dinner, or a special celebration, we aim to make every visit memorable.
    
    At Urban Spice, food is more than just a meal — it’s an experience designed to bring people together.`;

    aboutSection.appendChild(aboutSectionText);
    content.appendChild(aboutSection);
}