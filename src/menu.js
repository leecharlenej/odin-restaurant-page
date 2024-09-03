import plain from "./assets/plain.jpg";
import prawn from "./assets/prawn.jpg";
import chicken from "./assets/chicken.jpg";
import beef from "./assets/beef.jpg";

function loadMenu() {

    let divContent = document.querySelector('#content');

    const titleMenu = document.createElement('h1');
    titleMenu.textContent = "Menu";

    const titleByline = document.createElement('h3');
    titleByline.textContent = "Our menu offers a curated selection of pasta dishes, each highlighting the authentic flavors of Italy. From classic favorites to creative new dishes, there's something for every taste.";
    titleByline.classList.add('description');

    // const divMenu = document.createElement('div');
    // divMenu.classList.add("div-menu");

    const menu = document.createElement('ul');
    menu.classList.add("ul-menu");
    const menuItems = [
        {'Plain Aglio Olio ($5)':'A classic dish of perfectly cooked pasta tossed in garlic, olive oil, and a touch of chili for a simple yet flavorful experience.',
            img:plain},
        {'Prawn Aglio Olio ($9)':'Succulent prawns elevate this garlic and olive oil pasta, offering a delightful combination of seafood and spice.',
            img:prawn},
        {'Chicken Aglio Olio ($8)':'Tender chicken pieces blend seamlessly with garlic-infused pasta, creating a hearty and savory delight.',
            img:chicken},
        {'Beef Aglio Olio ($12)':'Juicy strips of beef add richness to this garlic and olive oil pasta, delivering a robust and satisfying flavor.',
            img:beef}];

    for (const item of menuItems){
        const menuImage = document.createElement('img');
        menuImage.src=Object.values(item)[1]; 
        menuImage.classList.add("imageMenu");

        const menuItemBullet = document.createElement('li');
        const boldItemName = document.createElement('strong');
        boldItemName.innerText = Object.keys(item)[0];


        const menuItemDescription = document.createElement('span');
        menuItemDescription.innerText = ` - ${Object.values(item)[0]}`;

        menuItemBullet.appendChild(boldItemName);
        menuItemBullet.appendChild(menuItemDescription);
        console.log(`check description: ${menuItemDescription.innerText}`)
        menu.appendChild(menuImage);
        menu.appendChild(menuItemBullet)
    }


    divContent.appendChild(titleMenu);
    divContent.appendChild(titleByline);
    divContent.appendChild(menu);

    // divContent.appendChild(divMenu);

}

export {loadMenu};