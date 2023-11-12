
// Récupération des pièces depuis le fichier JSON
fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
    console.log(photographes)
})
);


//Mettre le code JavaScript lié à la page photographer.html
const fetchData = async () => {
    try {
        const response = await fetch("photographers.json");
        if (response.ok) {
            const data = await response.json();
            return { photographers: data.photographers,
            media: data.media};
        }
    } catch (error) {
        console.error(error);
    }
};
