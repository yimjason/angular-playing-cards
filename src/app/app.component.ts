import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];
  cards = [];
  isVisible = false;
  displayCard;

  constructor() {
    this.createDeck();
  }

  dropDeck = () => {
    this.cards = [];
  };

  createDeck = () => {
    this.suits.forEach((suit) => {
      for (let i = 1; i <= 13; i++) {
        let num = '';
        switch (i) {
          case 1:
            num = 'A';
            break;
          case 11:
            num = 'J';
            break;
          case 12:
            num = 'Q';
            break;
          case 13:
            num = 'K';
            break;
          default:
            num = i + '';
        }
        let color = suit == '&hearts;' || suit == '&diams;' ? 'red' : 'black';
        let card = { value: num + suit, color };
        this.cards.push(card);
      }
    });
  };

  toggleDeck = () => {
    this.isVisible = !this.isVisible;
  };

  draw = () => {
    this.displayCard = this.cards.pop();
  };

  shuffle = () => {
    const totalCards = this.cards.length;
    for (let i = 0; i < totalCards; i++) {
      const randomIndex = Math.floor(Math.random() * totalCards);
      let temp = this.cards[randomIndex];
      this.cards[randomIndex] = this.cards[i];
      this.cards[i] = temp;
    }
  };
}
