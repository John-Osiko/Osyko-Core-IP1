import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Judge the character of a man by how he treats those who can do nothing for him.', description: 'Asian proverb'}, //Asian proverb
    { id: 2, name: 'Humor prevents a hardening of the attitudes.', description: 'Joel Goodman' }, //Joel Goodman
    { id: 3, name: 'Weakness of attitude becomes weakness of character.', description: 'Albert Einstein' }, //Albert Einstein
    { id: 4, name: 'No bird soars too high if he soars with his own wings.', description: 'William Blake' }, //William Blake
    { id: 5, name: 'Your attitude towards failure determines your altitude after failure.', description: 'John C. Maxwell' }, //John C. Maxwell
    { id: 6, name: 'Sometimes we need to see the bad side, to appreciate the good side.', description: 'Anthony Liccione' }, //Anthony Liccione
    { id: 7, name: 'Anger is the only put off until now.', description: 'Czech Republic' }, //Czech Republic
    { id: 8, name: 'People may hear your words, but feel your attitude.', description: 'John C. Maxwell' }, //John C. Maxwell
    { id: 9, name: 'Much wisdom often goes with fewest words.', description: 'Sophocles' }, //Sophocles
    { id: 10, name: 'Anger always has a reason but there are no good reasons to be angry.', description: 'Debasish Mridha, M.D.' }, //Debasish Mridha, M.D.
    { id: 11, name: 'Knowing yourself is the beginning of all wisdom.', description: '' }, //Aristotle
    { id: 12, name: 'Do not downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.', description: 'John Assaraf' }, //John Assaraf
    { id: 13, name: 'The quality, not the longevity of the life of a person is what is important.', description: 'Martin Luther King, Jr.' }, //Martin Luther King, Jr.
    { id: 14, name: 'The Wine of Life keeps oozing drop by drop, the Leaves of Life keep falling one by one.', description: 'Edward Fitzgerald' }, //Edward Fitzgerald
    { id: 15, name: 'Love does not make the world go round. Love makes the ride worthwhile', description: 'Franklin P. Jones' } //Franklin P. Jones
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
