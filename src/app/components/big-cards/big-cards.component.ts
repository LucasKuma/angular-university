import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-cards',
  standalone: false,

  templateUrl: './big-cards.component.html',
  styleUrl: './big-cards.component.css'
})
export class BigCardsComponent {
  @Input()
  titleCard:string = ""
  @Input()
  imgBigCard:string = ""
}
