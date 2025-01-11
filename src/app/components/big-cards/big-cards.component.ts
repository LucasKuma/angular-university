import { Component } from '@angular/core';

@Component({
  selector: 'app-big-cards',
  standalone: false,

  templateUrl: './big-cards.component.html',
  styleUrl: './big-cards.component.css'
})
export class BigCardsComponent {
  title:string = "Melhores Passeios em Fazendas"
  imgCard:string = "https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/migrados/galeria/67202/PARANA_AGROPLANTACAO_DE_BROCOLIS_E_COUVEFLORS.J.P240621DRONE_2.JPG"
}
