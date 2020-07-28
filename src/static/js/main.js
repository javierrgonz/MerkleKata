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
            let grid = new Grid(getCardsFromJson(responseJson), GAME_CONTAINER_ID).getGrid();
       } else {
            ErrorUtils.updateMainFormError(PIXABAY_NO_RESULTS_ERROR_MSG);
       }
       }
    );
}

const getImages = async (keyword) => {
    const response = await fetch(PIXABAY_BASE_GET_REQUEST.replace(ID_SELECTOR, keyword))
        .catch(function(error) {
            ErrorUtils.updateMainFormError(PIXABAY_CONECCTION_ERROR_MSG);
        });
    const jsonResponse = await response.json();
    return jsonResponse;
};
  
function getCardsFromJson(responseJson) {
    const images = responseJson.hits.map(a => a.previewURL);
    let cards = [];
    // Create a pair of cards using images
    for (i=0; i<images.length; ++i) {
        cards.push(new Card(CARD_ID_PREFFIX + i + "a", images[i]));
        cards.push(new Card(CARD_ID_PREFFIX + i + "b", images[i]));
    }
    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);
    return cards;
}