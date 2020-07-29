let flippedCards = [];
let actualCards = [];
let startTime = null;

function testExplorer(){
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    console.log(isIE);
}
    
function startGame() {
    var keyword = document.getElementById(MAIN_FORM_KEYWORD_ID);
    if (!ValidationUtils.validKeyword(keyword.value)) {
        ErrorUtils.updateMainFormError(MAIN_FORM_ERROR_MSG);
    } else {
        ErrorUtils.cleanMainFormError();
        getImages(keyword.value).then(responseJson => {
           if (ValidationUtils.validatePixabayResponse(responseJson)) {
                Utils.toogleVisibylityById(MAIN_FORM_CONTENT_ID);
                new Grid(getCardsFromJson(responseJson), GAME_CONTAINER_ID).getGrid();
                AsyncUtils.wait(PRECHARGE_TIME, Utils.toogleVisibylityById, GAME_CONTAINER_ID);
                AsyncUtils.wait(SHOW_TIME, Card.setTransparent, document.querySelectorAll(CLASS_SELECTOR + CARD_IMAGE_CLASS));
                startTime = new Date().getTime();
           } else {
                ErrorUtils.updateMainFormError(PIXABAY_NO_RESULTS_ERROR_MSG);
           }}
        );
    } 
}

function getCardsFromJson(responseJson) {
    const images = responseJson.hits.map(a => a.previewURL);
    let cards = [];
    for (i=0; i<images.length; ++i) {
        cards.push(new Card(CARD_ID_PREFFIX + i + A, images[i], flippedCards, actualCards));
        cards.push(new Card(CARD_ID_PREFFIX + i + B, images[i], flippedCards, actualCards));
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
}

function finalMethod() {
    let finalTitle = document.getElementById(END_GAME_FINAL_TITLE_ID)
        finalTitle.innerText = Utils.getPlayingTime(startTime);
        Utils.toogleVisibylityById(GAME_CONTAINER_ID);
        Utils.toogleVisibylityById(END_GAME_FINAL_TITLE_DIV);
}

// Async get images
const getImages = async (keyword) => {
    const response = await fetch(PIXABAY_BASE_GET_REQUEST.replace(ID_SELECTOR, keyword))
        .catch(function(error) {
            ErrorUtils.updateMainFormError(PIXABAY_CONECCTION_ERROR_MSG);
        });
    const jsonResponse = await response.json();
    return jsonResponse;
};