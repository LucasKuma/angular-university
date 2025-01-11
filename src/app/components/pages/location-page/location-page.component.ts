import { Component } from '@angular/core';
import { dataFake } from '../../../data/dataFake'
import { BigPicCardComponent } from '../../location-page/big-pic-card/big-pic-card.component'

@Component({
  selector: 'app-location-page',
  standalone: false,

  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.css'
})
export class LocationPageComponent {
  bigCardCover:string = "";
  smallCardCover:string = "";
  private id:string = "";
}
