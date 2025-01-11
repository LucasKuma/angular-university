import { Component } from '@angular/core';

@Component({
  selector: 'app-apresent-busca',
  standalone: false,

  templateUrl: './apresent-busca.component.html',
  styleUrl: './apresent-busca.component.css'
})
export class ApresentBuscaComponent {
  title:string = "Locais para Conhecer"
  placeholder:string = "Encontre Novas Aventuras"
}
