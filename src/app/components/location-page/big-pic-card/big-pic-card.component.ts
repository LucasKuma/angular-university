import { Component, Input, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { dataFake } from '../../../data/dataFake'

@Component({
  selector: 'app-big-pic-card',
  standalone: false,

  templateUrl: './big-pic-card.component.html',
  styleUrl: './big-pic-card.component.css'
})
export class BigPicCardComponent {
  //bigCard:string = '/imgs/ImagePlaceholder.webp';
  @Input()
  bigCardCover:string = "";

  /*
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(data => data.id)[0]
    this.bigCardCover = result.bigCardCover;
  }
*/
}
