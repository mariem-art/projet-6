// Récupération les photographers depuis le fichier JSON
fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
    console.log(photographes)
})
);

async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

        let photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers]})
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section a");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price  } = data;

    const picture = `./images/photographers/${portrait}`;
//affichage  de page d'aceuil
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        //crée une image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        //crée name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        //crée sous titre
        const h4 = document.createElement( 'h3' );
        h4.textContent = tagline;
        //crée pays
        const h3 = document.createElement( 'h4' );
        h3.textContent = city +","+ country ;
        //crée le prix
        const priceElement = document.createElement('p');
        priceElement.innerText = ` ${price} € /jour  `;
        // Structure les éléments
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(priceElement);
        return (article);
    }

    return { name, picture, tagline, city, country, price,  getUserCardDOM,}
}
