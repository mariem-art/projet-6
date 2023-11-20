
//Mettre le code JavaScript lié à la page photographer.html


//récupérer le lien URL de la page 

const searchParams = new URL(location.href);
// affiche id 
//console.log(searchParams.searchParams.get("id"));
const id= searchParams.searchParams.get("id");
//console.log (location.href);
// Récupération des pièces depuis le fichier JSON
// afficher le bon photograph avec son id 

fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
    photographes.photographers.forEach(photographe=>{
      if(photographe.id == id){
        //photographe.getHeaderPhotographer();
        const photographerModel = photographerTemplate(photographe);
        const userCardDOM = photographerModel.getHeaderPhotographer();
      }
    })
})
);

    function getHeaderPhotographer() {
        const divDetails = document.createElement('div');
        divDetails.classList.add('photograph-profil');
        divDetails.setAttribute('role', 'article');
        divDetails.setAttribute('aria-label', `${name}, ${city}, ${country}, ${tagline}`);
        //création h1

         const h1= document.createElement('h1');
         h1.textContent= name;

       //crée pays
         const h3 = document.createElement( 'h4' );
         h3.textContent = city +","+ country ;


          //crée sous titre
        const h4 = document.createElement( 'h3' );
        h4.textContent = tagline;
       
      // Structure les éléments

         article.appendChild(h1);
         article.appendChild(h4);
         article.appendChild(h3);

return { name, tagline, city, country  ,getHeaderPhotographer,}
}

function getPhotoPhotographer(){
  const divPhotohrager = document.createElement('div');
  divPhotohrager.classList.add('image-photograph');
  const picture = `./images/photographers/${portrait}`;
}
async function PhotographerPage(data,PhotographersMedia) {
    const galery=document.querySelector('.galery');
    //création de const média 
    const divMedia= document.createElement('div');
    divMedia.classList.add('.media-container');
}



// async function images() {
//   // Récupère les datas des Medias
//   const {media} = await getPhotographersMedia();
//   displayData(media);
// }

//images();
let galerieMedia=[];

//
function mediaTemplate(media) {
  let isLiked=false;
  const { id, photographerId, title, image, video, likes, date } = media;
 const mediaPath= image ? `./images/photograhers${photographerId}/${image}` : `./images/photograhers${photographerId}/${video}`; 
}
//clique pour images

