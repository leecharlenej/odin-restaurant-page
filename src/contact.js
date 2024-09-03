function loadContact () {

    let divContent = document.querySelector('#content');

    const titleContact = document.createElement('h1');
    titleContact.textContent = "Contact";

    const titleByline = document.createElement('h3');
    titleByline.textContent = "Drop us an email anytime!";

    const contact = document.createElement('ul');
    const contactDetails = [
        {"Email": "contact_us@aglioOlioLand.com"},
        {"Facebook": "https://facebook.com"},
        {"Instagram": "https://instagram.com"},
        {"X": "https://twitter.com"}
    ];

    for (const item of contactDetails){
        const contactItemBullet = document.createElement('li');
        const contactItemLink = document.createElement('a');

        const key = Object.keys(item)[0];
        const value = item[key];

        contactItemLink.innerText = key;
        console.log(`check for key: ${contactItemLink.innerText}`);
        

        if (key==="Email"){
            contactItemLink.href=`mailto:${value}`;
        } else {
            contactItemLink.href = value;
            contactItemLink.target ="_blank";
        }

        contactItemBullet.appendChild(contactItemLink)

        contact.appendChild(contactItemBullet)
    }


    divContent.appendChild(titleContact);
    divContent.appendChild(titleByline);
    divContent.appendChild(contact);

}

export { loadContact };