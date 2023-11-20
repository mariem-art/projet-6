
 function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id} = data;

    const picture = `./images/photographers/${portrait}`;

//affichage  de page d'acceuil
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        // Crée un lien <a> 
        const link = document.createElement('a');
        link.href = `/photographe.html?id=${id}`;
        link.text ='cliquer ici';
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
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(priceElement);
        return (article);
    }
    return { name, picture, tagline, city, country, price,  getUserCardDOM, id,}
}
