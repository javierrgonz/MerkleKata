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
        if (elem.style.display === "none") {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
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
        return /^([a-z0-9]{1,100})$/.test(string);
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