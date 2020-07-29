let flippedCards = [];
let actualCards = [];
let startTime = null;

function validateKeyword() {
    var keyword = document.getElementById(MAIN_FORM_KEYWORD_ID);
    if (!ValidationUtils.validKeyword(keyword.value)) {
        ErrorUtils.updateMainFormError(MAIN_FORM_ERROR_MSG);
    } else {
        startGame(keyword);
    } 
}

function startGame(keyword) {
    // Clean errors
    ErrorUtils.cleanMainFormError();
    getImages(keyword.value).then(responseJson => {
       if (ValidationUtils.validatePixabayResponse(responseJson)) {
            // Create playingField and set grid
            Utils.toogleVisibylityById(MAIN_FORM_CONTENT_ID);
            // Get cards and grid
            let grid = new Grid(getCardsFromJson(responseJson), GAME_CONTAINER_ID).getGrid();
            // Show grid
            AsyncUtils.wait(1000, Utils.toogleVisibylityById, GAME_CONTAINER_ID);
            AsyncUtils.wait(1500, removeCardsOpacity);
            startTime = new Date().getTime();
       } else {
            ErrorUtils.updateMainFormError(PIXABAY_NO_RESULTS_ERROR_MSG);
       }
       }
    );
}

function removeCardsOpacity() {
   const cardImages = document.querySelectorAll('.card-image');
   cardImages.forEach(card => {
        card.classList.add('transparent');
    });
}

function getCardsFromJson(responseJson) {
    const images = responseJson.hits.map(a => a.previewURL);
    let cards = [];
    // Create a pair of cards using images
    for (i=0; i<images.length; ++i) {
        cards.push(new Card(CARD_ID_PREFFIX + i + "a", images[i], flippedCards, actualCards));
        cards.push(new Card(CARD_ID_PREFFIX + i + "b", images[i], flippedCards, actualCards));
    }
    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);
    return cards;
}

function finalMethod() {
    let playingTime = Utils.getPlayingTime(startTime);

}

// Async
const getImages = async (keyword) => {
    const response = await fetch(PIXABAY_BASE_GET_REQUEST.replace(ID_SELECTOR, keyword))
        .catch(function(error) {
            ErrorUtils.updateMainFormError(PIXABAY_CONECCTION_ERROR_MSG);
        });
    const jsonResponse = await response.json();
    return jsonResponse;
};