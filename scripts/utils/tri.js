
const tri = (listMedia) => {
    // Récupérer l'élément select
    const selectElement = document.getElementById('tri-photograph');
    // Écouter l'événement de changement du select
    selectElement.addEventListener('change', () => {
        const selectedValue = selectElement.value;
        if (selectedValue === 'popularite') {
            // Trier par popularité (likes)
            console.log('popularite');
            listMedia.sort((a, b) => b.likes - a.likes);
        } else if (selectedValue === 'date') {
            // Trier par date
            listMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (selectedValue === 'titre') {
            // Trier par titre
            listMedia.sort((a, b) => a.title.localeCompare(b.title));
        }
    });

 }
 tri()