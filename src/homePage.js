function addListItem(list, text) {
    const li = document.createElement('li');

    li.textContent = text;

    list.appendChild(li);
}

export function displayHomePage() {

    const content = document.querySelector('#content');
    content.textContent = '';

    //Hero Section
    const hero = document.createElement('section');
    hero.id = 'hero';

    const herotitle = document.createElement('h1');
    herotitle.textContent = 'Urban Spice';
    hero.appendChild(herotitle);

    const heroSubtitle = document.createElement('h2');
    heroSubtitle.textContent = 'A Modern Take on Classic Cuisine';
    hero.appendChild(heroSubtitle);

    const herotext = document.createElement('p');
    herotext.textContent = 'Welcome to Urban Spice, a modern restaurant where fresh ingredients, bold flavors, and warm hospitality come together. We serve carefully crafted dishes inspired by global cuisines, prepared daily to give you an unforgettable dining experience.'
    hero.appendChild(herotext);

    content.appendChild(hero);

    //Specialties Section
    const specialties = document.createElement('section');
    specialties.id = 'specialties';

    const specialtiestitle = document.createElement('h2');
    specialtiestitle.textContent = 'Our Specialties';
    specialties.appendChild(specialtiestitle);

    const specialtiesSubTitle = document.createElement('p');
    specialtiesSubTitle.textContent = 'At Urban Spice, every dish tells a story. From sizzling starters to rich, flavorful main courses, our menu is designed to satisfy every craving. We focus on quality, freshness, and taste in every bite.';
    specialties.appendChild(specialtiesSubTitle);

    const specialtiesList = document.createElement('ul');

    addListItem(specialtiesList, 'Handcrafted recipes' );
    addListItem(specialtiesList, 'Fresh, locally sourced ingredients');
    addListItem(specialtiesList, 'Vegetarian and non-vegetarian options');
    addListItem(specialtiesList, 'Delicious desserts and refreshing drinks');

    specialties.appendChild(specialtiesList);

    content.appendChild(specialties);

    //chef Note Section
    const chefNote = document.createElement('section');
    chefNote.id = 'chefNote';

    const chefNoteTitle = document.createElement('h2');
    chefNoteTitle.textContent = 'Chef’s Note';
    chefNote.appendChild(chefNoteTitle);

    const chefNoteText = document.createElement('p');
    chefNoteText.textContent = 'Our goal is simple — to serve food that makes people happy. Every plate is prepared with passion, creativity, and attention to detail.';
    chefNote.appendChild(chefNoteText);

    const chefName = document.createElement('p');
    chefName.textContent = '— Head Chef, Urban Spice';
    chefNote.appendChild(chefName);

    content.appendChild(chefNote);


    //opening Hours Section
    const openingHoursSection = document.createElement('section');
    openingHoursSection.id = 'openingHoursSection';

    const openingHoursTitle = document.createElement('h2');
    openingHoursTitle.textContent = 'Opening Hours';
    openingHoursSection.appendChild(openingHoursTitle);

    const weekdayHours = document.createElement('p');
    weekdayHours.textContent = 'Monday – Friday: 11:00 AM – 10:00 PM';
    openingHoursSection.appendChild(weekdayHours);

    const weekendHours = document.createElement('p');
    weekendHours.textContent = 'Saturday – Sunday: 10:00 AM – 11:00 PM';
    openingHoursSection.appendChild(weekendHours);

    content.appendChild(openingHoursSection);

    //Visit Us Today Section
    const visitUsToday = document.createElement('section');
    visitUsToday.id = 'visitUsToday';

    const visitUsTodayTitle = document.createElement('h2');
    visitUsTodayTitle.textContent = 'Visit Us Today';
    visitUsToday.appendChild(visitUsTodayTitle);

    const visitUsTodayText = document.createElement('p');
    visitUsTodayText.textContent = 'Experience great food, great service, and great moments at Urban Spice. Whether you’re here for a quick meal or a special occasion, we promise a dining experience worth remembering.';
    visitUsToday.appendChild(visitUsTodayText);

    content.appendChild(visitUsToday);
}