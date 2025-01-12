import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  standalone: false,

  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.css'
})
export class SmallCardsComponent {

  @Input()
  imgSmallCard:string = ""

  @Input()
  titleCard:string = ""
}
