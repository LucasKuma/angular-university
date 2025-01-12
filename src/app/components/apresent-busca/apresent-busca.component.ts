import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apresent-busca',
  standalone: false,

  templateUrl: './apresent-busca.component.html',
  styleUrl: './apresent-busca.component.css'
})
export class ApresentBuscaComponent {

  @Input()
  title:string = ""
  @Input()
  apresentacao:string = ""

  placeholder:string = "Encontre Novas Aventuras"
}
