import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-pic-card',
  standalone: false,

  templateUrl: './small-pic-card.component.html',
  styleUrl: './small-pic-card.component.css'
})
export class SmallPicCardComponent {

  @Input()
  smallCardCover:string = "";
}
