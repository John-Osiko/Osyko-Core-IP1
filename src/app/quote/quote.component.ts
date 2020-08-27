import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Wisdom Quote', 'Judge the character of a man by how he treats those who can do nothing for him.', 'Asian proverb','Montesinos Hendrick', new Date(2019, 2, 9)), //Asian proverb
    new Quote(2,'Life Quote', 'Humor prevents a hardening of the attitudes.', 'Joel Goodman','Carla Exposito', new Date(2018, 6, 9) ), //Joel Goodman
    new Quote(3,'Attitude', 'Weakness of attitude becomes weakness of character.', 'Albert Einstein','Guzman', new Date(2019, 9, 26) ), //Albert Einstein
    new Quote(4, 'Wisdom Quote', 'No bird soars too high if he soars with his own wings.', 'William Blake','Sebastian', new Date(2010, 1, 12) ), //William Blake
    new Quote(5, 'Attitude', 'Your attitude towards failure determines your altitude after failure.', 'John C. Maxwell','Osyko', new Date(2020, 6, 9) ), //John C. Maxwell
    new Quote(6, 'Wisdom Quote', 'Sometimes we need to see the bad side, to appreciate the good side.', 'Anthony Liccione','Wesley', new Date(2017, 5, 31) ), //Anthony Liccione
    new Quote(7, 'Wisdom Quote', 'Anger is the only put off until now.', 'Czech Republic','Snipes', new Date(2019, 6, 9) ), //Czech Republic
    new Quote(8, 'Attitude', 'People may hear your words, but feel your attitude.', 'John C. Maxwell','Omari', new Date(2019, 7, 3) ), //John C. Maxwell
    new Quote(9, 'Wisdom Quote', 'Much wisdom often goes with fewest words.', 'Sophocles','Shiti', new Date(2020, 6, 11) ), //Sophocles
    new Quote(10, 'Wisdom Quote', 'Anger always has a reason but there are no good reasons to be angry.', 'Debasish Mridha, M.D.','Whizzle', new Date(2019, 12, 29) ), //Debasish Mridha, M.D.
    new Quote(11, 'Wisdom Quote', 'Knowing yourself is the beginning of all wisdom.', 'Aristotle','Msaani', new Date(2017, 9, 9) ), //Aristotle
    new Quote(12, 'Attitude', 'Do not downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.', 'John Assaraf','Omulamuzi', new Date(2018, 6, 16) ), //John Assaraf
    new Quote(13, 'Wisdom Quote', 'The quality, not the longevity of the life of a person is what is important.', 'Martin Luther King, Jr.','Jakadala', new Date(2018, 5, 17) ), //Martin Luther King, Jr.
    new Quote(14,'Life Quote', 'The Wine of Life keeps oozing drop by drop, the Leaves of Life keep falling one by one.', 'Edward Fitzgerald','Jesos', new Date(2019, 4, 2) ), //Edward Fitzgerald
    new Quote(15,'Flirt', 'Love does not make the world go round. Love makes the ride worthwhile', 'Franklin P. Jones','Shiko', new Date(2019, 8, 9) ) //Franklin P. Jones
  ];
toggleDetails(index) {
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

deleteQuote(isComplete, index) {
  if(isComplete){
    let toDelete = confirm(`Confirm delete of ${this.quotes[index].name}?`)
    
    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }
}

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.completeDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
