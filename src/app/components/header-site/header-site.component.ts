import { Component } from '@angular/core';
import { faMap,
  faUtensils,
  faHotel,
  faShoePrints,
  }
  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-site',
  standalone: false,

  templateUrl: './header-site.component.html',
  styleUrl: './header-site.component.css'
})
export class HeaderSiteComponent {

  faUtensils = faUtensils;
  faMap = faMap;
  faHotel = faHotel;
  faShoePrints = faShoePrints;

}
