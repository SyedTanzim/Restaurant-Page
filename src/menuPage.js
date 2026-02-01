function addListItem(list, text, link) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const name = document.createElement('p');


    img.src = link;
    img.alt = text;
    name.textContent = text;

    li.appendChild(img);
    li.appendChild(name);

    list.appendChild(li);
}

export function displayMenuPage() {
    const content = document.querySelector('#content');
    content.textContent = '';

    //Menu Section
    const menuSection = document.createElement('section');
    menuSection.id = 'menuSection';

    const menuSectionTitle = document.createElement('h1');
    menuSectionTitle.textContent = 'MENU';
    menuSection.appendChild(menuSectionTitle);

    //Starter Section
    const starterSection = document.createElement('section');
    starterSection.id = 'starterSection';

    const starterSectionTitle = document.createElement('h2');
    starterSectionTitle.textContent = 'Starters';
    starterSection.appendChild(starterSectionTitle);

    const startersList = document.createElement('ul');

    addListItem(startersList, 'Garlic Bread with Herb Butter', 'https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg');
    addListItem(startersList, 'Crispy Chicken Bites', 'https://www.hauteandhealthyliving.com/wp-content/uploads/2023/01/air-fryer-chicken-bites-10-4.jpg');
    addListItem(startersList, 'Spicy Paneer Tikka', 'https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg');

    starterSection.appendChild(startersList);
    menuSection.appendChild(starterSection);

    //Salads Section
    const SaladSection = document.createElement('section');
    SaladSection.id = 'saladSection';

    const SaladSectionTitle = document.createElement('h2');
    SaladSectionTitle.textContent = 'Salads';
    SaladSection.appendChild(SaladSectionTitle);

    const SaladList = document.createElement('ul');

    addListItem(SaladList, 'Fresh Garden Salad', 'https://betterfoodguru.com/wp-content/uploads/2024/05/garden-salad-3.jpg');
    addListItem(SaladList, 'Caesar Salad with Grilled Chicken', 'https://www.spendwithpennies.com/wp-content/uploads/2023/06/Grilled-Chicken-Caesar-Salad-SpendWithPennies-4.jpg');
    addListItem(SaladList, 'Greek Salad with Feta Cheese', 'https://silkroadrecipes.com/wp-content/uploads/2021/03/Greek-Feta-Salad-square.jpg');

    SaladSection.appendChild(SaladList);
    menuSection.appendChild(SaladSection);

    //Main Course Section
    const mainCourseSection = document.createElement('section');
    mainCourseSection.id = 'mainCourseSection';

    const mainCourseSectionTitle = document.createElement('h2');
    mainCourseSectionTitle.textContent = 'Main Course';
    mainCourseSection.appendChild(mainCourseSectionTitle);

    const mainCourseList = document.createElement('ul');

    addListItem(mainCourseList, 'Grilled Chicken Alfredo Pasta', 'https://thescranline.com/wp-content/uploads/2023/05/CHICKEN-ALFREDO-S-01.jpg');
    addListItem(mainCourseList, 'Spicy Beef Burger with Fries', 'https://static01.nyt.com/images/2025/09/02/multimedia/07EATrex-jalapeno-cheeseburgers-jgwk/07EATrex-jalapeno-cheeseburgers-jgwk-jumbo.jpg');
    addListItem(mainCourseList, 'BBQ Glazed Ribs', 'https://images.getrecipekit.com/20220525185955-img_3912-2.jpg?width=650&quality=90&');

    mainCourseSection.appendChild(mainCourseList);
    menuSection.appendChild(mainCourseSection);

    //Dessert Section
    const dessertSection = document.createElement('section');
    dessertSection.id = 'dessertSection';

    const dessertSectionTitle = document.createElement('h2');
    dessertSectionTitle.textContent = 'Desserts';
    dessertSection.appendChild(dessertSectionTitle);

    const dessertList = document.createElement('ul');

    addListItem(dessertList, 'Chocolate Lava Cake', 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg');
    addListItem(dessertList, 'New York Cheesecake', 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_599,q_auto:low/22870_sfs-foolproof-new-york-style-cheesecake-14');
    addListItem(dessertList, 'Vanilla Ice Cream with Chocolate Sauce', 'https://www.milkmaid.in/sites/default/files/2022-12/Vanilla-Ice-Cream-with-Chocolate-Sauce-335x300.jpg');

    dessertSection.appendChild(dessertList);
    menuSection.appendChild(dessertSection);

    //Beverage Section
    const beverageSection = document.createElement('section');
    beverageSection.id = 'beverageSection';

    const beverageSectionTitle = document.createElement('h2');
    beverageSectionTitle.textContent = 'Beverages';
    beverageSection.appendChild(beverageSectionTitle);

    const beverageList = document.createElement('ul');

    addListItem(beverageList, 'Fresh Lime Soda', 'https://gunjanchopra.com/content/images/2022/08/FI-2.jpg');
    addListItem(beverageList, 'Iced Coffee', 'https://kitchenaid.com.au/cdn/shop/articles/Iced_Latte.png?v=1759984682');
    addListItem(beverageList, 'Mint Mojito', 'https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg');

    beverageSection.appendChild(beverageList);
    menuSection.appendChild(beverageSection);

    content.appendChild(menuSection);
}