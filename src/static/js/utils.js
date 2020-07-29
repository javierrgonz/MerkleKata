class Utils {
    // General utils
    static getById(elementId) {
        return document.getElementById(elementId);
    }

    static getByClass() {
        return document.querySelector(CLASS_SELECTOR + elementId);
    }

    static toogleVisibylityById(id) {
        var elem = document.getElementById(id);
        if (elem.classList.contains(CSS_HIDDEN_CLASS)) {
            elem.classList.replace(CSS_HIDDEN_CLASS, CSS_BLOCK_CLASS);
        } else {
            elem.classList.replace(CSS_BLOCK_CLASS, CSS_HIDDEN_CLASS);
        }
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