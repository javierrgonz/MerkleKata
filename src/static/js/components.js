class Card {
    constructor(id, imageSrc) {
        this.id = id;
        this.imageSrc = imageSrc;
    }

    getCard() {
        let image = document.createElement('img');
            image.classList.add(CARD_IMAGE_CLASS);
            image.src = this.imageSrc;
            image.addEventListener('click', this.showCard(image));
        let card = document.createElement('div');
            card.id = this.id;
            card.classList.add(CARD_DIV_CLASS);
            card.appendChild(image);
        return card;
    }

    showCard(image) {
        console.log(image);
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