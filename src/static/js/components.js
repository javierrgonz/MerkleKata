class Card {
    constructor(id, imageSrc, flippedCards, actualCards, finalMethod) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.flippedCards = flippedCards;
        this.actualCards = actualCards;
        this.finalMethod = finalMethod;
    }

    getCard() {
        let image = document.createElement(IMG);
            image.classList.add(CARD_IMAGE_CLASS);
            image.src = this.imageSrc;
            image.id = this.id;
            image.addEventListener(EVENT_CLICK, event => {
                this.flip(image);
            });
        let card = document.createElement(DIV);
            card.id = CARD_DIV_ID_PREFFIX + this.id;
            card.classList.add(CARD_DIV_CLASS);
            card.appendChild(image);
        return card;
    }

    flip(image) {
        if (image.classList.contains(CSS_TRANSPARENT_CLASS)) {
            image.classList.remove(CSS_TRANSPARENT_CLASS);
            if (this.actualCards.length == 0) {
                this.actualCards.push(image);
            } else {
                if ((this.actualCards[0].src == image.src) && (this.actualCards[0].id != image.id)) {
                    this.flippedCards.push(this.actualCards[0], image);
                    this.actualCards.length = 0;
                    if (this.flippedCards.length == 20) {
                        finalMethod();
                    }
                } else {
                    let previousImage = this.actualCards[0];
                    this.actualCards.length = 0;
                    AsyncUtils.wait(
                        500,
                        Card.setTransparent,
                        [image, previousImage]);
                }
            }
        }
    }

    static setTransparent(images){
        for (i=0;i<images.length;i++){
            images[i].classList.add(CSS_TRANSPARENT_CLASS);
        }
    }
}

class Grid {
    constructor(cards, parentComponentId) {
        this.cards = cards;
        this.parentComponentId = parentComponentId;
    }

    getGrid() {
        let row1 = this.getTr(), row2 = this.getTr(), row3 = this.getTr(), row4 = this.getTr();
        let cells = this.getCells();
        let i = 0;
        do {
            row1.appendChild(cells[i++]);
            row2.appendChild(cells[i++]); 
            row3.appendChild(cells[i++]);
            row4.appendChild(cells[i++]);
        } while (i<20);
        let grid = document.createElement(TABLE);
            grid.classList.add(GRID_TABLE_CLASS);
            grid.append(row1, row2, row3, row4);
        let parentComponent = document.querySelector(ID_SELECTOR + this.parentComponentId);
            parentComponent.appendChild(grid);
        return parentComponent;
    } 

    getTr() {
        return document.createElement(TR);
    }

    getCells() {
        let cells = [];
        for (i=0; i<20; i++){
            let cell = document.createElement(TD);
                cell.id = GRID_TABLE_CELL_PREFIX + i;    
                cell.appendChild(this.cards[i].getCard())
                cells.push(cell);
        }
        return cells;
    }


}