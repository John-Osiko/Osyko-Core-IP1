import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyQuotes';
  quotes:Quote[]=[
  { id: 1, name: 'Judge the character of a man by how he treats those who can do nothing for him.' }, //Asian proverb
  { id: 2, name: 'Humor prevents a hardening of the attitudes.' }, //Joel Goodman
  { id: 3, name: 'Weakness of attitude becomes weakness of character.' }, //Albert Einstein
  { id: 4, name: 'No bird soars too high if he soars with his own wings.' }, //William Blake
  { id: 5, name: 'Your attitude towards failure determines your altitude after failure.' }, //John C. Maxwell
  { id: 6, name: 'Sometimes we need to see the bad side, to appreciate the good side.'}, //Anthony Liccione
  { id: 7, name: 'Anger is the only put off until now.'}, //Czech Republic
  { id: 8, name: 'People may hear your words, but feel your attitude.' }, //John C. Maxwell
  { id: 9, name: 'Much wisdom often goes with fewest words.'}, //Sophocles
  { id: 10, name: 'Anger always has a reason but there are no good reasons to be angry.' }, //Debasish Mridha, M.D.
  { id: 11, name: 'Knowing yourself is the beginning of all wisdom.'}, //Aristotle
  { id: 12, name: 'Do not downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.'}, //John Assaraf
  { id: 13, name: 'The quality, not the longevity of the life of a person is what is important.'}, //Martin Luther King, Jr.
  { id: 14, name: 'The Wine of Life keeps oozing drop by drop, the Leaves of Life keep falling one by one.'}, //Edward Fitzgerald
  { id: 15, name: 'Love does not make the world go round. Love makes the ride worthwhile'} //Franklin P. Jones
];
}
