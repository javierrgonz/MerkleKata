class Card {
    constructor(id, imageSrc, flippedCards, actualCards) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.flippedCards = flippedCards;
        this.actualCards = actualCards;
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
            // Comprobar la longitud del array actualCards

            // si es 0 incluir la carta y no devolver

            // si es 1 obtener el elemento del array y comprobar su imagen

            // si es la misma, pasar ambas cartas al array de flippedCars y vaciar el actualCards

            // si no es la misma, setear clase transparent a ambas cartas y vaciar el actualCards
        }
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