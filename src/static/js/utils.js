class Utils {
    // General utils
    static getById(elementId) {
        return document.getElementById(elementId);
    }

    static getByClass() {
        return document.querySelector(CLASS_SELECTOR + elementId);
    }

    static toogleVisibylityById(id) {
        let elem = document.getElementById(id);
        if (elem.classList.contains(CSS_HIDDEN_CLASS)) {
            elem.classList.replace(CSS_HIDDEN_CLASS, CSS_BLOCK_CLASS);
        } else {
            elem.classList.replace(CSS_BLOCK_CLASS, CSS_HIDDEN_CLASS);
        }
    }

    static getPlayingTime(startTime) {
        const playingTime = (new Date().getTime() - startTime);
        const min = Math.floor(( playingTime % (3600000)) / (60000));
        const s = Math.floor(( playingTime % (60000)) / 1000);

        if (min > 0) {
            return END_GAME_TIME_SENTENCE_WITH_MIN.replace('#', min).replace('$', s);
        }
        return END_GAME_TIME_SENTENCE.replace('#', s);
    }
    
}

class ValidationUtils {

    static validKeyword(keyword) {
        return this.validateNotNull(keyword) 
            && this.validateCharacters(keyword);
    }

    static validateNotNull(string) {
        return (string !== null) && (string !== "");
    }

    static validateObjecsNotNull(objectArray) {
        let notNull = true;
        objectArray.forEach(object => {
            if (object === null || object === undefined) {
                return false;
            }
        });
        return notNull;
    }

    static validateCharacters(string) {
        // Set max of 100 char as pixabay max
        return /^([a-zA-Z0-9]{1,100})$/.test(string);
    }

    static validatePixabayResponse(responseJson) {
        return responseJson !== null && responseJson.hits !== null && responseJson.hits.length === 10;
    }
}

class ErrorUtils {
    static updateMainFormError(string) {
        document.getElementById(MAIN_FORM_ERROR_MESSAGE_ID).innerHTML = string;
    }

    static cleanMainFormError() {
        this.updateMainFormError(BLANK_STRING);
    }
}

class AsyncUtils {
    
    // Wait function
    static wait(ms, postFunc, postFuncArg){
        setTimeout(function () { 
            postFunc(postFuncArg); }, 
        ms);
}

}