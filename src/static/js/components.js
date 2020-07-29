class Card {
    constructor(id, imageSrc, flippedCards, actualCards, finalMethod) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.flippedCards = flippedCards;
        this.actualCards = actualCards;
        this.finalMethod = finalMethod;
    }

    getCard() {
        let image = document.createElement('img');
            image.classList.add(CARD_IMAGE_CLASS);
            image.src = this.imageSrc;
            image.id = this.id;
            image.addEventListener('click', event => {
                this.flip(image);
            });
        let card = document.createElement('div');
            card.id = 'div_ ' + this.id;
            card.classList.add(CARD_DIV_CLASS);
            card.appendChild(image);
        return card;
    }

    flip(image) {
        if (image.classList.contains('transparent')) {
            image.classList.remove('transparent');
            if (this.actualCards.length == 0) {
                this.actualCards.push(image);
                finalMethod();
            } else {
                this.disableEventListeners()
                if ((this.actualCards[0].src == image.src) && (this.actualCards[0].id != image.id)) {
                    // Saves flipped cards and empty actual cards array
                    this.flippedCards.push(this.actualCards[0]);
                    this.flippedCards.push(image);
                    this.actualCards.length = 0;
                    if (this.flippedCards.length == 20) {
                        finalMethod();
                    }
                } else {
                    let previousImage = this.actualCards[0];
                    this.actualCards.length = 0;
                    AsyncUtils.wait(
                        500,
                        this.setTransparent,
                        [image, previousImage]);
                }
            }
        }
    }

    disableEventListeners() {
        let images = Array.from(document.getElementsByClassName('card-image'));
            images.forEach(image =>{
                image.removeEventListener('click', this.flip, false);
            });
    }

    enableEventListeners() {
        let images = Array.from(document.getElementsByClassName('card-image'));
            images.forEach(image =>{
                image.addEventListener('click', event => {
                    this.flip(image);
                });
            });
    }

    setTransparent(images){
        images[0].classList.add('transparent');
        images[1].classList.add('transparent');
    }
}

class Grid {
    constructor(cards, parentComponentId) {
        this.cards = cards;
        this.parentComponentId = parentComponentId;
    }

    getGrid() {
        let gridRow1 = document.createElement('tr');
        let gridRow2 = document.createElement('tr');
        let gridRow3 = document.createElement('tr');
        let gridRow4 = document.createElement('tr');
        let i=0;
        for (i; i<5; ++i) {
            let gridCell = document.createElement('td');
                gridCell.id = GRID_TABLE_CELL_PREFIX + i;    
                gridCell.appendChild(this.cards[i].getCard())
                gridRow1.appendChild(gridCell);
        }
        for (i; i<10; ++i) {
            let gridCell = document.createElement('td');
                gridCell.id = GRID_TABLE_CELL_PREFIX + i;    
                gridCell.appendChild(this.cards[i].getCard())
                gridRow2.appendChild(gridCell);
        }
        for (i; i<15; ++i) {
            let gridCell = document.createElement('td');
                gridCell.id = GRID_TABLE_CELL_PREFIX + i;    
                gridCell.appendChild(this.cards[i].getCard())
                gridRow3.appendChild(gridCell);
        }
        for (i; i<20; ++i) {
            let gridCell = document.createElement('td');
                gridCell.id = GRID_TABLE_CELL_PREFIX + i;    
                gridCell.appendChild(this.cards[i].getCard())
                gridRow4.appendChild(gridCell);
        }
        let grid = document.createElement('table');
            grid.classList.add(GRID_TABLE_CLASS);
            grid.appendChild(gridRow1);
            grid.appendChild(gridRow2);
            grid.appendChild(gridRow3);
            grid.appendChild(gridRow4);
        let parentComponent = document.querySelector(ID_SELECTOR + this.parentComponentId);
            parentComponent.appendChild(grid);
        return parentComponent;
    } 
}