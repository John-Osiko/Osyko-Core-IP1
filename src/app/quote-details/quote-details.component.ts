import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote:Quote;

  numberOfLikes: number = 0;
  likeButton() {
    this.numberOfLikes+=1;
  }
  numberOfDislikes: number = 0;
  dislikeButton() {
    this.numberOfDislikes+=1;
  }

  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(irrelevant:boolean){
    this.isComplete.emit(irrelevant);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
