const BASE_URL_API = `https://api.nasa.gov/planetary/apod`;
const KEY = 'w1qZiSyElNKvBmMGpk3BYjIsrJSzpqz3caMVp90b';
const API_ROUTE = `&api_key=${KEY}`;
let startDate;
let endDate;
let dateUserChoice;
const DATE = `?date=${dateUserChoice}`;
const RANGE_DATE = `?start_date=${startDate}&end_date=${endDate}`;
let randomUserChoice = '';
const RANDOM = `?count=${randomUserChoice}`;
let thumbsUserChoice = '';
const THUMBS = `?thumbs=${thumbsUserChoice}`;

const SEARCH_PER_DATE = `${BASE_URL_API}${DATE}${API_ROUTE}`;
const SEARCH_PER_RANGE = `${BASE_URL_API}${RANGE_DATE}${API_ROUTE}`;
const SEARCH_RANDOM = `${BASE_URL_API}${RANDOM}${API_ROUTE}`;
const SEARCH_THUMBS = `${BASE_URL_API}${THUMBS}${API_ROUTE}`;

const toggleButton = document.getElementById('toggle-button');
const buttonContainer = document.getElementById('buttons-container');
const apodButton = document.getElementById('button-apod');
const searchDateButton = document.getElementById('button-search-date');
const searchRangeButton = document.getElementById('button-search-range');
const countButton = document.getElementById('button-count');
const thumbsButton = document.getElementById('button-thumbs');
const eraseButton = document.getElementById('button-erase');
const resultContainer = document.getElementById('results-container');
resultContainer.innerHTML = '';

toggleButton.addEventListener('click', () => {
    const isHidden = buttonContainer.style.display === 'none' || buttonContainer.style.display === '';
    if (isHidden) {
        buttonContainer.style.display = 'block';
        toggleButton.innerText = 'masquer';
    } else {
        buttonContainer.style.display = 'none';
        toggleButton.innerText = 'afficher';
    }
})

async function fetchData(type, firstEntry, secondEntry) {
    try {
        let url;

        if (type === 'apod') {
            url = `${BASE_URL_API}?api_key=${KEY}`;
        } else if (type === 'date') {
            url = `${BASE_URL_API}?date=${firstEntry}&api_key=${KEY}`;
        } else if (type === 'range') {
            url = `${BASE_URL_API}?start_date=${firstEntry}&end_date=${secondEntry}&api_key=${KEY}`
        } else if (type === 'random') {
            url = `${BASE_URL_API}?count=${firstEntry}&api_key=${KEY}`
        } else if (type === 'thumbs') {
            url = `${BASE_URL_API}?thumbs=${firstEntry}&api_key=${KEY}`
        }

        console.log(`fetching URL: $${url}`);
        const response = await fetch(url);

        if (!response.ok) {
            console.log('Erreur API:', response);
            return;
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


buttonContainer.addEventListener('click', (event) => {
    const buttonType = event.target.dataset.type;
    console.log(buttonType);

    if (buttonType === 'apod') {
        fetchData(buttonType);
    } else if (buttonType === 'date') {
        dateUserChoice = prompt("Veuillez entrer la date")
        fetchData(buttonType, dateUserChoice)
    } else if (buttonType === 'range') {
        startDate = prompt("Veuillez entrer la date de debut");
        endDate = prompt("Veuillez entrer la date de fin");
        fetchData(buttonType, startDate, endDate)
    } else if (buttonType === 'random') {
        const randomUserChoice = prompt("combien d'image voulez vous ?")
        fetchData(buttonType, randomUserChoice)
    }
})






