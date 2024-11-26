/** importation des modules */
import { displayAPOD, displayRange, loadingMessage } from "./api.js";

export const FIRST_USER_CHOICE = ''
export const SECOND_USER_CHOICE = ''

/** Selection des conteneur pour APOD ( 'APOD' => photo du jour ) */
loadingMessage.style.display = 'none'
const body = document.getElementById('body');
const headingApod = document.querySelector('h1')
const apodContainer = document.getElementById('apod-container');
const apod = document.getElementById('APOD')
const titleApod = document.getElementById('title-apod');
const explanationApod = document.getElementById('explanation-apod');
const dateApod = document.getElementById('date-apod');
const imageApod = document.getElementById('img-apod');
/** toggle button */
const toggleButton = document.getElementById('toggle-button');
const optionsContainer = document.getElementById('options-container');
const dateSearch = document.getElementById('date-search');
const dateRangeSearch = document.getElementById('date-range-search');
const eraseButton = document.getElementById('erase-button');
optionsContainer.appendChild(loadingMessage);



/** affficher/masquer boutons */
toggleButton.addEventListener('click', () => {
    const isHidden = optionsContainer.style.display === 'none' || optionsContainer.style.display === '';
    if (isHidden) {
        optionsContainer.style.display = 'block';
        toggleButton.innerText = "Masquer bouton";
    } else {
        optionsContainer.style.display = 'none';
        toggleButton.innerText = 'Afficher boutons'
    }
});

/** effacer contenue page */
eraseButton.addEventListener('click', () => {
    headingApod.innerHTML = '';
    titleApod.innerHTML = '';
    explanationApod.innerHTML = '';
    dateApod.innerHTML = '';
    imageApod.innerHTML = '';
});

/** Afficher Apod */
apod.addEventListener('click', () => {
    displayAPOD()
});

dateRangeSearch.addEventListener('click', () => {
    displayRange();
})
