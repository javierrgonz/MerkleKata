class GridPage {
    constructor() {
    }

    getTitleDivContainer() {
        const divContainer = document.createElement('div');
        divContainer.classList.add("title-container");
        return divContainer;
    }

    getContentDivContainer() {
        const divContainer = document.createElement('div');
        divContainer.classList.add("content");
        return divContainer;
    }

    render() {
        const mainContent = document.querySelector('#main-content');
        mainContent.appendChild(this.getTitleDivContainer());
        mainContent.appendChild(this.getContentDivContainer());
    }
}