class Title {
    constructor(imgUrl, titleText, titleDiv) {
        this.imgUrl = imgUrl;
        this.titleText = titleText;
        this.titleDiv = titleDiv;
    }

    getTitleText(titleText) {
        return document.createTextNode(titleText);
    }
    
    getLogo(logoUrl) {
        const logoImg = document.createElement('img');
        logoImg.src = logoUrl
        logoImg.classList.add("main-logo");
        return logoImg;
    }
    
    getTitleDivContainer() {
        const divContainer = document.querySelector('.title-container');
        return divContainer;
    }
    
    getTitle(titleText) {
        const titleElement = document.createElement('h1');
        titleElement.classList.add("main-title")
        titleElement.appendChild(this.getTitleText(titleText));
        return titleElement;
    }
    
    render() {
        const divContainer = this.getTitleDivContainer();
        divContainer.appendChild(this.getLogo(this.imgUrl));
        divContainer.appendChild(document.createElement('br'));
        divContainer.appendChild(this.getTitle(this.titleText));
    }
}