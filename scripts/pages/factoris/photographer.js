
// Récupération des pièces depuis le fichier JSON
fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
    console.log(photographes)
})
);
function getHeaderPhotographer(){
    // coder la structure du header 
const divDetails = document.createElement('div');
divDetails.classList.add('photograph-header');
divDetails.setAttribute('role', 'article');
divDetails.setAttribute('aria-label', `${name}, ${city}, ${country}`);

 // Crée un titre h1
 const h1 = document.createElement('h1');
 h1.textContent = name;

 // Crée les éléments pour la ville et le pays
 const citySpanCuntry = document.createElement('span');
 citySpan.classList.add('red');
 citySpan.textContent = city +","+ country ;
 

 // Créer le paragraphe pour le tagline
 const taglinePara = document.createElement('p');
 taglinePara.classList.add('tagline')
 taglinePara.textContent = tagline;


 // Structure les éléments
 divDetails.appendChild(h1);
 divDetails.appendChild(citySpanCuntry);
 divDetails.appendChild(document.createTextNode(', ')); 

 divDetails.appendChild(taglinePara);
 const photographerImage = document.createElement('img');
 photographerImage.src = picture;
 photographerImage.alt = `Portrait de ${name}, photographe`;
 photographerImage.classList.add('imageMiniature');
  
 const photographHeader = document.querySelector(".photograph-header");
 photographHeader.appendChild(divDetails);
 const mainContact = document.getElementById("main_contact");
 
 // Insérez divDetails avant le bouton de contact
 mainContact.insertBefore(divDetails, mainContact.querySelector(".photograph-header"));
 photographHeader.appendChild(photographerImage); 
 return photographHeader;
 
}
 