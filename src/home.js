import imagePastaSrc from "./assets/pasta.jpg";

function loadHome() {
    let divContent = document.querySelector('#content');

    const titleRestaurant = document.createElement('h1');
    titleRestaurant.textContent = "Char's Restaurant Page";

    const titleByline = document.createElement('h3');
    titleByline.textContent = "A rating of 5 stars by ";
    const italicText = document.createElement('em');
    italicText.textContent="The New York Times";
    titleByline.appendChild(italicText);

    const description = document.createElement('p');
    description.textContent ="Welcome to Aglio Olio Land, your go-to destination for authentic, handcrafted pasta that brings the flavors of Italy right to your plate. Nestled in the heart of the city, our cozy pasta shop is a haven for food lovers who appreciate the art of simple, yet exquisite, culinary delights.";
    description.classList.add('description');

    const imagePasta = document.createElement('img');
    imagePasta.src=imagePastaSrc;
    imagePasta.classList.add("imagePasta");

    divContent.appendChild(titleRestaurant);
    divContent.appendChild(titleByline);
    divContent.appendChild(imagePasta);
    divContent.appendChild(description);
}

export {loadHome};