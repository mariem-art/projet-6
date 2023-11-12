
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Création de la fonction editNav
function editNav() {
    //Création d'une variable x
    //qui correspond à l'id myTopnav soit la barre haute de l'entête
    var x = document.getElementById("myTopnav");

    //Si la propriété className de cet élément
    //correspond en valeur et en nature à topnav
    if (x.className === "topnav") {

        //alors ajouter responsive au nom de la classe
        x.className += " responsive";

        //sinon,
    } else {
        x.className = "topnav";
    }
}
// DOM Elements
// Création d'une constante modalbg correspond à bground la div qui contient le formulaire d'inscription
const modalbg = document.querySelector(".bground");

// Création d'une constante modalBody correspond à la div avec classe modal-body contenu dans bground
const modalBody = document.querySelector(".modal-body");

// Création d'une constante formulaire correspond au form
const formulaire = document.querySelector("#contact-form");

//Création d'une variable ayant pour id confirmation-message
var confirmationMessage = document.querySelector("#confirmation-message");



//Ouverture de la modale 

//Ajout de de la méthode forEach sur le bouton je m'inscris, pour chaque click sur le btn, on lance la fonction launchModal
//querySelector.addEventListener("click", launchModal);

//Fonction launchModal display du div contenant le form à block
function launchModal() {
    modalbg.style.display = "block";
}

//Fermeture de la modale 



//Création variable closeButton : sélectionne le bouton fermer après la validation du form
var closeButton = document.querySelector("closeModal");

// Retire le bouton fermer du formulaire
//closeModal.remove();

//Fonction closeModal avec le paramètre reset
function closeModal(reset) {
    //passage du display block à none
    modalbg.style.display = "none";

    //On vide le modal body
    modalBody.innerHTML = "";

    
    // on ne vide le formulaire que s'il est valide
    if (reset) {
        formulaire.reset();
    }

    //On ajoute à la modalBody le formulaire
    modalBody.appendChild(formulaire);

    //On donne une marginTop de 0 à la modalBody
    modalBody.style.marginTop = "0";
}
//Fonction validate appelée lors du clic du bouton je m'insrit  dans le form
function validate() {
    var first = formulaire.elements.first.value;
    var last = formulaire.elements.last.value;
    var email = formulaire.elements.email.value;
    var message =formulaire.elements.message.value;

    // 1/ Vérification de la longueur minimale du nom entré de l'input first / prénom
    if (first.length < 2) {
        document.getElementById("first-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        return false;
    } else {
        document.getElementById("first-error-message").innerHTML = "";
    }
    // 2/ Vérification de la longueur minimale du nom entré de l'input last / prénom
    if (last.length < 2) {
        document.getElementById("last-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        return false;
    } else {
        document.getElementById("last-error-message").innerHTML = "";
    }
    // 3/ Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error-message").innerHTML = "Veuillez entrer un email valide.";
        return false;
    } else {
        document.getElementById("email-error-message").innerHTML = "";
    }
    //4/vérification de message
    if (message.length >20 ){
        document.getElementById("message-error-message").innerHTML = "Votre message doit contenir entre 20 et 200 caractères.";
        return false;
    } else {
        document.getElementById("message-error-message").innerHTML = "";
    }
    // Le formulaire est valide
    //Création du message de confirmation

    // On vide modalBody
    modalBody.innerHTML = "";


    //On ajoute au modalBody le message de confirmation
    modalBody.appendChild(confirmationMessage);

    //On modifie le contenu de conformationMessage
    confirmationMessage.innerText = "  ";

    //On ajoute au modalBody le bouton fermer
    modalBody.appendChild(closeModal);

    // Lorsqu'on clique sur ce bouton, on fait passer closeModal à true, ce qui videra le formulaire
    closeButton.addEventListener("click", function () {
        closeModal(true)
    });
    //On retourne true pour le formulaire
    return true;
}
const submitButton = document.querySelector(".contact_Envoyer");
submitButton.addEventListener("click",  (event) =>{ 
    event.preventDefault();
validate();
}) 



